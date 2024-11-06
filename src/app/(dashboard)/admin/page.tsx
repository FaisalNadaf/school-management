/** @format */

import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
	return (
		<div className="">
			{/* user Card */}
			<div className="flex items-center flex-wrap justify-between gap-2">
				<UserCard type="Student" />
				<UserCard type="Teacher" />
				<UserCard type="Staff" />
				<UserCard type="Other" />
			</div>
			{/* middle charts*/}
			<div className="flex items-center gap-8 flex-col lg:flex-row">
				<div className="h-[450px] w-1/3 ">
					{" "}
					<CountChart />
				</div>
				<div className="h-[450px] w-2/3 ">


				</div>
			</div>
		</div>
	);
};

export default AdminPage;
