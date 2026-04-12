"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function About({ theme, textVariants }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ duration: 0.6 }}
      className="text-center relative mt-6"
    >
      {/* Soft Background Glow */}

      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className={`w-[500px] h-[300px] blur-3xl opacity-20 rounded-full

${theme === "dark" ? "bg-blue-500" : "bg-blue-300"}

`}
        />
      </div>

      {/* Heading */}

      <h1
        className={`text-4xl md:text-5xl font-bold mb-3 tracking-tight

${theme === "dark" ? "text-white" : "text-black"}

`}
      >
        Hi, I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Sneha
        </span>
      </h1>

      {/* Role Line */}
      <p
        className={`text-lg md:text-xl font-semibold mb-6
${theme === "dark" ? "text-blue-400" : "text-blue-600"}
`}
      >
        AI Engineer • Full Stack Developer • Problem Solver
      </p>

      {/* Profile Image */}

      <div className="flex justify-center mb-6">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden
border-4 shadow-xl

${
  theme === "dark"
    ? "border-blue-500 shadow-blue-500/20"
    : "border-blue-400 shadow-blue-300/40"
}

`}
        >
          {/* Glow Ring */}
          <div
            className={`absolute inset-0 rounded-full blur-md opacity-40
${theme === "dark" ? "bg-blue-500" : "bg-blue-300"}
`}
          />

          <Image
            src="/profile-pic-2.jpg"
            alt="Sneha Profile"
            fill
            className="object-cover relative z-10"
            priority
          />
        </motion.div>
      </div>

      {/* Description */}

      <p
        className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6

${theme === "dark" ? "text-slate-300" : "text-slate-700"}

`}
      >
        Artificial Intelligence and Machine Learning student passionate about
        building real-world AI systems. Experienced in developing scalable AI
        applications, Retrieval-Augmented Generation pipelines, and full-stack
        intelligent platforms.
      </p>

      {/* Highlights */}

      {/* Buttons */}

      <div className="flex justify-center gap-4 flex-wrap">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://drive.google.com/file/d/1uNPXCXaV8TXC8hINmUWp9T-0WCSR5cPH/view?usp=sharing"
          className={`py-2.5 px-6 rounded-md text-sm font-semibold shadow-lg transition

${
  theme === "dark"
    ? "bg-blue-600 hover:bg-blue-700 text-white"
    : "bg-blue-500 hover:bg-blue-600 text-white"
}

`}
        >
          Download Resume
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className={`py-2.5 px-6 rounded-md text-sm font-semibold border transition
${
  theme === "dark"
    ? "border-blue-400 text-blue-400 hover:bg-blue-900/30"
    : "border-blue-600 text-blue-600 hover:bg-blue-50"
}
`}
        >
          Contact Me
        </motion.a>
      </div>
    </motion.section>
  );
}
