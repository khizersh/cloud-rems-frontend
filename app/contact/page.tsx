import { Icon, type IconName } from "@/components/Icons";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero, Section } from "@/components/Section";
import { contactInfo, socialLinks } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact the CloudREMS team with questions about the cloud-based Real Estate ERP, or book a free demo.",
  path: "/contact",
});

type Item = { icon: IconName; label: string; value: string | null; placeholder: string; href?: string };

const items: Item[] = [
  {
    icon: "mail",
    label: "Email",
    value: contactInfo.email,
    placeholder: contactInfo.emailPlaceholder,
    href: contactInfo.email ? `mailto:${contactInfo.email}` : undefined,
  },
  {
    icon: "phone",
    label: "Phone",
    value: contactInfo.phone,
    placeholder: contactInfo.phonePlaceholder,
    href: contactInfo.phone ? `tel:${contactInfo.phone.replace(/\s/g, "")}` : undefined,
  },
  {
    icon: "message",
    label: "WhatsApp",
    value: contactInfo.whatsapp,
    placeholder: contactInfo.whatsappPlaceholder,
    href: contactInfo.whatsapp
      ? `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`
      : undefined,
  },
  {
    icon: "map-pin",
    label: "Office address",
    value: contactInfo.address,
    placeholder: contactInfo.addressPlaceholder,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact CloudREMS"
        description="Have a question about the platform? Send us a message and our team will get back to you."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-2xl font-bold text-navy-900">Send us a message</h2>
            <ContactForm />
          </div>
          <aside className="lg:col-span-2" aria-labelledby="details-heading">
            <h2 id="details-heading" className="mb-6 text-2xl font-bold text-navy-900">
              Contact details
            </h2>
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                    {item.value ? (
                      item.href ? (
                        <a href={item.href} className="text-sm text-brand-700 underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-700">{item.value}</p>
                      )
                    ) : (
                      <p className="text-sm italic text-slate-600">[Placeholder] {item.placeholder}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold text-navy-900">Follow CloudREMS</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <li key={s.name}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-navy-900 hover:border-brand-500"
                    >
                      {s.name}
                    </a>
                  ) : (
                    <span
                      className="inline-block rounded-full border border-dashed border-slate-300 px-3 py-1.5 text-sm text-slate-600"
                      title="Link coming soon"
                    >
                      {s.name} <span className="sr-only">(link coming soon)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
