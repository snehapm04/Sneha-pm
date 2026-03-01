"use client";

import { motion } from "framer-motion";

export default function Education({theme,textVariants}) {
  return(
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ duration: 0.6 }}
              id="education" 
              className="text-center"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>Education</h2>
              <div className="grid gap-4 md:grid-cols-2 px-4 max-w-4xl mx-auto">
                {[
                  {
                    degree: "B.E. in Computer Science and Engineering",
                    school: "Easwari Engineering College",
                    period: "2022 - 2026",
                    details: [
                      "Specialization in AI & ML",
                      "CGPA: 9.1/10",
                      "Relevant Coursework: Machine Learning, Deep Learning, Data Structures, Algorithms",
                      "Pursuing a Honours Degree"
                    ]
                  },
                  {
                    degree: "High School",
                    school: "Apex Pon Vidyashram",
                    period: "2020 - 2022",
                    details: [
                      "Stream: Computer Science",
                      "Percentage: 92%"
                    ]
                  }
                ].map((edu, index) => (
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
                    }`}>{edu.degree}</h3>
                    <p className={`text-base md:text-lg font-semibold mb-1 ${
                      theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
                    }`}>{edu.school}</p>
                    <p className={`text-sm md:text-base mb-3 font-medium ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>{edu.period}</p>
                    <ul className={`text-left text-sm md:text-base space-y-1 font-medium ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {edu.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          • {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>
    
              )

}