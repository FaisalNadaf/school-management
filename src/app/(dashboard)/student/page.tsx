/** @format */

import Announcement from "@/components/Announcement";
import BigCalender from "@/components/BigCalender";
import EventCalender from "@/components/EventCalender";
import React from "react";

const StudentPage = () => {
	return (
		<div className="flex flex-col xl:flex-row gap-4 p-4 ">
			{/* left  */}
			<div className="w-full  xl:w-2/3 ">
				<div className="h-full bg-white p-4 rounded-lg">
					<BigCalender />
				</div>
			</div>

			{/* right */}
			<div className="w-full lg:w-1/3">
				<div className="w-full ">
					<EventCalender />
					<Announcement />
				</div>
			</div>
		</div>
	);
};

export default StudentPage;
