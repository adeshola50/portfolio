import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-6 py-20 text-center"
        >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Get in Touch</h2>
            <p className="max-w-xl mx-auto mb-8 text-lg">
                I'm currently open to remote developer or data analyst opportunities. If you think I’d be a great fit for your team or project, feel free to reach out!
            </p>

            <a
                href="mailto:oluwaseunadeshola50@gmail.com"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-teal-700 transition mb-6"
            >
                📧 oluwaseunadeshola50@gmail.com
            </a>

            <div className="flex justify-center gap-6 mt-6 text-2xl">
                <a
                    href="https://github.com/adeshola50"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/oluwaseun-adeshola-7b5b42372/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition"
                >
                    <FaLinkedin />
                </a>
            </div>

            <div className="mt-10">
                <a
                    href="/Adeshola-Oluwaseun-CV.pdf"
                    download
                    className="inline-block border border-teal-600 dark:border-teal-400 text-teal-700 dark:text-teal-300 px-6 py-2 rounded-full font-semibold hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-black transition"
                >
                    📄 Download CV
                </a>
            </div>
        </section>
    );
};

export default Contact;