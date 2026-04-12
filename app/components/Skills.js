"use client";

import { motion } from "framer-motion";

export default function Skills({ theme, textVariants }) {
  const skillGroups = [
    {
      category: "Programming & Development",

      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 70 },
        { name: "R", level: 70 },
        { name: "React.js", level: 75 },
        { name: "Next.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
      ],
    },

    {
      category: "AI & Machine Learning",

      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Deep Learning", level: 80 },
        { name: "NLP", level: 75 },
        { name: "Data Analysis", level: 90 },
        { name: "TensorFlow", level: 75 },
        { name: "Generative AI", level: 80 },
      ],
    },

    {
      category: "Tools & Platforms",

      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter", level: 95 },
        { name: "Tableau", level: 70 },
        { name: "Postman", level: 75 },
        { name: "Azure AI", level: 70 },
      ],
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textVariants}
      transition={{ duration: 0.6 }}
      id="skills"
      className="text-center mt-16"
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-10

${theme === "dark" ? "text-blue-400" : "text-blue-600"}

`}
      >
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`p-6 rounded-xl border transition-all duration-300

${
  theme === "dark"
    ? "bg-slate-900/40 border-slate-700 hover:border-blue-400"
    : "bg-white border-neutral-200 hover:border-blue-500"
}

`}
          >
            <h3
              className={`text-lg font-semibold mb-5 text-left

${theme === "dark" ? "text-blue-400" : "text-blue-600"}

`}
            >
              {group.category}
            </h3>

            <div className="space-y-4">
              {group.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span
                      className={`font-medium

${theme === "dark" ? "text-slate-200" : "text-slate-800"}

`}
                    >
                      {skill.name}
                    </span>

                    <span
                      className={`text-xs

${theme === "dark" ? "text-slate-400" : "text-slate-500"}

`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}

                  <div
                    className={`w-full h-2 rounded-full overflow-hidden

${theme === "dark" ? "bg-slate-800" : "bg-neutral-200"}

`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className={`h-full rounded-full

${theme === "dark" ? "bg-blue-400" : "bg-blue-600"}

`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
