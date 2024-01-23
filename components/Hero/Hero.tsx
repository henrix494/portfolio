"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollDown from "./ScrollDown";
import LeftSide from "./LeftSide";
import Box from "./Fog";
export default function Hero() {
  const lineRefTop = useRef(null);
  const lineRefBottom = useRef(null);

  useGSAP(() => {
    gsap.to(lineRefTop.current, { width: "80vw", duration: 4 });
    gsap.to(lineRefBottom.current, { width: "80vw", duration: 4 });
  }, [lineRefTop, lineRefBottom]);

  return (
    <>
      <div className="  relative text-white text-[12rem] max-lg:text-[4rem] flex flex-col justify-center items-center h-screen bg-[black]  ">
        <div
          ref={lineRefTop}
          className="z-40 bg-[white] h-[2px] w-0 lg:max-w-[55%]"
        ></div>
        <h2>מפתח תוכנה</h2>
        <h1 className="text-center">Full Stack</h1>
        <div
          ref={lineRefBottom}
          className="z-40 bg-[white] h-[2px] w-0 lg:max-w-[55%]"
        ></div>
      </div>

      <ScrollDown />
      <LeftSide />
    </>
  );
}
