"use client";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Noise from "../Hero/Noise";
export const MobilePro = () => {
  const { ref: ref0, inView: inView0 } = useInView({
    threshold: 0,
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
  useGSAP(() => {
    gsap.to("test", { rotation: 180 });
  });
  return (
    <div className=" lg:hidden bg-white relative h-screen overflow-hidden max-lg:h-max">
      <div className="z-30 relative flex flex-col gap-10 items-center ">
        <div ref={ref0} className="  text-4xl">
          <h1
            className={`${
              inView0 ? " translate-x-[0%]" : "translate-x-[50%]"
            } text-center text-8xl overflow-hidden relative transition-all duration-[1s] mt-10 `}
          >
            פרויקטים
          </h1>
        </div>
        <div
          ref={ref1}
          className={`test ${
            inView1 ? " translate-x-[0%]" : "translate-x-[-100%]"
          }   transition-all duration-[1s] mt-10 `}
        >
          <Image
            src={"/scrnli_15-1-2024_20-20-08.png"}
            width={400}
            height={400}
            alt="screen"
          />
        </div>
        <div
          ref={ref2}
          className={`${
            inView2 ? " translate-x-[0%]" : "translate-x-[100%]"
          } transition-all duration-[1s] mt-10 `}
        >
          <Image
            src={"/scrnli_15-1-2024_20-25-47.png"}
            width={400}
            height={400}
            alt="screen"
          />
        </div>
        <div
          ref={ref3}
          className={`${
            inView3 ? " translate-x-[0%]" : "translate-x-[-100%]"
          } text-center text-8xl overflow-hidden relative transition-all duration-[1s] mt-10 `}
        >
          <Image
            src={"/scrnli_15-1-2024_20-26-56.png"}
            width={400}
            height={400}
            alt="screen"
          />
        </div>
        <div
          ref={ref4}
          className={`${
            inView4 ? " translate-x-[0%]" : "translate-x-[100%]"
          } text-center text-8xl overflow-hidden relative transition-all duration-[1s] mt-10 `}
        >
          <Image
            src={"/scrnli_15-1-2024_20-32-50.png"}
            width={400}
            height={400}
            alt="screen"
          />
        </div>
      </div>
      <div className=" absolute top-0 z-10 ">
        <Noise />
      </div>
    </div>
  );
};
