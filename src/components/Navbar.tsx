/** @format */

import Image from "next/image";

const Navbar = () => {
	return (
		<div className="flex items-center md:justify-between justify-end p-2 ">
			{/* search */}
			<div className="hidden md:flex text-xs items-center gap-4 rounded-full ring-[1.5px] ring-gray-400 px-4  ">
				<Image
					src={"/search.png"}
					height={14}
					width={14}
					alt="img"
				/>
				<input
					className="bg-transparent outline-none p-2 w-[200px]"
					type="text"
					placeholder="Search..."
				/>
			</div>
			{/* user and icons */}
			<div className="flex items-center justify-end gap-6">
				<div className=" bg-white h-7 w-7 flex rounded-full items-center justify-center cursor-pointer">
					<Image
						src={"/message.png"}
						alt=" "
						height={20}
						width={20}
					/>
				</div>{" "}
				<div className=" bg-white h-7 w-7 relative flex rounded-full items-center justify-center cursor-pointer">
					<Image
						src={"/announcement.png"}
						alt=" "
						height={20}
						width={20}
					/>
					<span className="absolute bg-purple-400 rounded-full h-5 text-white w-5 text-xs -right-3 -top-3 flex items-center justify-center ">
						1
					</span>
				</div>
				<div className="flex flex-col">
					<div className="text-xs font-medium leading-3">jhon doe</div>
					<div className="text-[10px] text-gray-500 text-right">student</div>
				</div>
				<Image
					src={"/avatar.png"}
					height={36}
					width={36}
					alt=""
					className="rounded-full "
				/>
			</div>
		</div>
	);
};

export default Navbar;
