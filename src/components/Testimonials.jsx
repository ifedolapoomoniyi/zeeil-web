import Image from "next/image";

const Testimonials = ({ text, name, title, bg, color, avatar }) => {
	return (
		<div
			className={`flex flex-col gap-5 bg-${bg} p-10 rounded-xl shadow-lg w-[420px] relative`}
		>
			{/* Absolute apostrophe top */}
			{color === "secondary" ? (
				<div className="absolute left-2 -top-8">
					<Image
						src="/icons/apos-yellow-up.png"
						alt="avatar"
						width={70}
						height={70}
						className="aspect-auto"
					/>
				</div>
			) : (
				""
			)}

			{color === "primary" ? (
				<div className="absolute left-2 -top-8">
					<Image
						src="/icons/apos-blue-up.png"
						alt="avatar"
						width={70}
						height={70}
					/>
				</div>
			) : (
				""
			)}

			{/* Absolute apos bottom */}

			{color === "secondary" ? (
				<div className="absolute right-2 -bottom-7">
					<Image
						src="/icons/apos-primary.png"
						alt="avatar"
						width={70}
						height={70}
					/>
				</div>
			) : (
				""
			)}

			{color === "primary" ? (
				<div className="absolute right-2 -bottom-7">
					<Image
						src="/icons/apos.svg"
						alt="avatar"
						width={70}
						height={70}
					/>
				</div>
			) : (
				""
			)}
			<p
				className={`text-${
					color === "secondary" ? "white" : { color }
				}`}
			>
				{text}
			</p>
			<div className={`flex items-center gap-3 text-${color}`}>
				<Image src={avatar} alt="avatar" width={70} height={70} />
				<div>
					<h4 className={`font-semibold text-${color}`}>
						- John Doe
					</h4>
					<p
						className={`text-sm text-${
							color === "secondary" ? "white" : { color }
						}`}
					>
						CEO, Company B
					</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
