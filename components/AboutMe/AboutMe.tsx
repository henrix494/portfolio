"use client";
import React from "react";
import Image from "next/image";
import Noise from "../Hero/Noise";
import { useInView } from "react-intersection-observer";
import Skilss from "./Skilss";
import icon from "@/public/patternpad.svg";
export default function AboutMe() {
  const { ref: ref0, inView: inView0 } = useInView({
    threshold: 1,
    delay: 0,
  });
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0,
    delay: 0,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0,
    delay: 0,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0,
    delay: 0,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0,
    delay: 0,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0,
    delay: 0,
  });

  return (
    <div className="relative bg-[#212529] h-screen flex flex-col max-lg:h-max max-lg:text-center max-lg:relative  overflow-hidden">
      <div
        className="flex justify-center text-white mt-40 mb-20 max-lg:mt-5 "
        ref={ref0}
      >
        <h2
          className={`text-white transition-all text-4xl lg:text-8xl duration-[2s]  overflow-hidden border-b-2 ${
            inView0 ? `opacity-100` : "opacity-0"
          }`}
        >
          היי
        </h2>
      </div>
      <div className="flex justify-center flex-col items-center text-8xl gap-4 transition-all font-serif ">
        <div
          className={`text-white transition-all duration-[5s] text-4xl lg:text-6xl overflow-hidden    ${
            inView1 ? ` opacity-100` : "opacity-0"
          }`}
          ref={ref1}
        >
          אני נתן
        </div>
        <div
          className={`text-white transition-all duration-[5s] text-4xl lg:text-6xl overflow-hidden z-20 ${
            inView2 ? `opacity-100` : "opacity-0"
          }`}
          ref={ref2}
        >
          מפתח אתרים
        </div>
        <div
          className={`text-white transition-all duration-[3s] text-4xl lg:text-6xl overflow-hidden ${
            inView3 ? ` opacity-100` : "opacity-0"
          }`}
          ref={ref3}
        >
          מעצב אתרים
        </div>
        <div
          className={`text-white transition-all duration-[3s] text-4xl lg:text-6xl overflow-hidden ${
            inView4 ? ` opacity-100` : "opacity-0"
          }`}
          ref={ref4}
        >
          ונותן פיתרונות דיגיטלים
        </div>
      </div>

      <div className=" z-50 absolute left-0 top-1/2 translate-y-[-50%] max-lg:static max-lg:translate-y-0 text-sm ">
        <Skilss />
      </div>

      <div className="absolute max-lg:relative">
        <Image
          src={"/IMG_7720-removebg-preview.png"}
          width={600}
          height={600}
          alt="me"
          className="z-[50] relative"
        />
      </div>
      <div className=" absolute top-0   h-full overflow-hidden">
        {" "}
        <div className=" opacity-25  ">
          {" "}
          <Noise />
        </div>
      </div>
      <Image
        ref={ref5}
        className={`${
          inView5 ? " opacity-100" : " opacity-0"
        }  absolute bottom-[-20%] w-[800px]   transition-all duration-[3s]  h-[300px] left-1/2 translate-x-[-50%] z-[2000] max-lg:hidden  `}
        src={icon}
        alt=""
      />
    </div>
  );
}
