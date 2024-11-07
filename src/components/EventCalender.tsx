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
	{
		id: 5,
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
				className="w-full"
				onChange={onChange}
				value={value}
			/>{" "}
			<div className="flex justify-between items-center">
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
						<div className="">
							<div className="flex items-center justify-between">
								<div className="text-lg font-normal">{e.title}</div>
								<div className="text-xs text-gray-400">{e.time}</div>
							</div>
							<div>{e.description}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default EventCalender;
