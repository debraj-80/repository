// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise across DevOps and Backend Engineering
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={true}
            className="w-full"
          >
            <div className="bg-gray-900 backdrop-blur-md w-full max-w-sm h-[300px] 
flex flex-col justify-start rounded-2xl border border-white 
shadow-[0_0_25px_rgba(130,69,236,0.25)] p-8">

              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
  {category.title}
</h3>

<div className="flex flex-wrap justify-center gap-3">
  {category.skills.map((skill) => (
    <div
      key={skill.name}
      className="flex items-center gap-2 border border-gray-700 rounded-full px-4 py-2 
      hover:border-[#8245ec] transition duration-300"
    >
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-5 h-5"
      />
      <span className="text-sm text-gray-300">
        {skill.name}
      </span>
    </div>
  ))}
</div>

            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;