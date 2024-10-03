import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<div>
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
						Get a quote now
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

				<div className="">
					<Image
						src="/amico.png"
						alt="hero"
						width={600}
						height={600}
						className="h-full"
					/>
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
						<h3 className="text-5xl font-bold">50k+</h3>
						<p className="text-sm">Businesses served</p>
					</div>
					<div className="flex flex-col gap-3">
						<h3 className="text-5xl font-bold">12k+</h3>
						<p className="text-sm">Vehicles in operation</p>
					</div>
				</div>
			</section>

			{/* Why choose us */}
			<section className="my-10 max-w-screen-xl m-auto">
				<h3 className="text-2xl font-semibold py-10 text-center">
					Why choose us?
				</h3>

				<div className="flex flex-row flex-wrap gap-10 max-w-screen-xl items-center m-auto justify-center p-7 md:10">
					<Benefits
						text={
							"Fast, efficient, and always on time. We ensure your shipments move at the speed of your business."
						}
						color={"white"}
						header={"Swift"}
						icon={"/icons/icon2.png"}
					/>

					<Benefits
						text={
							"Count on us for consistent, dependable deliveries that keep your business moving forward."
						}
						color={"secondary"}
						header={"Reliable"}
						icon={"/icons/security-lock.png"}
					/>

					<Benefits
						text={
							"From pick-up to delivery, your shipments are safeguarded with the highest standards of security and care."
						}
						color={"white"}
						header={"Secured"}
						icon={"/icons/icon1.png"}
					/>
				</div>
			</section>

			{/* Testimonials */}
			<section className="bg-[#FFF8DE] p-5">
				<h3 className="text-2xl font-bold py-10 text-center">
					Testimonials
				</h3>

				<div className="flex flex-row gap-20 md:gap-10 max-w-screen-xl m-auto justify-around my-14 flex-wrap p-5">
					<Testimonials
						text={`They handle our logistics with care
and precision. We've never had
smoother operations—swift, secure, 
and stress-free!`}
						name={"Sarah M."}
						title={"Retaill Business Owner"}
						bg={"primary"}
						color={"secondary"}
						avatar={"/avatar.png"}
					/>

					<Testimonials
						text={`"Exceptional service! Our shipments
always arrive on time, and the tracking
system keeps us informed every step
of the way. Truly reliable."`}
						name={"Sarah M."}
						title={"E-commerce Enterpreneur"}
						bg={"secondary"}
						color={"primary"}
						avatar={"/avatar.png"}
					/>
				</div>
			</section>



			<Footer/>
		</div>
	);
}
