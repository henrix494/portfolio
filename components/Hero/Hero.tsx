"use client";
import { motion } from "framer-motion";
import Fog from "./Fog";
import Noise from "./Noise";
import "./noise.css";
import ScrollDown from "./ScrollDown";
import LeftSide from "./LeftSide";
export default function Hero() {
  return (
    <>
      <div className=" overflow-hidden">
        <div className="z-[20]   relative text-white text-[12rem] max-lg:text-[4rem] flex flex-col justify-center items-center h-screen ">
          <motion.div
            className="absolute top-40 z-40 bg-[white] h-[2px] w-0  sm:w-0 lg:max-w-[55%] max-lg:top-52"
            animate={{ width: "80vw" }} // final state
            transition={{ duration: 3, ease: "easeInOut" }} // animation settings
          ></motion.div>
          <h2>מפתח תוכנה</h2>
          <h1 className="text-center">Full Stack</h1>
          <motion.div
            className="absolute bottom-40 z-40 bg-[white] h-[2px] w-0  sm:w-0 lg:max-w-[55%] max-lg:bottom-52"
            animate={{ width: "80vw" }} // final state
            transition={{ duration: 3, ease: "easeInOut" }} // animation settings
          ></motion.div>
        </div>
      </div>
      <div className="absolute top-0 w-screen  opacity-85">
        <Fog />
        <div className="opacity-45">
          <Noise />
        </div>
      </div>
      <ScrollDown />
      <LeftSide />
    </>
  );
}
