"use client";
import React, { useRef, useEffect } from "react";
import "./movingNoise.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillComponent = ({ skill }: any) => {
  const skillRef = useRef(null);

  useGSAP(() => {
    const skillAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: skillRef.current,
        toggleActions: "play reset reset reset",
      },
    });

    skillAnimation.to(skillRef.current, {
      width: `${skill.percent}%`,
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <div className="skills flex flex-col text-white items-center text-center">
      <div className="skill-title">{skill.title}</div>

      <div className="bar ">
        <div ref={skillRef} className={`bar-color  bg-[black]  `}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { title: "Html", percent: 99 },
    { title: "Css", percent: 99 },
    { title: "React", percent: 99 },
    { title: "Js", percent: 99 },
    { title: "Next.Js", percent: 99 },
    { title: "Sql", percent: 99 },
    { title: "No-Sql", percent: 99 },
  ];

  return (
    <div className="lg:mt-0 max-lg:mt-10 border-t-2 pt-4 border-[#00000095]">
      <div className="progress-bar text-center flex h-screen max-lg:h-max max-lg:gap-5">
        <h1 className="text-4xl overflow-hidden mb-5 lg:mb-0">הכלים שלי</h1>
        {skillsData.map((skill, index) => (
          <SkillComponent key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
