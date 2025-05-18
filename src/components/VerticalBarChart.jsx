// components/VerticalBarChart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Login", value: 100 },
  { name: "Signup", value: 120 },
  { name: "Dashboard", value: 90 },
  { name: "Reports", value: 150 },
  { name: "Analytics", value: 130 },
  { name: "Settings", value: 80 },
  { name: "Billing", value: 70 },
  { name: "Chat", value: 110 },
  { name: "Notifications", value: 140 },
  { name: "User Profiles", value: 160 },
  { name: "Permissions", value: 100 },
  { name: "Integrations", value: 120 },
  { name: "Tasks", value: 95 },
  { name: "Calendar", value: 105 },
  { name: "Goals", value: 130 },
  { name: "Files", value: 110 },
  { name: "Feedback", value: 115 },
  { name: "API Usage", value: 98 },
  { name: "Sessions", value: 125 },
  { name: "Audit Logs", value: 85 },
];

const VerticalBarChart = () => {
  return (
    <div
      className="w-90 h-105 md:w-150 md:h-auto p-4  bg-black text-white  flex-shrink-0 rounded-2xl"
      style={{
        boxShadow: `inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.1), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)`,
      }}
    >
      <h2 className="text-lg md:text-xl font-semibold text-gray-400 mb-4 text-start">
        Feature Usage
      </h2>
      <div className="flex justify-start items-start gap-2 mb-4">
        <h1 className="text-lg md:text-3xl font-bold">645</h1>
        <div className="flex flex-col items-start gap-1">
          <p className="text-sm md:text-lg text-gray-400">+34%</p>
          <p className="text-sm md:text-lg text-gray-400">(12.1K)</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={290}>
        <BarChart data={data}>
          <XAxis interval={0} textAnchor="end" height={29} />
          <YAxis />
          <Bar dataKey="value" fill="#ffffff" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VerticalBarChart;
