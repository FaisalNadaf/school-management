/** @format */
"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
	{
		name: "total",
		count: 100,
		fill: "#fff",
	},
	{
		name: "boys",
		count: 33,
		fill: "#C3EBFA",
	},
	{
		name: "girls",
		count: 56,
		fill: "#FAE27C",
	},
];

const CountChart = () => {
	return (
		<div className="h-full w-full">
			<div className="flex justify-between items-center">
				<div>Students </div>
				<Image
					src={"/moreDark.png"}
					alt=""
					height={20}
					width={20}
				/>
			</div>
			<div className="w-full h-[75%] relative">
				<ResponsiveContainer>
					<RadialBarChart
						cx="50%"
						cy="50%"
						innerRadius="40%"
						outerRadius="100%"
						barSize={32}
						data={data}>
						<RadialBar
							label={{ position: "insideStart", fill: "#fff" }}
							background
							dataKey="count"
						/>
					</RadialBarChart>
				</ResponsiveContainer>
				<Image
					src={"/maleFemale.png"}
					height={50}
					width={50}
					alt=""
					className="absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>
			<div>
				<div>
					<div className="h-5 w-5 bg-" />
				</div>
			</div>
		</div>
	);
};

export default CountChart;
