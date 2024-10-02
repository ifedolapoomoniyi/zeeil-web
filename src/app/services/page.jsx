import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const page = () => {
	return (
		<main>
			<Navbar />

			{/* services hero */}
			<section className="bg-servicesHero h-[92vh] bg-cover flex flex-col items-center justify-center ">
				<div className="rounded-2xl  backdrop-blur-lg max-w-[900px] mx-auto md:p-10 p-6 bg-white/35 border border-white">
					<h1 className="text-5xl text-center font-bold mt-7 my-8">
						"Comprehensive Logistics Solutions Tailored to Your
						Needs"
					</h1>
					<p className="pb-7">
						Explore our diverse range of services designed to ensure
						efficient, secure, and reliable delivery for businesses
						of all sizes. Let us handle your logistics, so you can
						focus on growing your business.
					</p>
				</div>
			</section>

			<div className="relative w-full overflow-hidden py-10 p-5 h-96 flex items-center ">
				<div className="text-center max-w-lg flex flex-col items-center justify-center m-auto ">
					<h2 className="text-4xl pb-6 py-8 font-bold">
						{" "}
						Domestic Delivery
					</h2>
					<p>
						Reliable, Affordable and Easily Accessible Logistics
						with Nationwide Coverage
					</p>

					<div>
						<Image
							src={"/hero-element.png"}
							height={600}
							width={600}
							alt="design element"
							className="absolute -left-64 top-10"
						/>
					</div>

					<div>
						<Image
							src={"/design-right.png"}
							height={400}
							width={400}
							alt="design element"
							className="absolute -right-16 top-10"
						/>
					</div>
				</div>
			</div>

			{/* What we do */}
			<section className="p-8 md:p-14 my-10">
				<div className=" max-w-4xl m-auto">
					<h1 className="text-4xl py-5 font-bold text-center">
						What we do
					</h1>
					<p className="py-2">
						From last-mile delivery to secure payment systems, we
						provide end-to-end logistics services designed to
						steamline operations and empower businessess to thrive
					</p>
				</div>

				{/* services cards */}
				<div className="flex flex-row flex-wrap gap-5 items-center justify-center my-10">
					<div className="rounded-2xl p-10 space-y-2 text-white bg-primary w-96 ">
						<h3 className="text-2xl font-semibold text-secondary">
							Market Square
						</h3>
						<p className="text-sm">Online market place</p>
						<p className="pt-3">
							An online marketplace where users can order from
							various markets, offering a diverse range of
							products for customers
						</p>
					</div>

					<div className="rounded-2xl p-10 space-y-2 text-black bg-secondary w-96">
						<h3 className="text-2xl font-semibold text-primary">
							Last-Mile Delivery
						</h3>
						<p className="text-sm">
							Real-time tracking and status of deliveries
						</p>
						<p className="pt-3">
							A user-friendly platform that facilitate order
							placement and management between buyers, vendor, and
							delivery agents
						</p>
					</div>

					<div className="rounded-2xl p-10 space-y-2 text-white bg-primary w-96 ">
						<h3 className="text-2xl font-semibold text-secondary">
							E-Hailing for Bike Rides
						</h3>
						<p className="text-sm">
							A service allowing users to book bike rides
						</p>
						<p className="pt-3">
							A service allowing users to book bike rides through
							the platform, enhancing mobility and offering
							real-time tracking for short-range transportation.
						</p>
					</div>

					<div className="rounded-2xl p-10 space-y-2 text-black bg-secondary w-96 ">
						<h3 className="text-2xl font-semibold text-primary">
							Peer-to-Peer Selling
						</h3>
						<p className="text-sm">
							A marketplace for individual users to sell
						</p>
						<p className="pt-3">
							A marketplace for individual users to sell personal
							items, such as electronics or furniture, with secure
							payment processing through Zeeil’s escrow system.
						</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-servicesBg flex items-center justify-center h-[700px] bg-cover">
				<div className="max-w-4xl m-8">
					<h1 className="text-5xl text-secondary py-5 font-bold">
						Delivering Critical Logistics Services to Businesses
						Worldwide
					</h1>
					<p className="text-white">
						Empowering businesses with reliable, efficient, and
						secure logistics solution to keep operations running
						smoothly every day
					</p>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</main>
	);
};

export default page;
