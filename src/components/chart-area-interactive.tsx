"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 40 },
  { name: "Feb", users: 30 },
  { name: "Mar", users: 60 },
  { name: "Apr", users: 50 },
  { name: "May", users: 70 },
  { name: "Jun", users: 90 },
];

export function ChartAreaInteractive() {
  return (
    <div className="w-full h-[350px] bg-white rounded-xl border p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-semibold mb-6 text-gray-700">
        User Growth Overview
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={40}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              color: "#111827",
            }}
          />
          <Bar dataKey="users" fill="#4F46E5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
