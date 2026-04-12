"use client";

import { motion } from "framer-motion";

export default function Experience({ theme, textVariants }) {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Blackstraw AI",
      period: "Aug 2025 – Present",

      description:
        "Developing enterprise AI systems including RAG pipelines, conversational agents and scalable AI APIs.",

      tags: [
        "RAG Pipelines",
        "FastAPI Services",
        "Azure AI",
        "LangGraph",
        "Vector Search",
        "Production AI",
      ],

      projects: [
        {
          name: "Enterprise RAG Agent",
          tech: ["Azure AI", "FastAPI", "Vector DB"],
        },

        {
          name: "AI Form Recommendation",
          tech: ["LangGraph", "Redis", "FastAPI"],
        },
      ],
    },

    {
      title: "Web Development Intern",
      company: "Triad Software Pvt Ltd",
      period: "Feb 2023 – March 2023",

      description: "Built CMS pages and improved enterprise intranet UI.",

      tags: ["WordPress", "UI Development", "CMS", "Intranet", "Frontend"],
    },

    {
      title: "Virtual Internship",
      company: "Skillable",
      period: "July 2023 – August 2023",

      description: "Training in Generative AI and prompt engineering.",

      tags: ["Generative AI", "Prompt Engineering", "LLMs", "AI Projects"],
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textVariants}
      id="experience"
      className="max-w-5xl mx-auto px-4 mt-20"
    >
      {/* Title */}

      <h2
        className={`text-4xl font-bold text-center mb-3

${theme === "dark" ? "text-cyan-400" : "text-cyan-700"}

`}
      >
        Professional Experience
      </h2>

      <p
        className={`text-center mb-10 text-sm

${theme === "dark" ? "text-slate-400" : "text-slate-600"}

`}
      >
        AI Engineering • Software Development • Production Projects
      </p>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-xl border p-5 transition-all

${
  theme === "dark"
    ? "bg-slate-900 border-slate-700"
    : "bg-white border-gray-200"
}

hover:shadow-lg

`}
          >
            {/* Header */}

            <div className="flex flex-col md:flex-row md:justify-between mb-3">
              <div>
                <h3
                  className={`text-2xl font-bold

${theme === "dark" ? "text-white" : "text-black"}

`}
                >
                  {exp.title}
                </h3>

                <p
                  className={`font-semibold text-sm

${theme === "dark" ? "text-cyan-400" : "text-cyan-700"}

`}
                >
                  {exp.company}
                </p>
              </div>

              <div
                className={`text-sm mt-1

${theme === "dark" ? "text-slate-400" : "text-slate-600"}

`}
              >
                {exp.period}
              </div>
            </div>

            {/* Description */}

            <p
              className={`text-sm mb-3

${theme === "dark" ? "text-slate-300" : "text-slate-700"}

`}
            >
              {exp.description}
            </p>

            {/* Skill Tags */}

            <div className="flex flex-wrap gap-2 mb-3">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1 rounded-full

${theme === "dark" ? "bg-cyan-900 text-cyan-300" : "bg-cyan-100 text-cyan-700"}

`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Projects */}

            {exp.projects && (
              <div className="flex flex-wrap gap-3 mt-2">
                {exp.projects.map((proj, i) => (
                  <div
                    key={i}
                    className={`text-xs px-3 py-2 rounded-lg border

${
  theme === "dark"
    ? "border-slate-600 bg-slate-800"
    : "border-gray-300 bg-gray-50"
}

`}
                  >
                    <b>{proj.name}</b>

                    <div className="opacity-70 mt-1">
                      {proj.tech.join(" • ")}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
