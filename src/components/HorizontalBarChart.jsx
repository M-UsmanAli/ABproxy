import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Feature A", value: 400 },
  { name: "Feature B", value: 50 },
  { name: "Feature C", value: 200 },
  { name: "Feature D", value: 100 },
];

const HorizontalBarChart = () => {
  return (
    <div className="w-100 md:w-150 h-auto  p-4  bg-black border border-gray-400 rounded-2xl ">
      <h2 className="text-xl font-semibold text-gray-400 mb-4 text-start">
        Daily Active Users
      </h2>
      <div className="flex justify-start items-start gap-2 mb-5">
        <h1 className="text-3xl font-bold">12.4k</h1>
        <div className="flex flex-col items-start justify-between gap-2">
          <p className="text-lg text-gray-400">+34%</p>
          <p className="text-lg text-gray-400">(12.1K)</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Bar dataKey="value" fill="#ffffff" radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalBarChart;
