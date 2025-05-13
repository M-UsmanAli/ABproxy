import React from "react";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import HorizontalBarChart from "../components/HorizontalBarChart";
import VerticalBarChart from "../components/VerticalBarChart";
import Faqs from "../components/Faqs";

const Analytics = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center max-lg:px-15 py-28"
      id="ab-testing"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <Heading data="Product Analytics: Just Ask" />
        <Paragraph data="No need for a data team. Ask questions like '' What's the conversion rate for Feature A vs Feature B? '' and get instant, AI-generated dashboards. Metrics and KPIs are just a question away." />
      </div>

      <div className="flex flex-col md:flex-row  justify-between items-start gap-5 mt-10 md:mt-20 px-50  overflow-hidden">
        <HorizontalBarChart />

        <VerticalBarChart />
      </div>

      <Faqs/>
    </section>
  );
};

export default Analytics;
