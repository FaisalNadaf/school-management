/** @format */

import Image from "next/image";
import React from "react";

const SingleTeacherPage = () => {
	return (
		<div className="flex flex-col lg:flex-row ">
			{/* left */}
			<div className="w-full lg:w-2/3">
				{/* top  */}
				<div className="flex flex-col lg:flex-row gap-2">
					<div className=" lg:w-1/2 w-full ">
						<div>
							<Image
								src={"/profile.png"}
								width={30}
								height={30}
								alt="a"
							/>
						</div>
						<div></div>
					</div>
					<div className=" lg:w-1/2 w-full ">second</div>
				</div>
				{/* bottom */}
				<div>bottom</div>
			</div>
			{/* right */}
			<div className="w-full lg:w-1/3">r</div>
		</div>
	);
};

export default SingleTeacherPage;
