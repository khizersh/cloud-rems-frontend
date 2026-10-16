import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How CloudREMS collects, uses, and protects information submitted through the public website, including demo and contact requests.",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    heading: "About this policy",
    body: (
      <p>
        This policy explains how CloudREMS handles information collected through www.cloudrems.com.
        The CloudREMS customer portal at app.cloudrems.com is governed by the agreement between
        CloudREMS and its customers.
      </p>
    ),
  },
  {
    heading: "Information we collect",
    body: (
      <p>
        When you submit a demo request or contact form, we collect the details you enter, such as
        your name, company name, business type, phone number, WhatsApp number, email address, city,
        number of projects, and message.
      </p>
    ),
  },
  {
    heading: "How we use information",
    body: (
      <p>
        We use submitted information to respond to your enquiry, arrange demonstrations, and
        communicate about CloudREMS. We do not sell your personal information.
      </p>
    ),
  },
  {
    heading: "Sharing and processors",
    body: (
      <p>
        Submissions may be passed to service providers that help us operate the website and manage
        enquiries, such as email, CRM, or hosting providers. [List providers once confirmed.]
      </p>
    ),
  },
  {
    heading: "Cookies and analytics",
    body: (
      <p>
        The website does not currently use advertising cookies. If analytics or embedded videos
        (for example YouTube) are enabled, they may set cookies or collect usage data. [Update if
        analytics are added.]
      </p>
    ),
  },
  {
    heading: "Data retention and security",
    body: (
      <p>
        We keep enquiry information only as long as needed for the purposes above and apply
        reasonable technical and organisational measures to protect it. [State retention period.]
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of your personal information by
        contacting us using the details on the Contact page. [Add applicable legal rights.]
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: <p>We may update this policy from time to time. The latest version is always published on this page.</p>,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How CloudREMS handles information submitted through this website."
      sections={sections}
    />
  );
}
