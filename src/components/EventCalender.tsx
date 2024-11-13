/** @format */

"use client";

import { useState } from "react";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const event = [
	{
		id: 1,
		title: "lorem ipsm ",
		time: "22/02/2005",
		description: "loreem ipsam get not rid of this ",
	},
	{
		id: 2,
		title: "lorem ipsm ",
		time: "22/02/2005",
		description: "loreem ipsam get not rid of this ",
	},
	{
		id: 3,
		title: "lorem ipsm ",
		time: "22/02/2005",
		description: "loreem ipsam get not rid of this ",
	},
	{
		id: 4,
		title: "lorem ipsm ",
		time: "22/02/2005",
		description: "loreem ipsam get not rid of this ",
	},
];

const EventCalender = () => {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<div className="w-full">
			{" "}
			<Calendar
				className="w-full shadow rounded-lg"
				onChange={onChange}
				value={value}
			/>{" "}
			{/* <div className="h-1 w-full bg-gray-500 mt-1 " /> */}
			<div className="flex justify-between items-center px-4 py-2">
				<h1 className="text-lg font-semibold">Event's</h1>
				<Image
					src="/moreDark.png"
					alt=""
					width={20}
					height={20}
				/>
			</div>
			<div className="">
				{event.map((e) => {
					return (
						<div
							key={e.id}
							className="rounded-lg shadow my-1 p-2 border-t-4 odd:border-faisal_dev_SeaGreen even:border-faisal_dev_Purple">
							<div className="flex items-center justify-between">
								<div className="text-base py-1 font-semibold text-gray-600">
									{e.title}
								</div>
								<div className="text-xs text-gray-300">{e.time}</div>
							</div>
							<div className="text-sm text-gray-400">{e.description}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default EventCalender;
