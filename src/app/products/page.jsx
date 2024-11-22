"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
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
				{/* hero */}
				<section className="min-h-screen overflow-hidde relative">
					<div className="relative">
						<Image
							src="/product-hero.png"
							alt="hero"
							width={1920}
							height={1080}
							className="min-h-screen object-cover object-center"
						/>
						<div className="px-3 absolute right-3 sm:right-10 lg:right-20 top-1/3 xl:top-1/4">
							<h1 className="text-5xl md:text-7xl tracking-tighter text-white py-4 font-bold">
								Zeeil{" "}
								<span className="text-secondary">Foods</span>
							</h1>

							{/* get on google play or app store */}
							<div className="flex flex-col gap-2 items-start">
								<button className="border bg-black text-white p-2 rounded-md flex gap-2 items-center w-52">
									<FaGooglePlay className="text-4xl" />
									<div>
										<div className="text-xs font-light">
											GET IT ON
										</div>
										<div className="text-lg">
											Google Play
										</div>
									</div>
								</button>

								<button className="border bg-black text-white p-2 rounded-md flex gap-2 items-center w-52">
									<FaApple className="text-5xl" />
									<div>
										<div className="text-xs font-light">
											Download on the
										</div>
										<div className="text-lg">App Store</div>
									</div>
								</button>
							</div>
						</div>
					</div>

					<div className="relative">
						{/* fade into blur and into next image*/}

						<div className="custom-gradient h-72 w-full absolute -top-28"></div>

						<Image
							src="/product-hero-2.png"
							alt="hero"
							width={1920}
							height={1080}
							className="min-h-screen object-cover object-center"
						/>

						<div className="p-5 rounded-xl border border-white bg-black/30 lg:bg-white/30 absolute bottom-20 text-white w-[320px] sm:w-[400px] mx-4 lg:left-5 xl:left-56">
							At Zeeil Food, we are dedicated to transforming the
							way people experience food delivery. Our platform
							connects customers with their favorite restaurants
							and food vendors, offering a seamless, fast, and
							reliable service. Whether you're craving a quick
							bite or planning a feast, we ensure that your meals
							are delivered fresh and on time.
						</div>
					</div>
				</section>

				{/* zeil logistics */}
				<section className="bg-[#FFF3C7] flex flex-row gap-2 max-h-[600px]justify-around">
					<div className="flex-1 flex flex-col gap-2 p-4 my-auto ml-5 md:ml-20">
						<h2 className="text-5xl md:text-7xl text-primary font-bold tracking-tighter pb-2">
							Zeeil{" "}
							<span className="text-secondary">Logistics</span>
						</h2>
						<div className="flex flex-col gap-2 items-start">
							<button className="border bg-black text-white p-2 rounded-md flex gap-2 items-center w-52">
								<FaGooglePlay className="text-4xl" />
								<div>
									<div className="text-xs font-light">
										GET IT ON
									</div>
									<div className="text-lg">Google Play</div>
								</div>
							</button>

							<button className="border bg-black text-white p-2 rounded-md flex gap-2 items-center w-52">
								<FaApple className="text-5xl" />
								<div>
									<div className="text-xs font-light">
										Download on the
									</div>
									<div className="text-lg">App Store</div>
								</div>
							</button>
						</div>
					</div>

					<div className="flex-1">
						<Image
							src="/3-phones.png"
							alt="hero"
							width={1920}
							height={1080}
							className="h-full object-cover"
						/>
					</div>
				</section>

				{/* Zeeil fintech */}
				<section className="flex flex-col gap-7 justify-around py-5">
					<div className="">
						<Image
							src="/3-phones-2.png"
							alt="hero"
							width={1920}
							height={1080}
							className="h-full object-cover"
						/>
					</div>

					<div className="flex flex-col gap-2 p-4 items-center">
						<h2 className="text-5xl md:text-7xl text-primary font-bold tracking-tighter pb-2">
							Zeeil{" "}
							<span className="text-secondary">Fintech</span>
						</h2>
						<div className="flex flex-col gap-2 items-start">
							<button className="border bg-black text-white p-2 rounded-md flex gap-2 items-center w-52">
								<FaGooglePlay className="text-4xl" />
								<div>
									<div className="text-xs font-light">
										Soon to be available on
									</div>
									<div className="text-lg">Google Play</div>
								</div>
							</button>

							<button className="border bg-black text-white p-2 rounded-md flex gap-2 items-center w-52">
								<FaApple className="text-5xl" />
								<div>
									<div className="text-xs font-light">
										Download on the
									</div>
									<div className="text-lg">App Store</div>
								</div>
							</button>
						</div>
					</div>
				</section>

				<Footer />
			</motion.div>
		</main>
	);
};

export default page;
