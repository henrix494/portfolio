"use client";
import React from "react";
import Image from "next/image";
import Noise from "../Hero/Noise";
import Skilss from "./Skilss";
import icon from "@/public/patternpad.svg";
import { useAnimation } from "@/hooks/aboutMe";
import { aboutMeText } from "@/const/aboutme/aboutme";
export default function AboutMe() {
  const { container, img } = useAnimation(); // Use the useAnimation hook
  const refs = useAnimation();
  return (
    <div className="relative bg-[#212529] h-screen flex flex-col  max-xl:h-max max-xl:text-center max-xl:relative  overflow-hidden">
      <div
        className="flex justify-center text-white mt-40 mb-20 max-xl:mt-5 con opacity-0 "
        ref={container}
      >
        <h2
          className={`text-white transition-all text-4xl lg:text-8xl duration-[2s]  overflow-hidden border-b-2 good   `}
        >
          היי
        </h2>
      </div>
      <div className="flex justify-center flex-col items-center text-8xl gap-4 transition-all font-serif ">
        {aboutMeText.map((item) => {
          return (
            <div
              key={item.id}
              ref={refs[item.ref]}
              className={`text-white text-4xl lg:text-6xl overflow-hidden   opacity-0
          }`}
            >
              {item.words}
            </div>
          );
        })}
      </div>

      <div className=" z-50 absolute left-0 top-1/2 translate-y-[-50%] max-xl:static max-xl:translate-y-0 text-sm ">
        <Skilss />
      </div>

      <div className="absolute max-xl:relative flex justify-center">
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
        ref={img}
        className={`

         absolute bottom-[-20%] w-[800px]     h-[300px] left-1/2 translate-x-[-50%] z-[2000] max-xl:hidden opacity-0  `}
        src={icon}
        alt=""
      />
    </div>
  );
}
