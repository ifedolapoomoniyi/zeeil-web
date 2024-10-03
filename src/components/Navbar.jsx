"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", path: "/" },
		{ title: "About us", path: "/about-us" },
		{ title: "Services", path: "/services" },
		{ title: "Products", path: "/products" },
	];

	const pathname = usePathname();
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleOpenNav = () => setIsNavOpen(!isNavOpen);

	return (
		<div className="">
			{/* hamburger */}
			<div
				className="space-y-1 p-2 absolute right-2 top-3 z-20 md:hidden transition-all duration-300"
				onClick={handleOpenNav}
			>
				<div
					className={`transition-all duration-300 bg-secondary h-1 w-8 rounded-t-sm ${
						isNavOpen ? "-rotate-45" : ""
					}`}
				></div>
				<div
					className={`transition-all duration-500 bg-secondary h-1 w-8 ${
						isNavOpen ? "hidden" : "block"
					}`}
				></div>
				<div
					className={`transition-all duration-300 bg-secondary h-1 w-8 rounded-b-sm ${
						isNavOpen ? "rotate-45" : ""
					}`}
				></div>
			</div>
			<div className="w-full h-16 bg-primary static md:absolute -z-10 flex items-center">
				{" "}
				<div className="md:w-[300px] lg:w-[500px] md:hidden">
					<Image
						src="/logo.png"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
			</div>

			<nav
				className={`text-white md:max-w-screen-xl flex flex-col h-screen md:flex-row md:justify-between font-semibold px-4 md:h-16  md:items-center md:m-auto w-[300px] md:w-auto bg-primary absolute top-0 z-10 md:static ${
					isNavOpen
						? "left-0"
						: "-left-[80%] transition-all duration-5004 duration-1000"
				}`}
			>
				<div className="md:w-[300px] lg:w-[500px]">
					<Image
						src="/logo.png"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
				<ul className="md:flex-row flex-col gap-3 md:justify-between md:overflow-hidden m-auto space-y-4 md:space-y-0 md:h-full items-center w-full flex">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className="md:h-full flex items-center justify-center relative text-nowrap"
						>
							<Link
								href={link.path}
								className={
									pathname == link.path
										? " text-secondary p-2  m-auto flex items-center justify-center text-center w-20 lg:w-24"
										: "p-2 hover:text-secondary text-center"
								}
							>
								{link.title}
							</Link>

							{pathname == link.path && (
								<div className="bg-secondary w-full h-1 md:h-4 rounded-3xl absolute -bottom-2"></div>
							)}
						</li>
					))}

					<li>
						<Link
							href={"/contact-us"}
							className="text-primary px-5 py-2 rounded-md bg-secondary text-nowrap h-full hover:rounded-sm hover:opacity-90 duration-200"
						>
							Contact us
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
