# CloudREMS Public Website

Marketing site for CloudREMS, built with Next.js (App Router), TypeScript, and Tailwind CSS. Hosted at `https://www.cloudrems.com`.

- ERP portal (separate React app): `https://app.cloudrems.com`
- Backend API (separate): `https://api.cloudrems.com`

This project contains no ERP functionality. "Customer Login" links out to the portal.

## Local development

```bash
npm install
cp .env.example .env.local   # optional; see Environment variables
npm run dev                  # http://localhost:3000
```

Checks: `npm run lint` and `npx tsc --noEmit`.

## Production build and start

```bash
npm ci
npm run build
npm run start   # serves on PORT (default 3000)
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `LEAD_WEBHOOK_URL` | Server-side URL that receives demo/contact submissions as JSON (CRM, Zapier/Make/n8n, email relay). If empty, submissions are only logged. |
| `LEAD_WEBHOOK_SECRET` | Optional bearer token sent to the webhook. |

Neither variable is exposed to the browser. Form posts go to `/api/demo-request` and `/api/contact`, which validate input, reject honeypot hits, apply a basic per-IP rate limit, and require a same-origin request.

## Updating content

| What | Where |
| --- | --- |
| Contact details, social links, navigation | `lib/site.ts` (null values render labelled placeholders) |
| Features, solutions, steps, tour screens, videos | `lib/content.ts` |
| Screenshots | Replace files in `public/screenshots/` (keep 1280x800) or change `src` in `lib/content.ts` |
| YouTube videos | Set `youtubeId` for each entry in `videos` (`lib/content.ts`) |
| Social share image | `app/og/route.tsx` |
| Legal text | `app/privacy-policy/page.tsx`, `app/terms-and-conditions/page.tsx` (drafts; needs legal review) |

## Deployment (Ubuntu, Nginx, systemd)

Target directory: `/var/www/www.cloudrems.com`. Node.js 20.9+ is required.

1. Copy the project to the server (exclude `node_modules` and `.next`), then:
   ```bash
   cd /var/www/www.cloudrems.com
   cp .env.example .env.production   # fill in values
   npm ci
   npm run build
   sudo chown -R www-data:www-data /var/www/www.cloudrems.com
   ```
2. Install the service ([deploy/cloudrems-web.service](deploy/cloudrems-web.service)):
   ```bash
   sudo cp deploy/cloudrems-web.service /etc/systemd/system/
   sudo systemctl daemon-reload
   sudo systemctl enable --now cloudrems-web
   sudo journalctl -u cloudrems-web -f
   ```
3. Install the Nginx reverse proxy ([deploy/nginx-www.cloudrems.com.conf](deploy/nginx-www.cloudrems.com.conf)). Do not reuse the static-file config from the React portal.
   ```bash
   sudo cp deploy/nginx-www.cloudrems.com.conf /etc/nginx/sites-available/www.cloudrems.com
   sudo ln -s /etc/nginx/sites-available/www.cloudrems.com /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```
4. Enable HTTPS:
   ```bash
   sudo certbot --nginx -d www.cloudrems.com -d cloudrems.com --redirect
   ```
5. To redeploy: pull/copy changes, `npm ci && npm run build`, then `sudo systemctl restart cloudrems-web`.

## Launch checklist

- [ ] DNS `A`/`AAAA` records for `www.cloudrems.com` (and `cloudrems.com`) point to the server
- [ ] HTTPS certificate issued; HTTP redirects to HTTPS; bare domain redirects to `www`
- [ ] `systemctl status cloudrems-web` is active and enabled on boot
- [ ] `LEAD_WEBHOOK_URL` set; a test demo request and contact message arrive
- [ ] Real email, phone, WhatsApp, address, and social links added in `lib/site.ts`
- [ ] Placeholder screenshots replaced with actual portal screenshots
- [ ] YouTube video IDs added (or video section reviewed)
- [ ] Privacy Policy and Terms reviewed by legal counsel
- [ ] Social share image replaced (`app/og/route.tsx`) and checked with a share debugger
- [ ] `https://www.cloudrems.com/sitemap.xml` and `/robots.txt` load; sitemap submitted to Google Search Console
- [ ] Customer Login opens `https://app.cloudrems.com`; every link and button tested on mobile and desktop
- [ ] Lighthouse performance and accessibility checks pass
