import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using the CloudREMS public website at www.cloudrems.com.",
  path: "/terms-and-conditions",
});

const sections: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: (
      <p>
        By using www.cloudrems.com you agree to these terms. If you do not agree, please do not use
        the website.
      </p>
    ),
  },
  {
    heading: "Purpose of the website",
    body: (
      <p>
        This website provides general information about CloudREMS and lets you request a demo or
        contact us. Use of the CloudREMS portal is governed by the separate customer agreement.
      </p>
    ),
  },
  {
    heading: "Acceptable use",
    body: (
      <p>
        You agree not to misuse the website, attempt to disrupt it, submit false or unlawful
        information, or use automated means to submit forms.
      </p>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <p>
        The CloudREMS name, logo, content, and design are owned by CloudREMS or its licensors and
        may not be reproduced without permission.
      </p>
    ),
  },
  {
    heading: "Information accuracy",
    body: (
      <p>
        Website content is provided for general information and may change without notice. Product
        features and availability are confirmed in your agreement with CloudREMS.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        To the extent permitted by law, CloudREMS is not liable for losses arising from use of this
        website. [Have counsel confirm wording and governing law.]
      </p>
    ),
  },
  {
    heading: "Changes and contact",
    body: (
      <p>
        We may update these terms at any time. Questions can be sent through the Contact page.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="The terms that apply when you use the CloudREMS public website."
      sections={sections}
    />
  );
}
