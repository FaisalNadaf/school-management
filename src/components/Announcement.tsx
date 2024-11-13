/** @format */

import Image from "next/image";

const Announcement = () => {
	const event = [
		{
			id: 1,
			title: "lorem ipsm ",
			time: "22/02/2005",
			description:
				"loreem ipsam get not rid of thisloreem ipsam get not rid of thisloreem ipsam get not rid of this ",
		},
		{
			id: 2,
			title: "lorem ipsm ",
			time: "22/02/2005",
			description:
				"loreem ipsam get not rid of thisloreem ipsam get not rid of thisloreem ipsam get not rid of this ",
		},
		{
			id: 3,
			title: "lorem ipsm ",
			time: "22/02/2005",
			description:
				"loreem ipsam get not rid of thisloreem ipsam get not rid of thisloreem ipsam get not rid of this ",
		},
		{
			id: 4,
			title: "lorem ipsm ",
			time: "22/02/2005",
			description:
				"loreem ipsam get not rid of thisloreem ipsam get not rid of thisloreem ipsam get not rid of this ",
		},
	];

	return (
		<div className="rounded-t-xl">
			{" "}
			{/* <div className="h-1 w-full bg-gray-500 mt-1" /> */}
			<div className="flex justify-between items-center px-4 py-2">
				<h1 className="text-lg font-semibold">Announcement's</h1>
				<span className="text-xs text-gray-400">view all</span>
			</div>
			<div className="">
				{event.map((e) => {
					return (
						<div className="rounded-lg shadow my-1 p-2 border-t-4 odd:border-faisal_dev_SeaGreen even:border-faisal_dev_Purple">
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
			</div>{" "}
		</div>
	);
};

export default Announcement;
