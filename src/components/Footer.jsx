"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
	const footerLinks = [
		{ title: "About Zeeil Logistics", path: "/zeeil" },
		{ title: "Company", path: "/company" },
		{ title: "About us", path: "/about-us" },
		{ title: "Contact-us", path: "/contact-us" },
		{ title: "FAQ", path: "/faqs" },
	];

	const services = [
		{ title: "E-hailing Bike Rides" },
		{ title: "Peer Selling Market" },
		{ title: "Zeeil Escrow services" },
		{ title: "Zeeil Market Square" },
	];

	const pathname = usePathname();

	return (
		<footer>
			<div className="bg-primary flex flex-col justify-center items-center p-2 px-5">
				<div>
					<Image
						src={"/logo.png"}
						alt="logo"
						height={100}
						width={100}
					/>
				</div>
				<p className="text-white max-w-screen-lglg text-center">
					Fast, efficient, and always on time. We ensure your
					shipments move at the speed of your business
				</p>
			</div>

			<div className="bg-secondary">
				{/* Main footer */}
				<div className="flex flex-row gap-5 justify-center p-8 pt-12 max-w-screen-xl m-auto border-primary border-b-2">
					<div className="flex-1">
						<div className="text-lg text-primary font-bold">
							Company
						</div>
						<ul className="space-y-6 py-5">
							{footerLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.path}
										className={
											pathname == link.path
												? " text-secondary p-2 px-4 m-auto"
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
						</ul>
					</div>

					<div className="flex-1">
						<div className="text-lg text-primary font-bold">
							Services
						</div>
						<ul className="space-y-6 py-5">
							{services.map((service, index) => (
								<li key={index}>{service.title}</li>
							))}
						</ul>
					</div>

					{/* Get in touch */}
					<div className="flex-1">
						<div className="text-lg text-primary font-bold">
							Get in touch
						</div>

						<ul className="space-y-6 py-5">
							<li className="space-y-3">
								<div className="font-semibold">Head Office</div>{" "}
								<address>
									No 95 Ikorodu Road, P.O Box 1068, Umudim,
									Ado road, Ekiti State
								</address>
								<a href="">+234 701 2233 444</a>
							</li>

							<li className="space-y-3">
								<div className="font-semibold">
									Lagos Office
								</div>{" "}
								<address>
									Plot 1 Block A, Amuwo Odofin Incl. Estate,
									Oshodi, Apapa. Lagos
								</address>
								<a href="">+234 701 2233 444</a>
							</li>

							<li className="space-y-3">
								<div className="font-semibold">
									Enugu Office
								</div>{" "}
								<address>
									Plot W/L Industrial Layout, Emene, P.O Box
									1570 Enugu, Enugu State.
								</address>
								<a href="">+234 701 2233 444</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="md:mx-24 px-6 py-6">
					<div>
						<Image
							src={"/logo-blue.png"}
							alt="logo"
							height={100}
							width={100}
						/>
					</div>

					<div className="flex flex-row gap-5 justify-between">
						<div>Terms || Privacy policy</div>
						<div>
							Copyright @2024 Zeeil Logistics. All rights
							reseverd.
						</div>
						<div className="flex flex-row gap-5 text-xl">
							<a href="">
								<FaTwitter />
							</a>
							<a href="">
								<FaFacebook />
							</a>
							<a href="">
								<FaLinkedin />
							</a>
							<a href="">
								<FaInstagram />
							</a>
							<a href="">
								<FaYoutube />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;