/** @format */

import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalender from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
	return (
		<div className="flex flex-col md:flex-row gap-4 p-4 ">
			{/* left  */}
			<div className="w-full lg:w-2/3 flex flex-col gap-8">
				{" "}
				{/* user Card */}
				<div className="flex items-center flex-wrap justify-between gap-2 ">
					<UserCard type="Student" />
					<UserCard type="Teacher" />
					<UserCard type="Staff" />
					<UserCard type="Other" />
				</div>
				{/* middle charts*/}
				<div className="flex gap-4 flex-col lg:flex-row">
					<div className="h-[450px] w-full lg:w-1/3 ">
						{" "}
						<CountChart />
					</div>
					<div className="h-[450px] w-full lg:w-2/3 ">
						<AttendanceChart />
					</div>
				</div>
				{/* bottom chart  */}
				<div className="w-full h-[500px] ">
					{" "}
					<FinanceChart />
				</div>
			</div>
			{/* right */}
			<div className="w-full lg:w-1/3">
				<div className="w-full ">
					<EventCalender />
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default AdminPage;
