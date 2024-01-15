import React from "react";
import "./movingNoise.css";
import useSkillInView from "./useSkillIn";

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
    <div className="lg:mt-0 max-lg:mt-10">
      <div className="progress-bar text-center flex h-screen max-lg:h-max">
        <h1 className="text-4xl overflow-hidden mb-5 lg:mb-0">הכלים שלי</h1>
        {skillsData.map((skill, index) => {
          const { ref, inView } = useSkillInView();

          return (
            <div
              className="skills flex flex-col text-white items-center text-center"
              key={index}
            >
              <div></div>
              <div className="skill-title">{skill.title}</div>
              <div className="bar">
                <div
                  ref={ref}
                  className={`bar-color ${inView ? "animate-width" : ""}`}
                  style={{ width: inView ? `${skill.percent}%` : "0%" }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
