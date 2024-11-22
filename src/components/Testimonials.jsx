import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for Testimonials
const testimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Testimonials = ({ text, name, title, bg, color, avatar }) => {
  return (
    <motion.div
      variants={testimonialVariants} // Apply animation variants
      initial="hidden" // Initial hidden state
      whileInView="show" // Animate to visible state when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the component is visible
      className={`flex flex-col gap-5 bg-${bg} p-10 rounded-xl shadow-lg w-[420px] min-w-[270px] relative`}
    >
      {/* Absolute apostrophe top */}
      {color === "secondary" && (
        <div className="absolute left-2 -top-8">
          <Image
            src="/icons/apos-yellow-up.png"
            alt="apostrophe"
            width={70}
            height={70}
            className="aspect-auto"
          />
        </div>
      )}

      {color === "primary" && (
        <div className="absolute left-2 -top-8">
          <Image
            src="/icons/apos-blue-up.png"
            alt="apostrophe"
            width={70}
            height={70}
          />
        </div>
      )}

      {/* Absolute apostrophe bottom */}
      {color === "secondary" && (
        <div className="absolute right-2 -bottom-7">
          <Image
            src="/icons/apos-primary.png"
            alt="apostrophe"
            width={70}
            height={70}
          />
        </div>
      )}

      {color === "primary" && (
        <div className="absolute right-2 -bottom-7">
          <Image
            src="/icons/apos.svg"
            alt="apostrophe"
            width={70}
            height={70}
          />
        </div>
      )}

      <p
        className={`text-${
          color === "secondary" ? "white" : { color }
        }`}
      >
        {text}
      </p>
      <div className={`flex items-center gap-3 text-${color}`}>
        <Image src={avatar} alt="avatar" width={70} height={70} className="rounded-full"/>
        <div>
          <h4 className={`font-semibold text-${color}`}>- {name}</h4>
          <p
            className={`text-sm text-${
              color === "secondary" ? "white" : { color }
            }`}
          >
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
