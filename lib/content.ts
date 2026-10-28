import type { IconName } from "@/components/Icons";

export type FeatureCategory =
  | "Sales and Inventory"
  | "Collections and Recovery"
  | "Accounting and Reporting"
  | "Construction and Vendors"
  | "Administration";

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
  category: FeatureCategory;
};

export const features: Feature[] = [
  {
    title: "Property and Inventory Management",
    description:
      "Manage projects, blocks, plots, units, properties, prices, availability, and inventory status.",
    icon: "building",
    category: "Sales and Inventory",
  },
  {
    title: "Customer Management",
    description:
      "Maintain customer profiles, contact details, documents, nominees, booking history, payments, and account information.",
    icon: "users",
    category: "Sales and Inventory",
  },
  {
    title: "Booking and Allotment Management",
    description:
      "Create property bookings, allot units, apply charges and discounts, and maintain booking records.",
    icon: "clipboard",
    category: "Sales and Inventory",
  },
  {
    title: "Installment Management",
    description:
      "Generate installment schedules, define down payments, manage due dates, record collections, and monitor outstanding installments.",
    icon: "calendar",
    category: "Collections and Recovery",
  },
  {
    title: "Payment Collection and Recovery",
    description:
      "Record receipts, allocate payments, identify overdue installments, and provide recovery teams with actionable reports.",
    icon: "wallet",
    category: "Collections and Recovery",
  },
  {
    title: "Customer Ledger",
    description:
      "View booking amounts, payments, adjustments, outstanding balances, and complete transaction histories.",
    icon: "book",
    category: "Collections and Recovery",
  },
  {
    title: "Customer Portal",
    description:
      "When a client books a unit, a portal account is created automatically and login credentials are emailed. Customers can sign in to monitor installments, view the remaining amount, and access their reports.",
    icon: "users",
    category: "Collections and Recovery",
  },
  {
    title: "Double-Entry Accounting",
    description:
      "Maintain integrated debit and credit entries for property bookings, collections, expenses, liabilities, income, and adjustments.",
    icon: "scale",
    category: "Accounting and Reporting",
  },
  {
    title: "General Ledger and Financial Reports",
    description:
      "Support vouchers, journals, ledgers, trial balances, income statements, balance sheets, receivables, liabilities, income, and expenses.",
    icon: "file-text",
    category: "Accounting and Reporting",
  },
  {
    title: "Reports and Dashboards",
    description:
      "Provide reports for inventory, bookings, collections, recovery, customer balances, construction costs, expenses, and financial performance.",
    icon: "chart",
    category: "Accounting and Reporting",
  },
  {
    title: "Construction Management",
    description:
      "Track construction projects, phases, activities, contractors, vendors, materials, expenses, and overall project costs.",
    icon: "hammer",
    category: "Construction and Vendors",
  },
  {
    title: "Vendor and Supplier Management",
    description:
      "Manage vendor records, purchases, expenses, payments, balances, and transaction histories.",
    icon: "truck",
    category: "Construction and Vendors",
  },
  {
    title: "Users, Roles, and Permissions",
    description:
      "Provide controlled access to modules and operations based on employee roles and responsibilities.",
    icon: "shield",
    category: "Administration",
  },
];

export const featureCategories: FeatureCategory[] = [
  "Sales and Inventory",
  "Collections and Recovery",
  "Accounting and Reporting",
  "Construction and Vendors",
  "Administration",
];

export const processSteps = [
  {
    title: "Create projects and property inventory",
    description: "Set up projects, blocks, plots, and units with prices and availability.",
  },
  {
    title: "Register customers",
    description: "Capture customer profiles, documents, and nominee details.",
  },
  {
    title: "Process property bookings",
    description: "Book and allot units, applying the agreed charges and discounts.",
  },
  {
    title: "Generate installment schedules",
    description: "Define down payments and due dates to create the payment plan.",
  },
  {
    title: "Collect payments and issue receipts",
    description: "Record receipts and allocate each payment to the right installment.",
  },
  {
    title: "Share customer portal access",
    description: "Customers receive login credentials by email to track installments, balances, and reports.",
  },
  {
    title: "Track construction and operational expenses",
    description: "Record vendor, material, and contractor costs against each project.",
  },
  {
    title: "Review ledgers and financial reports",
    description: "Monitor balances, recovery, and financial performance in one place.",
  },
] as const;

export type Solution = {
  title: string;
  description: string;
  icon: IconName;
  highlights: string[];
};

export const solutions: Solution[] = [
  {
    title: "Real Estate Developers",
    description:
      "Run multiple projects from one platform, from inventory and sales through collections and project accounts.",
    icon: "building",
    highlights: [
      "Project and inventory control",
      "Booking and installment tracking",
      "Consolidated financial reports",
    ],
  },
  {
    title: "Builders",
    description:
      "Connect construction activity with sales and finance so project costs and receivables stay visible.",
    icon: "hammer",
    highlights: [
      "Construction phases and activities",
      "Contractor, vendor, and material costs",
      "Project cost reporting",
    ],
  },
  {
    title: "Housing Societies",
    description:
      "Maintain member records, plot allotments, and payment histories in a structured, auditable system.",
    icon: "home",
    highlights: [
      "Plot and unit records",
      "Customer ledgers and nominees",
      "Role-based access for staff",
    ],
  },
  {
    title: "Property Management Companies",
    description:
      "Keep property records, customer accounts, and collections organised across the portfolio you manage.",
    icon: "key",
    highlights: [
      "Property and availability status",
      "Receipts and payment allocation",
      "Customer balance reports",
    ],
  },
  {
    title: "Finance and Accounts Teams",
    description:
      "Work from integrated double-entry accounting instead of reconciling disconnected spreadsheets.",
    icon: "scale",
    highlights: [
      "Vouchers, journals, and ledgers",
      "Trial balance and income statement",
      "Balance sheet and receivables",
    ],
  },
  {
    title: "Recovery Teams",
    description:
      "Give recovery staff the overdue lists and customer histories they need to follow up effectively.",
    icon: "target",
    highlights: [
      "Overdue installment identification",
      "Actionable recovery reports",
      "Complete customer transaction history",
    ],
  },
];

export type TourScreen = {
  slug: string;
  title: string;
  description: string;
  alt: string;
  src: string;
};

const tour = (
  slug: string,
  title: string,
  description: string,
  altSubject: string,
): TourScreen => ({
  slug,
  title,
  description,
  alt: `Placeholder preview of the CloudREMS ${altSubject} screen. Replace with an actual portal screenshot.`,
  src: `/screenshots/${slug}.png`,
});

export const tourScreens: TourScreen[] = [
  tour(
    "dashboard",
    "Dashboard",
    "A single view of bookings, collections, and activity across your projects.",
    "dashboard",
  ),
  tour(
    "inventory",
    "Project and Property Inventory",
    "Browse projects, blocks, plots, and units with live availability status.",
    "project and property inventory",
  ),
  tour(
    "customers",
    "Customer Management",
    "Customer profiles, documents, nominees, and booking history in one record.",
    "customer management",
  ),
  tour(
    "booking",
    "Property Booking",
    "Book a unit, apply charges and discounts, and confirm the allotment.",
    "property booking",
  ),
  tour(
    "installments",
    "Installment Schedule",
    "Generated payment plans with down payments, due dates, and status.",
    "installment schedule",
  ),
  tour(
    "payments",
    "Payment Collection",
    "Record receipts and allocate payments against outstanding installments.",
    "payment collection",
  ),
  tour(
    "ledger",
    "Customer Ledger",
    "Bookings, payments, adjustments, and balances as a running ledger.",
    "customer ledger",
  ),
  tour(
    "construction",
    "Construction Management",
    "Phases, activities, vendors, and costs for each construction project.",
    "construction management",
  ),
  tour(
    "accounting",
    "Accounting Dashboard",
    "Double-entry vouchers and journals connected to every transaction.",
    "accounting dashboard",
  ),
  tour(
    "reports",
    "Financial Reports",
    "Trial balance, income statement, balance sheet, and operational reports.",
    "financial reports",
  ),
];

export type VideoItem = {
  title: string;
  description: string;
  // Add the 11-character YouTube video ID to enable playback.
  youtubeId: string | null;
};

export const videos: VideoItem[] = [
  {
    title: "CloudREMS Overview",
    description: "A guided introduction to the platform and its modules.",
    youtubeId: null,
  },
  {
    title: "Creating a Property Booking",
    description: "From selecting a unit to confirming the booking.",
    youtubeId: null,
  },
  {
    title: "Generating an Installment Schedule",
    description: "Set down payments and due dates to create a payment plan.",
    youtubeId: null,
  },
  {
    title: "Receiving Customer Payments",
    description: "Record receipts and allocate payments to installments.",
    youtubeId: null,
  },
  {
    title: "Viewing a Customer Ledger",
    description: "Review bookings, payments, and balances for any customer.",
    youtubeId: null,
  },
  {
    title: "Using Double-Entry Accounting",
    description: "How transactions flow into vouchers, journals, and ledgers.",
    youtubeId: null,
  },
  {
    title: "Tracking Construction Costs",
    description: "Monitor phases, vendors, materials, and project expenses.",
    youtubeId: null,
  },
];

export const businessTypes = [
  "Real Estate Developer",
  "Builder",
  "Housing Society",
  "Property Management Company",
  "Real Estate Agency",
  "Other",
] as const;
