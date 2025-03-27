import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaFigma, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiAdobeXd } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Web Design", icon: <SiAdobeXd className="text-blue-800" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">My Skills</h2>
        <p className="text-3xl font-bold text-gray-800 mt-2">Below are some of my skills</p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          As a beginner in web development I've learnt a couple of languages namely: HTML5, CSS3, JavaScript, React...
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="flex items-center justify-center space-x-2 bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition"
            >
              <span>{skill.icon}</span>
              <span className="text-gray-800">{skill.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;