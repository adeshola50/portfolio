import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
  >
    {/* Text */}
    <motion.div
      className="md:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I’m Adeshola Oluwaseun👋</h1>
      <p className="text-lg md:text-xl">
        A passionate <span className="text-teal-400">Frontend Developer</span> and{" "}
        <span className="text-teal-400">Data Analyst</span> crafting responsive UIs
        and data-driven insights.
      </p>
    </motion.div>

    {/* Image */}
    <motion.div
      className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <img
        src="/adeshola.jpeg"
        alt="Adeshola Oluwaseun"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-teal-500 shadow-lg"
      />
    </motion.div>
  </section>
);

export default Hero;