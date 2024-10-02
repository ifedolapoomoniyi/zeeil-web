import Image from "next/image";

const Benefits = ({ text, color, header, icon }) => {
	return (
		<div className={`rounded-lg shadow-lg bg-${color} p-5 w-[320px] flex flex-col gap-4 items-center py-10`}>
			<div className="text-xl font-semibold py-4">{header}</div>

			<div className="flex m-auto">
				<Image src={icon} height={100} width={100} alt="" />
			</div>

      <p className="text-center">{text}</p>
		</div>
	);
};

export default Benefits;
