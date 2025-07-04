import React from 'react';

const projects = [
    {
        title: 'Social Network App',
        description: 'A full-stack app built with React, Node.js, and MySQL that allows users to post, comment, and connect.',
        link: '#',
        tags: ['React', 'Node.js', 'MySQL']
    },
    {
        title: 'Data Analysis Dashboard',
        description: 'An interactive dashboard with charts and insights built using Python, Pandas, and Chart.js.',
        link: '#',
        tags: ['Python', 'Pandas', 'Chart.js']
    },
    {
        title: 'Veteran Health Connect',
        description: 'A mobile-friendly app that connects injured soldiers to medical help, built with React and Tailwind.',
        link: '#',
        tags: ['React', 'Tailwind', 'Mobile UI']
    }
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-6 py-20"
        >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-teal-500 text-white px-2 py-1 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;