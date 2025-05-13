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
    answer:"Unlike traditional platforms, ABproxy requires zero code changes. Our intelligent agent automatically handles experiment routing, event collection, and data analysis — all without burdening your developers or data teams.",
  },
  {
    question: "Do I need a data engineering or analytics team to use ABproxy?",
    answer:"No! ABproxy’s AI-driven platform analyzes your metrics automatically. Just ask questions in plain English, and our system will generate reports and dashboards for you — no SQL, no manual queries needed.",
  },
  {
    question:"How does ABproxy collect data without impacting my system`s performance?",
    answer:"Our lightweight agent is optimized for minimal overhead. It passively traces requests and responses, filters the data you need, and securely ships it without slowing down your services.",
  },
  {
    question: "Can I control what data the ABproxy agent collect?",
    answer:"Yes! From our UI, you can filter which services, endpoints, or data points the agent should monitor — giving you full control over your data privacy and observability.",
  },
  {
    question: "Where can i send the data collected by ABproxy?",
    answer:"You have full flexibility. ABproxy can send your data to your own warehouse, your analytics platform, or stay within ABproxy — whichever fits your needs best.",
  },
];
