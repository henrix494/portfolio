"use client";
import React, { useState } from "react";
import Image from "next/image";
import Model from "./Model";
import { elements, education } from "@/const/Projects/projects";
import ToBe from "./ToBe";

export interface HoverStates {
  [key: string]: boolean;
}

export default function Projects() {
  const [isModel, setModel] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageClickHandler = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    modelHandler();
  };

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const modelHandler = () => {
    setModel((prev) => !prev);
  };

  return (
    <div className="bg-white relative   max-lg:hidden font-mono font-bold w-screen flex-shrink-0 section   ">
      <div className="flex  ">
        <div className="flex flex-col w-[70%] border-l-2 border-black   ">
          {elements.map(({ id, imageSrc, time, title, des, stack }) => (
            <div key={id} className="text-black cursor-pointer   ">
              <Model
                model={isModel}
                modelHandler={modelHandler}
                imageSrc={selectedImage || ""}
              />
              <div
                className={`border-b-2 border-black h-[150px] pr-10 `}
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
        <div className="w-[30%] flex flex-col">
          <div className="border-b-2 border-black flex justify-center items-center">
            <h1 className=" text-8xl overflow-hidden  h-[148px] ">השכלה</h1>
          </div>

          {education.map(({ id, imageSrc, time, title, field }) => (
            <div
              onMouseMove={(e) => handleMouseMove(e)}
              onMouseEnter={() => handleHover(id, true)}
              onMouseLeave={() => handleHover(id, false)}
              className="border-b-2 border-black h-[150px]"
              key={id}
            >
              <div className="h-full flex justify-around items-center pr-10 ">
                <div className="flex flex-col justify-center h-full w-[600px]">
                  <p className="text-[#eda5b7]">{time}</p>
                  <p className="text-4xl overflow-hidden">{title}</p>
                  <p>{field}</p>
                </div>
              </div>
              <div className="rounded-full">
                <Image
                  src={imageSrc}
                  width={400}
                  height={400}
                  className={`z-[10000]  ${
                    hoverStates[id]
                      ? " fixed rounded-full w-[350px] h-[200px]"
                      : " hidden"
                  }`}
                  alt="page"
                  style={{
                    position: "fixed",
                    top: mousePosition.y + 50,
                    left: mousePosition.x,
                  }}
                />
              </div>
            </div>
          ))}
          <div className=" border-2 pb-11 border-b-[black] h-[300px] overflow-hidden">
            {" "}
            <ToBe />
          </div>
        </div>
      </div>
    </div>
  );
}
