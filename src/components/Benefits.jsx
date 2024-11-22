import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for the card
const card = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.8 },
  },
};

const Benefits = ({ text, color, header, icon }) => {
  return (
    <motion.div
      variants={card}
      initial="hidden" // Starts from the hidden state
      whileInView="show" // Animates to the show state when in view
      viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the card is visible
      whileHover={{
        scale: 1.1,
        rotate: [0, 3, -3, 0],
        transition: { duration: 0.3 },
      }}
      className={`rounded-lg shadow-lg bg-${color} p-5 w-[320px] flex flex-col gap-4 items-center py-10`}
    >
      <div className="text-xl font-semibold py-4">{header}</div>

      <div className="flex m-auto">
        <Image src={icon} height={100} width={100} alt="" />
      </div>

      <p className="text-center">{text}</p>
    </motion.div>
  );
};

export default Benefits;
