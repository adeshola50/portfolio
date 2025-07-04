import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaPython, FaDatabase, FaJs } from 'react-icons/fa';

const skills = [
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 80 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
    { name: 'Python', icon: <FaPython />, level: 75 },
    { name: 'SQL / MySQL', icon: <FaDatabase />, level: 70 },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-20"
        >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">Skills & Tools</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex items-center gap-3 mb-2 text-lg font-semibold">
                            <span className="text-2xl text-teal-600 dark:text-teal-400">{skill.icon}</span>
                            {skill.name}
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div
                                className="bg-teal-500 h-3 rounded-full transition-all duration-700"
                                style={{ width: '${skill.level}%' }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Skills;