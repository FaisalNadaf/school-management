/** @format */
"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
	{
		name: "total",
		count: 100,
		fill: "#ffffff",
	},
	{
		name: "boys",
		count: 79,
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
		<div className="h-full w-full bg-white rounded-xl p-4 shadow">
			<div className="flex justify-between items-center ">
				<div className="text-xl font-semibold">Students </div>
				<Image
					src={"/moreDark.png"}
					alt=""
					height={20}
					width={20}
				/>
			</div>
			<div className="w-full h-[65%] relative">
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
					className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
				/>
			</div>
			<div className="flex items-center justify-around ">
				<div className="">
					<div className="h-5 w-5 bg-faisal_dev_SeaGreen rounded-full" />
					<div className="font-semibold text-base">12334</div>
					<div className="text-gray-500 font-light text-xs">Boys 59%</div>
				</div>{" "}
				<div className="">
					<div className="h-5 w-5 bg-faisal_dev_Yellow rounded-full" />
					<div className="font-semibold text-base">12334</div>
					<div className="text-gray-500 font-light text-xs">Girls 41%</div>
				</div>
			</div>
		</div>
	);
};

export default CountChart;
