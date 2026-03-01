"use client";

import { motion } from "framer-motion";

export default function Education({ theme, textVariants }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textVariants}
      transition={{ duration: 0.6 }}
      id="education"
      className="text-center"
    >
      {/* Section Title */}
      <h2
        className={`text-4xl md:text-5xl font-bold mb-10 tracking-tight ${
          theme === "dark" ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Education
      </h2>

      <div className="grid gap-6 md:grid-cols-2 px-4 max-w-5xl mx-auto">

        {[
          {
            degree: "B.E. Computer Science and Engineering",
            school: "Easwari Engineering College",
            period: "2022 – 2026",
            cgpa: "9.1 CGPA",
            highlights: ["Honours Degree", "AI & ML Specialization"],
            details: [
              "Machine Learning",
              "Deep Learning",
              "Data Structures & Algorithms",
              "Artificial Intelligence"
            ]
          },
          {
            degree: "Higher Secondary Education",
            school: "Apex Pon Vidyashram",
            period: "2020 – 2022",
            cgpa: "92%",
            highlights: ["Computer Science Stream"],
            details: [
              "Mathematics",
              "Computer Science",
              "Physics",
              "Chemistry"
            ]
          }
        ].map((edu, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              y: -6,
              scale: 1.02
            }}
            className={`p-6 rounded-xl shadow-lg border transition-all duration-300 text-left ${
              theme === "dark"
                ? "bg-slate-900/60 border-slate-700 hover:border-blue-500"
                : "bg-white border-neutral-200 hover:border-blue-400"
            }`}
          >

            {/* Degree */}
            <h3
              className={`text-xl md:text-2xl font-semibold mb-2 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {edu.degree}
            </h3>

            {/* School */}
            <p
              className={`text-lg font-medium ${
                theme === "dark" ? "text-slate-200" : "text-slate-900"
              }`}
            >
              {edu.school}
            </p>

            {/* Period + CGPA Row */}
            <div className="flex justify-between items-center mt-2 mb-4">

              <span
                className={`text-sm ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {edu.period}
              </span>

              {/* CGPA Badge */}
              <span
                className={`text-sm px-3 py-1 rounded-full font-semibold ${
                  theme === "dark"
                    ? "bg-blue-900/40 text-blue-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {edu.cgpa}
              </span>

            </div>


            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-4">

              {edu.highlights.map((tag, i) => (

                <span
                  key={i}
                  className={`text-xs px-3 py-1 rounded-full ${
                    theme === "dark"
                      ? "bg-slate-800 text-slate-300"
                      : "bg-neutral-100 text-slate-700"
                  }`}
                >
                  {tag}
                </span>

              ))}

            </div>


            {/* Coursework */}
            <div>

              <p
                className={`text-sm font-semibold mb-2 ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-700"
                }`}
              >
                Key Coursework
              </p>

              <ul
                className={`text-sm space-y-1 ${
                  theme === "dark"
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                {edu.details.map((detail, i) => (
                  <li key={i}>• {detail}</li>
                ))}
              </ul>

            </div>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}