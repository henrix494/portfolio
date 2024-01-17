import React from "react";
import "./movingNoise.css";
import { useInView } from "react-intersection-observer";

const useSkillInView = () => {
  return useInView({
    threshold: 1,
    delay: 0,
  });
};

const SkillComponent = ({ skill }: any) => {
  const { ref, inView } = useSkillInView();

  return (
    <div className="skills flex flex-col text-white items-center text-center">
      <div></div>
      <div className="skill-title">{skill.title}</div>
      <div className="bar">
        <div
          ref={ref}
          className={`bar-color}`}
          style={{ width: inView ? `${skill.percent}%` : "0%" }}
        ></div>
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
