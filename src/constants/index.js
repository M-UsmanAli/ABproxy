import { facebook, linkedIn, github, gmail, twitter, instagram } from "../assets/icons";

export const navLinks = [
  {
    href: "/",
    label: "Products",
    subMenu: [
      { href: "#ab-testing", label: "A/B Testing" },
      { href: "#universal-agent", label: "Universal Agent" },
      { href: "#data-flow", label: "Data Piplelines" },
    ],
  },
  { href: "#docs", label: "Docs" },
  { href: "#blog", label: "Blog" },
];

export const faqs = [
  {
    question: "What makes AB Proxy different from other A/B testing platforms?",
    answer:
      "Unlike traditional platforms, ABproxy requires zero code changes. Our intelligent agent automatically handles experiment routing, event collection, and data analysis — all without burdening your developers or data teams.",
  },
  {
    question: "Do I need a data engineering or analytics team to use ABproxy?",
    answer:
      "No! ABproxy’s AI-driven platform analyzes your metrics automatically. Just ask questions in plain English, and our system will generate reports and dashboards for you — no SQL, no manual queries needed.",
  },
  {
    question:
      "How does ABproxy collect data without impacting my system`s performance?",
    answer:
      "Our lightweight agent is optimized for minimal overhead. It passively traces requests and responses, filters the data you need, and securely ships it without slowing down your services.",
  },
  {
    question: "Can I control what data the ABproxy agent collect?",
    answer:
      "Yes! From our UI, you can filter which services, endpoints, or data points the agent should monitor — giving you full control over your data privacy and observability.",
  },
  {
    question: "Where can i send the data collected by ABproxy?",
    answer:
      "You have full flexibility. ABproxy can send your data to your own warehouse, your analytics platform, or stay within ABproxy — whichever fits your needs best.",
  },
];

export const footerLinks = [
  {
    href: "/",
    label: "Products",
    subMenu: [
      { href: "#ab-testing", label: "A/B Testing" },
      { href: "#universal-agent", label: "Universal Agent" },
      { href: "#data-flow", label: "Data Piplelines" },
    ],
  },
  {
    href: "/",
    label: "Resources",
    subMenu: [
      { href: "#ab-testing", label: "Community" },
      { href: "#universal-agent", label: "Docs" },
      { href: "#data-flow", label: "Guides" },
      { href: "#data-flow", label: "Help" },
      { href: "#data-flow", label: "Integration" },
      { href: "#data-flow", label: "Pricing" },
      { href: "#data-flow", label: "Resources" },
      { href: "#data-flow", label: "Solution Partners" },
      { href: "#data-flow", label: "Startups" },
      { href: "#data-flow", label: "Templates" },
    ],
  },
  {
    href: "/",
    label: "Company",
    subMenu: [
      { href: "#ab-testing", label: "About" },
      { href: "#universal-agent", label: "Blog" },
      { href: "#data-flow", label: "Carrer" },
      { href: "#data-flow", label: "Changelog" },
      { href: "#data-flow", label: "Conact Us" },
      { href: "#data-flow", label: "Customers" },
      { href: "#data-flow", label: "Partners" },
      { href: "#data-flow", label: "Privacy Policy" },
      { href: "#data-flow", label: "Legal" },
    ],
  },
  {
    href: "/",
    label: "Social",
    subMenu: [
      { href: "#ab-testing", icon: github, label: "GitHub" },
      { href: "#universal-agent",icon: linkedIn, label: "LinkedIn" },
      { href: "#data-flow",icon: twitter, label: "Twitter" },
      { href: "#data-flow",icon: github, label: "Youtube" },
      { href: "#data-flow",icon: instagram, label: "Intagram" },
      { href: "#data-flow",icon: facebook, label: "Facebook" },
      { href: "#data-flow",icon: gmail, label: "Gmail" },
    ],
  },
];
