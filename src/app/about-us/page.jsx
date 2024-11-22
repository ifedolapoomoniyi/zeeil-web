"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";


const page = () => {
	return (
		<main>
			<Navbar />

			<motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -100 }}
			>
				{/* Our story */}
				<section className="max-w-[960px] p-8 md:p-10 m-10 lg:mx-auto bg-[#FFF8DE] rounded-2xl shadow-xl">
					<h1 className="text-center font-bold text-3xl md:*:text-5xl pb-9 px-4">
						Our Story
					</h1>

					<div className="space-y-5">
						<p>
							At Zeeil, our journey began with a clear vision: to
							create a seamless, secure, and innovative logistics
							platform that adapts to the ever-evolving needs of
							businesses and individuals alike. Founded with the
							mission of simplifying last-mile delivery, we set
							out to build a user-friendly system that combines
							efficiency with cutting-edge technology.
						</p>

						<p>
							Starting with the basics, we developed a platform
							that allows users to easily place and manage orders
							while ensuring secure transactions and seamless
							communication between buyers, vendors, and delivery
							agents. As we grew, we integrated real-time tracking
							and GPS technology, enhancing transparency and
							allowing customers to monitor their deliveries at
							every stage.
						</p>

						<p>
							Our commitment to innovation led us to expand our
							services beyond logistics. We introduced the Zeeil
							Market Square, providing users with a broad range of
							goods from diverse markets, and our unique
							peer-to-peer marketplace allowed individuals to buy
							and sell personal items with ease. We also
							implemented an escrow system, securing transactions
							and fostering trust between buyers and sellers.
						</p>
						<p>
							At Zeeil, we believe that our success is driven by
							our commitment to providing reliable, secure, and
							innovative logistics solutions. We grow because we
							care, and we are dedicated to delivering excellence,
							one shipment at a time.
						</p>
					</div>
				</section>

				{/* Meet the team section */}

				<section className="md:my-10 my-6 py-5">
					<h2 className="text-center font-bold text-2xl md:text-4xl p-3 py-7">
						Meet The Team
					</h2>
					<div className="overflow-x-scroll w-full no-scrollbar">
						<div className="w-[1200px] md:w-[1500px] md:h-[500px]">
							<Image
								src="/team-section.png"
								alt="team"
								width={1500}
								height={500}
								className="object-cover"
							/>
						</div>
					</div>
				</section>

				{/* metrics section */}
				<section className="bg-[#FFF8DE] p-5">
					<h2 className="text-xl text-center pb-5">
						"We Grow by Delivering with Care"
					</h2>
					<div className="flex flex-col items-center justify-center md:flex-row gap-14 md:gap-10 md:justify-between m-auto max-w-[1000px] py-3">
						<div className="flex flex-col gap-3">
							<h3 className="text-3xl md:*:text-5xl font-bold">
								25+
							</h3>
							<p className="text-sm">States in operation</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="text-3xl md:*:text-5xl font-bold">
								50k+
							</h3>
							<p className="text-sm">Businesses served</p>
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="text-3xl md:*:text-5xl font-bold">
								12k+
							</h3>
							<p className="text-sm">Vehicles in operation</p>
						</div>
					</div>
				</section>

				{/* Who we are */}
				<section className="max-w-[960px] p-8 md:p-10 m-10 my-20 lg:mx-auto bg-primary rounded-2xl shadow-xl text-white">
					<h1 className="text-center font-bold text-3xl md:*:text-5xl pb-9 px-4">
						Who we are
					</h1>

					<div className="space-y-5">
						<p>
							At Zeeil, we are a dedicated team of logistics
							enthusiasts committed to transforming the way goods
							are delivered. Founded on the principles of
							innovation, reliability, and customer-centricity, we
							strive to create a logistics platform that meets the
							diverse needs of our clients.
						</p>

						<p>
							Our journey began with a focus on last-mile
							delivery, where we recognized the challenges faced
							by businesses and individuals in accessing efficient
							logistics solutions. With a strong emphasis on
							technology and user experience, we built a platform
							that simplifies the ordering process, enhances
							communication between users, and ensures secure
							transactions.
						</p>

						<p>
							We believe that effective logistics goes beyond just
							moving packages; it’s about building trust and
							relationships. Our team is passionate about
							providing real-time tracking, enabling our users to
							stay informed about their deliveries at every stage.
							We understand the importance of transparency and
							work tirelessly to enhance our platform with
							features that prioritize user satisfaction.
						</p>
						<p>
							As we grow, our vision expands. We are not only
							committed to enhancing logistics services but also
							to fostering an inclusive marketplace where
							businesses and individuals can thrive. Through
							innovative solutions such as the Zeeil Market Square
							and peer-to-peer selling, we empower users to engage
							in seamless transactions while promoting community
							interaction.
						</p>
						<p>
							At Zeeil, we embrace change and continually adapt to
							meet the evolving landscape of logistics. Our
							mission is to deliver excellence and exceed
							expectations, ensuring that every shipment
							contributes to the success of our clients.
						</p>
					</div>
				</section>

				{/* mission and vision section */}
				<section className="max-w-[740px] lg:mx-auto m-10 p-5 space-y-20">
					<div>
						<h2 className="text-2xl md:text-4xl font-bold text-center my-8">
							Vision
						</h2>
						<p>
							To revolutionize the logistics industry by creating
							an intelligent, secure, and all-inclusive platform
							that delivers seamless and transparent solutions for
							businesses and individuals, while fostering
							innovation and sustainability.
						</p>
					</div>

					<div>
						<h2 className="text-2xl md:text-4xl font-bold text-center my-8">
							Mission
						</h2>
						<p>
							Our mission is to simplify and enhance logistics
							operations through cutting-edge technology, ensuring
							swift, secure, and reliable delivery services. We
							are committed to continuously improving our platform
							with real-time tracking, secure payment systems, and
							diverse marketplace options, while maintaining
							transparency, efficiency, and exceptional customer
							service.
						</p>
					</div>
				</section>

				{/* Footer */}
				<Footer />
			</motion.div>
		</main>
	);
};

export default page;
