/** @format */

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashbordLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen w-screen">
			{/* left */}
			<div className="md:w-[8%] lg:w-[16%]  xl:w-[14%] w-[14%]   p-4">
				<Link
					href={"/"}
					className="flex items-center justify-center lg:justify-start gap-2">
					<Image
						width={32}
						height={32}
						src={"/logo.png"}
						alt="logo"
					/>
					<span className="hidden lg:block">RLS</span>
				</Link>

				<Menu />
			</div>
			{/* right */}
			<div className="md:w-[92%] lg:w-[84%]  xl:w-[86%] w-[86%] h-full bg-[#f7f8fA] overflow-scroll flex flex-col">
				<Navbar />
				{children}
			</div>
		</div>
	);
}
