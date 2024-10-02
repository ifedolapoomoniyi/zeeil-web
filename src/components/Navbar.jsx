"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", path: "/" },
		{ title: "About us", path: "/about-us" },
		{ title: "Services", path: "/services" },
		{ title: "Products", path: "/products" },
	];

	const pathname = usePathname();

	return (
		<div className="bg-primary">
			<nav className="text-white max-w-screen-xl flex flex-row justify-between font-semibold px-4 h-16 items-center m-auto">
				<div className="md:w-[500px]">
					<Image
						src="/logo.png"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
				<ul className="flex flex-row gap-3 justify-between overflow-hidden h-full items-center w-full">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className="h-full flex items-center justify-center relative"
						>
							<Link
								href={link.path}
								className={
									pathname == link.path
										? " text-secondary p-2 px-4 m-auto flex text-center w-24"
										: "p-2 hover:text-primary"
								}
							>
								{link.title}
							</Link>

							{pathname == link.path && (
								<div className="bg-secondary w-full h-4 rounded-3xl absolute -bottom-2"></div>
							)}
						</li>
					))}

					<li>
						<Link
							href={"/contact-us"}
							className="text-primary px-5 py-2 rounded-md bg-secondary"
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
