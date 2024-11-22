"use client";

import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { benefitsData } from "@/lib/data";
import { testimonials } from "@/lib/data";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // Adds delay between child animations
		},
	},
};

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
		>
			<Navbar />

			{/* Hero section */}
			<section className="flex flex-row flex-wrap gap-5 h-screen items-center max-w-screen-xl md:p-7 p-5 justify-center m-auto relative overflow-y-clip">
				<div className="flex-1 mb-auto min-w-[300px] sm:min-w-[400px]">
					<h1 className="font-bold text-3xl md:text-5xl py-5 pt-10 leading-tight">
						Swift, Secure, and Reliable{" "}
						<span className="text-secondary">
							Logistics Solutions
						</span>{" "}
						for Your Business.
					</h1>

					<p>
						From local deliveries to international shipping, we move
						your goods with precision and care. Track your shipment
						in real-time and experience hassle-free logistics.
					</p>

					<Button
						variant={"secondary"}
						className={"my-4 text-lg px-10"}
					>
						<Link href="/products">Learn more</Link>
					</Button>

					{/* design element */}
					<Image
						src="/hero-element.png"
						alt="hero element"
						width={500}
						height={500}
						className="absolute -left-[150px] -bottom-[230px] w-64 md:w-auto"
					/>
				</div>

				<div className="my-4">
					<Image
						src="/3-phones-nobg.png"
						alt="hero"
						width={600}
						height={600}
						className="h-full"
					/>
					<div className="space-y-4 mb-2 flex flex-col items-center justify-center">
						<h2 className="text-5xl font-bold flex flex-row gap-2 text-secondary text-pretty">
							Available<span className="text-primary">Soon</span>
						</h2>
						<div className="flex flex-col gap-2 items-start">
							<button className="border bg-black text-white p-2 rounded-md flex gap-2 items-center w-56">
								<FaGooglePlay className="text-4xl" />
								<div>
									<div className="text-xs font-light">
										Soon to be available on
									</div>
									<div className="text-lg">Google Play</div>
								</div>
							</button>

							<button className="border bg-black text-white p-2 rounded-md flex gap-2 items-center w-56">
								<FaApple className="text-5xl" />
								<div>
									<div className="text-xs font-light">
										Soon to be available on
									</div>
									<div className="text-lg">App Store</div>
								</div>
							</button>
						</div>
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
						<h3 className="text-5xl font-bold">25+</h3>
						<p className="text-sm">States in operation</p>
					</div>
					<div className="flex flex-col gap-3">
						<h3 className="text-5xl font-bold">50+</h3>
						<p className="text-sm">Businesses served</p>
					</div>
					<div className="flex flex-col gap-3">
						<h3 className="text-5xl font-bold">5+</h3>
						<p className="text-sm">Riders</p>
					</div>
				</div>
			</section>

			{/* Why choose us */}
			<section className="my-10 max-w-screen-xl m-auto">
				<h3 className="text-2xl font-semibold py-10 text-center">
					Why choose us?
				</h3>
				<motion.div
					className="flex flex-row flex-wrap gap-10 max-w-screen-xl items-center m-auto justify-center p-7 md:10"
					variants={container}
					initial="hidden"
					whileInView="show" // Triggers animations for all children when in view
					viewport={{ once: true, amount: 0.3 }} // Ensures animations trigger once when 30% is visible
				>
					{benefitsData.map((benefit, index) => (
						<Benefits
							key={index}
							text={benefit.text}
							color={benefit.color}
							header={benefit.header}
							icon={benefit.icon}
						/>
					))}
				</motion.div>
			</section>

			{/* Testimonials */}
			<section className="bg-[#FFF8DE] p-5">
				<h3 className="text-2xl font-bold py-10 text-center">
					Testimonials
				</h3>
				<motion.div
					className="flex flex-row gap-20 md:gap-10 max-w-screen-xl m-auto justify-around my-14 flex-wrap p-5"
					variants={containerVariants} // Apply container animation
					initial="hidden"
					whileInView="show" // Triggers animations when in view
					viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% is visible
				>
					{testimonials.map((testimonial, index) => (
						<Testimonials
							key={index}
							text={testimonial.text}
							name={testimonial.name}
							title={testimonial.title}
							bg={testimonial.bg}
							color={testimonial.color}
							avatar={testimonial.avatar}
						/>
					))}
				</motion.div>{" "}
			</section>

			<Footer />
		</motion.div>
	);
}
