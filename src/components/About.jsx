import React from 'react';

const About = () => (
    <section
        id="about"
        className="min-h-[60vh] flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-16"
    >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">About Me</h2>

        <p className="max-w-3xl leading-relaxed text-center text-lg">
            I’m <span className="font-semibold text-teal-600 dark:text-teal-400">Adeshola Oluwaseun</span>,
            a passionate&nbsp;
            <span className="font-semibold">Frontend Developer</span> and&nbsp;
            <span className="font-semibold">Data Analyst</span> with a love for crafting
            responsive, user-focused web experiences and uncovering insights that
            drive smarter decisions.
            <br />
            <br />
            I enjoy turning complex problems into elegant solutions using&nbsp;
            <code className="font-mono bg-black/20 px-1 rounded">React</code>,&nbsp;
            <code className="font-mono bg-black/20 px-1 rounded">Tailwind CSS</code>,
            and <code className="font-mono bg-black/20 px-1 rounded">SQL/Python</code>.
            When I’m not coding, you’ll find me learning new tech, mentoring friends,
            or tinkering with data-visualization projects.
        </p>
    </section>
);

export default About;