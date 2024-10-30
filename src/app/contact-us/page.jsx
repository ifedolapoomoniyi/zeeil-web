"use client";

import Navbar from "@/components/Navbar";
import * as Yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const page = () => {
	const initialValues = {
		firstName: "",
		lastName: "",
		number: "",
		email: "",
		message: "",
	};
	const validationSchema = Yup.object({
		firstName: Yup.string().required("Required"),
		lastName: Yup.string().required("Required"),
		number: Yup.string().required("Required"),
		email: Yup.string().required("Required"),
		message: Yup.string().required("Required"),
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
      formik.resetForm();
		},
	});
	return (
		<main>
			<Navbar />

			{/* Contact us page */}
			<section className="flex flex-row gap-4 p-5 min-h-screen mb-10">
				<div className="flex-1 max-w-[700px] m-auto">
					<div className="py-5">
						<h1 className="text-3xl sm:text-5xl py-2 leading-tighter font-bold">
							Contact us
						</h1>
						<p className="text-primary">
							We will get back to you as soon as possible!
						</p>
					</div>

					<form
						action={formik.handleSubmit}
						className="bg-secondary p-4 rounded-lg space-y-8"
					>
						<div className="flex flex-col sm:flex-row gap-4 justify-between">
							<div className="flex flex-col gap-1">
								<label
									className="text-sm font-semibold"
									htmlFor="firstName"
								>
									First Name
								</label>
								<input
									type="text"
									name="firstName"
									onChange={formik.handleChange}
									value={formik.values.firstName}
									onBlur={formik.handleBlur}
									placeholder="John"
									className="h-9 bg-grayish px-2 rounded border-none md:w-64"
								/>
								{formik.touched.firstName &&
								formik.errors.firstName ? (
									<div>{formik.errors.firstName}</div>
								) : null}
							</div>

							<div className="flex flex-col gap-1">
								<label
									className="text-sm font-semibold"
									htmlFor="lastName"
								>
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									onChange={formik.handleChange}
									value={formik.values.lastName}
									onBlur={formik.handleBlur}
									placeholder="Doe"
									className="h-9 bg-grayish px-2 rounded border-none md:w-64"
								/>
								{formik.touched.lastName &&
								formik.errors.lastName ? (
									<div>{formik.errors.lastName}</div>
								) : null}
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 justify-between">
							<div className="flex flex-col gap-1">
								<label
									className="text-sm font-semibold"
									htmlFor="number"
								>
									Telephone Number
								</label>
								<input
									type="text"
									name="number"
									onChange={formik.handleChange}
									value={formik.values.number}
									onBlur={formik.handleBlur}
									placeholder="+23480000000000"
									className="h-9 bg-grayish px-2 rounded border-none md:w-64"
								/>
								{formik.touched.number &&
								formik.errors.number ? (
									<div>{formik.errors.number}</div>
								) : null}
							</div>

							<div className="flex flex-col gap-1">
								<label
									className="text-sm font-semibold"
									htmlFor="email"
								>
									Email
								</label>
								<input
									type="text"
									name="email"
									onChange={formik.handleChange}
									value={formik.values.email}
									onBlur={formik.handleBlur}
									placeholder="email.gmail.com"
									className="h-9 bg-grayish px-2 rounded border-none md:w-64"
								/>
								{formik.touched.email && formik.errors.email ? (
									<div>{formik.errors.email}</div>
								) : null}
							</div>
						</div>

						{/* add text area for message  */}

						<div className="flex flex-col gap-1">
							<label
								className="text-sm font-semibold"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								name="message"
								onChange={formik.handleChange}
								value={formik.values.message}
								onBlur={formik.handleBlur}
								placeholder="Brief Description"
								className="bg-grayish p-2 rounded border-none w-full resize-none h-36 "
							/>
							{formik.touched.message && formik.errors.message ? (
								<div>{formik.errors.message}</div>
							) : null}
						</div>

						<Button type="submit" className="w-40 hover:opacity-75 hover:bg-primary">
							Send Message
						</Button>
					</form>
				</div>

				<div className="flex-1 max-w-[700px] md:flex items-center justify-center hidden">
					<Image
						src={"/contact-img.svg"}
						alt="contact"
						width={1920}
						height={1080}
					/>
				</div>
			</section>


			<Footer />
		</main>
	);
};

export default page;
