/** @format */

"use client";

import Image from "next/image";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "jan",
		expence: 4000,
		income: 2400,
	},
	{
		name: "feb",
		expence: 3000,
		income: 1398,
	},
	{
		name: "mar",
		expence: 2000,
		income: 9800,
	},
	{
		name: "apr",
		expence: 2780,
		income: 3908,
	},
	{
		name: "may",
		expence: 1890,
		income: 4800,
	},
	{
		name: "jun",
		expence: 2390,
		income: 3800,
	},
	{
		name: "jul",
		expence: 3490,
		income: 4300,
	},
	{
		name: "aug",
		expence: 2780,
		income: 3908,
	},
	{
		name: "sep",
		expence: 1890,
		income: 4800,
	},{
		name: "oct",
		expence: 4000,
		income: 2400,
	},
	{
		name: "nov",
		expence: 3000,
		income: 1398,
	},
	{
		name: "dec",
		expence: 4999,
		income: 9800,
	},
];
const FinanceChart = () => {
	return (
		<div className="bg-white rounded-xl p-4 h-full shadow">
			{" "}
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold">Attendance</h1>
				<Image
					src="/moreDark.png"
					alt=""
					width={20}
					height={20}
				/>
			</div>
			<ResponsiveContainer
				width="100%"
				height="95%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid
						strokeDasharray="3 3"
						vertical={false}
					/>
					<XAxis
						dataKey="name"
						axisLine={false}
						tick={{ fill: "#d1d5db" }}
						tickLine={false}
					/>
					<YAxis
						axisLine={false}
						tick={{ fill: "#d1d5db" }}
						tickLine={false}
					/>
					<Tooltip
						contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
					/>{" "}
					<Legend
						align="center"
						verticalAlign="top"
						wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
					/>
					<Line
						type="monotone"
						dataKey="income"
						stroke="#c3ebfa"
						strokeWidth={6}
					/>
					<Line
						type="monotone"
						dataKey="expence"
						strokeWidth={6}
						stroke="#cfceff"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default FinanceChart;
