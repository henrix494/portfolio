"use client";

import Image from "next/image";
import { useState, MouseEvent } from "react";
import Model from "./Model";
import Marquee from "react-fast-marquee";

interface Element {
  id: string;
  imageSrc: string;
  time: string;
  title: string;
  des: string;
  stack: string;
}

interface HoverStates {
  [key: string]: boolean;
}

export default function Projects() {
  const [isModel, setModel] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageClickHandler = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    modelHandler();
  };
  const elements: Element[] = [
    {
      id: "ele1",
      imageSrc: "/scrnli_15-1-2024_20-20-08.png",
      time: "2021",
      title: "אתר תדמית לחברת אנסטלציה",
      des: "זמן בנייה חודשיים",
      stack: "Full stack",
    },
    {
      id: "ele2",
      imageSrc: "/scrnli_15-1-2024_20-25-47.png",
      time: "2022",
      title: "אתר חנות בגדים",
      des: "זמן בנייה חודשיים",
      stack: "Full stack",
    },
    {
      id: "ele3",
      imageSrc: "/scrnli_15-1-2024_20-22-28.png",
      time: "2021",
      title: "אתר לטיפול אלטרנטיבי",
      des: "זמן בנייה חודשיים",
      stack: "Full stack",
    },
    {
      id: "ele4",
      imageSrc: "/scrnli_15-1-2024_20-32-50.png",
      time: "2023",
      title: "אתר תדמית למפתח",
      des: "זמן בנייה חודשיים",
      stack: "Full stack",
    },
    {
      id: "ele5",
      imageSrc: "/scrnli_15-1-2024_20-26-56.png",
      time: "2023",
      title: "חנות קפה",
      des: "זמן בנייה חודשיים",
      stack: "Full stack",
    },
  ];

  const [hoverStates, setHoverStates] = useState<HoverStates>(
    elements.reduce((acc, { id }) => ({ ...acc, [id]: false }), {})
  );

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleHover = (element: string, isHovering: boolean) => {
    setHoverStates((prevState) => ({ ...prevState, [element]: isHovering }));
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  const modelHandler = () => {
    setModel((prev) => !prev);
  };
  return (
    <div className="bg-white  relative h-screen max-lg:hidden">
      <div className="flex">
        <div className="flex flex-col w-[70%] border-l-2 border-black ">
          {elements.map(({ id, imageSrc, time, title, des, stack }) => (
            <div key={id} className="text-black cursor-pointer   ">
              <Model
                model={isModel}
                modelHandler={modelHandler}
                imageSrc={selectedImage || ""}
              />
              <div
                className={`border-b-2 border-black h-[150px] pr-10`}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseEnter={() => handleHover(id, true)}
                onMouseLeave={() => handleHover(id, false)}
                onClick={() => imageClickHandler(imageSrc)}
              >
                <div className="h-full flex justify-around items-center">
                  <div className="flex flex-col justify-center h-full w-[600px]">
                    <p className="text-[#eda5b7]">{time}</p>
                    <p className="text-4xl overflow-hidden">{title}</p>
                    <p>{des}</p>
                  </div>
                  <div>
                    <p className="text-[#b4b4b4] text-3xl">{stack}</p>
                  </div>
                </div>
              </div>
              <Image
                src={imageSrc}
                width={400}
                height={400}
                className={` ${hoverStates[id] ? " fixed" : " hidden"}`}
                alt="page"
                style={{
                  position: "fixed",
                  top: mousePosition.y + 50,
                  left: mousePosition.x,
                }}
              />
            </div>
          ))}
        </div>
        <div className=" w-[30%]   flex flex-col">
          <div className="border-b-2 border-black">
            <h1 className="text-center text-8xl overflow-hidden  h-[148px] ">
              השכלה
            </h1>
          </div>
          <div className="border-b-2 border-black">
            <h1 className="text-center text-8xl overflow-hidden  h-[148px] ">
              השכלה
            </h1>
          </div>
          <div className="border-b-2 border-black">
            <h1 className="text-center text-8xl overflow-hidden  h-[148px] ">
              השכלה
            </h1>
          </div>
          <div className=" mt-24">
            <h1 className="text-center text-8xl overflow-hidden  ">
              המשך יבוא
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
