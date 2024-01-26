"use client";

import { motion } from "framer-motion";
import "./navbar.css";

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

  const linkVariants = {
    rest: { color: "#262626" },
    hover: { color: "#fff" },
  };

  const underlineVariants = {
    rest: { scaleY: 2, opacity: 0 },
    hover: { scaleY: 1, opacity: 1 },
  };

  return (
    <div className="absolute text-white z-30 right-20 text-4xl overflow-hidden max-lg:hidden">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-10 overflow-hidden"
      >
        <motion.li variants={item} className="overflow-hidden cursor-pointer">
          <motion.a
            href="#AboutmeSec"
            variants={linkVariants}
            initial="rest"
            whileHover="hover"
          >
            <motion.span className="before" variants={underlineVariants} />
            קצת עליי
          </motion.a>
        </motion.li>

        <motion.li variants={item} className="overflow-hidden cursor-pointer">
          <motion.a
            href="#ProjectSec"
            variants={linkVariants}
            initial="rest"
            whileHover="hover"
          >
            <motion.span className="before" variants={underlineVariants} />
            פרויקטים
          </motion.a>
        </motion.li>

        <motion.li
          onClick={() => {
            scrollTo(0, document.body.scrollHeight);
          }}
          variants={item}
          className="overflow-hidden cursor-pointer"
        >
          <motion.a
            href="#ContactSec"
            variants={linkVariants}
            initial="rest"
            whileHover="hover"
          >
            <motion.span className="before" variants={underlineVariants} />
            צור קשר
          </motion.a>
        </motion.li>
      </motion.ul>
    </div>
  );
}
