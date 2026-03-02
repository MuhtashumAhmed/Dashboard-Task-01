"use client";
import { Bar, BarChart, CartesianGrid, XAxis, Legend, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { yValue: 0, month: "January", income: 80, expense: 40 },
  { yValue: 60, month: "February", income: 154, expense: 145 },
  { yValue: 94, month: "March", income: 137, expense: 120 },
  { yValue: 160, month: "April", income: 140, expense: 73 },
  { yValue: 140, month: "May", income: 129, expense: 115 },
  { yValue: 100, month: "June", income: 96, expense: 47 },
];

const chartConfig = {
  income: {
    label: "income",
    color: "var(--chart-1)",
  },
  expense: {
    label: "expense",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function Bargraph() {
  return (
    <div className="bg-secondary border shadow py-4">
      <h3 className="px-6 pb-3 font-semibold">Total Revenue</h3>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            dataKey="yValue"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: 20,
            }}
          />

          <Bar dataKey="income" fill="var(--color-income)" radius={4} />
          <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
