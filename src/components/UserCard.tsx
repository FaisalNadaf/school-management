/** @format */

import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
	return (
		<div className=" shadow rounded-2xl odd:bg-faisal_dev_Sky mx-2 min-w-[130px] flex-1 even:bg-faisal_dev_Purple p-4">
			<div className="flex justify-between">
				<span className=" text-[10px] text-green-500 bg-white rounded-full px-2 py-1">
					2024/20
				</span>
				<Image
					src={"/more.png"}
					height={20}
					width={20}
					alt=""
				/>
			</div>
			<div className="my-4 text-2xl font-semibold">1205</div>
			<div className="text-sm font-medium text-gray-500">{type}</div>
		</div>
	);
};

export default UserCard;
