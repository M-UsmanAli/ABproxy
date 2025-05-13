// components/VerticalBarChart.jsx
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
  { name: "Jan", value: 100 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 90 },
  { name: "Apr", value: 150 },
  { name: "May", value: 130 },
  { name: "Jun", value: 80 },
  { name: "Jul", value: 70 },
  { name: "Aug", value: 110 },
  { name: "Sep", value: 140 },
  { name: "Oct", value: 160 },
  { name: "Nov", value: 100 },
  { name: "Dec", value: 120 },
];

const VerticalBarChart = () => {
  return (
    <div className="w-100 md:w-150 h-auto p-4 bg-black border border-gray-400 rounded-2xl">
      <h2 className="text-xl font-semibold text-gray-400 mb-4 text-start">Active Funnel</h2>
      <div className="flex justify-start items-start gap-2 ">
        <h1 className="text-3xl font-bold">645</h1>
        <div className="flex flex-col items-start justify-between gap-2">
          <p className="text-lg text-gray-400">+34%</p>
          <p className="text-lg text-gray-400">(12.1K)</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#ffffff" radius={[10, 10, 0, 0]} />
  </BarChart>
</ResponsiveContainer>

    </div>
  );
};

export default VerticalBarChart;
