"use client";

import { motion } from "framer-motion";

export default function Experience({theme,textVariants}) {
  return (
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ duration: 0.6 }}
              id="experience" 
              className="text-center"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>Experience</h2>
              <div className="space-y-4 px-4 max-w-4xl mx-auto">
                {[
                  {
                  title: "Software Developer Intern",
                  company: "Blackstraw AI",
                  period: "Aug 2025 - Present",
                  points: [
                    "Developed RAG (Retrieval-Augmented Generation) agents for context-aware information retrieval and AI generation.",
                    "Integrated AI solutions with Azure Foundry for scalable deployment and orchestration.",
                    "Built APIs and microservices using Python & FastAPI for AI model interaction.",
                    "Conducted data exploration and preprocessing to support AI workflows.",                  
                    "Rapidly learned and applied Generative AI techniques to real-world projects.",
                    "Gained hands-on experience in end-to-end AI solution deployment, from data to production."
                    ]
                  },
                  {
                    title: "Web Development Intern",
                    company: "Triad Software Pvt Ltd",
                    period: "Feb 2023 - March 2023",
                    points: [
                      "Training in the development of Word Press CMS website and redesigned the intranet pages.",
                      "Gained hands-on experience in the software development workflow",
                      "Contributed to frontend development using WordPress"
                    ]
                  },
                  {
                    title: "Virtual Internship",
                    company: "Skillable",
                    period: "July 2023 - August 2023",
                    points: [
                      "Gained hands-on experience with GenAI concepts, prompt engineering, and model applications through practical modules"
                    ]
                  },
                  {
                    title: "Event Head - Tech Symposium",
                    company: "Easwari Engineering College",
                    period: "2024 - Present",
                    points: [
                      "Led the planning and execution of four technical events",
                      "Coordinated with event heads, volunteers, and faculty to ensure smooth execution and strong participation."
                    ]
                  }
                ].map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg shadow-md border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-slate-900/50 border-slate-700'
                        : 'bg-white border-neutral-200'
                    }`}
                  >
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 tracking-tight ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>{exp.title}</h3>
                    <p className={`text-base md:text-lg font-semibold mb-1 ${
                      theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
                    }`}>{exp.company}</p>
                    <p className={`text-sm md:text-base mb-3 font-medium ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>{exp.period}</p>
                    <ul className={`text-left text-sm md:text-base space-y-1 font-medium ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {exp.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          • {point}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>
  )  
}