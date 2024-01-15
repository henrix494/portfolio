"use client";
import { motion } from "framer-motion";
export default function NavBar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className=" absolute text-white z-30 right-20 text-4xl overflow-hidden max-lg:hidden ">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-10 overflow-hidden"
      >
        <motion.li variants={item} className=" overflow-hidden">
          עליי
        </motion.li>
        <motion.li variants={item} className=" overflow-hidden">
          פרויקטים
        </motion.li>
        <motion.li variants={item} className=" overflow-hidden">
          צור קשר
        </motion.li>
      </motion.ul>
    </div>
  );
}
