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
    <div
      className="w-90 h-105 md:w-150 md:h-auto  p-4  bg-black text-white  flex-shrink-0 rounded-2xl "
      style={{
        boxShadow: `inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.1), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)`,
      }}
    >
      <h2 className="text-lg md:text-xl font-semibold text-gray-400 mb-4 text-start">
        Daily Active Users
      </h2>
      <div className="flex justify-start items-start gap-2 mb-5">
        <h1 className="text-lg md:text-3xl font-bold">12.4k</h1>
        <div className="flex flex-col items-start justify-between gap-2">
          <p className="text-sm md:text-lg text-gray-400">+34%</p>
          <p className="text-sm md:text-lg text-gray-400">(12.1K)</p>
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
