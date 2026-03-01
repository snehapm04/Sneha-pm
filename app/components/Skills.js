"use client";

import { motion } from "framer-motion";

export default function Skills({theme,textVariants}) {
  return(
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ duration: 0.6 }}
              id="skills" 
              className="text-center"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>Technical Skills</h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-lg shadow-md border transition-all duration-300 max-w-4xl mx-auto ${
                  theme === 'dark'
                    ? 'bg-slate-900/50 border-slate-700'
                    : 'bg-white border-neutral-200'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      category: "Programming & Web",
                      skills: [
                        { name: "Python", level: "Advanced" },
                        { name: "C++", level: "Intermediate" },
                        { name: "R", level: "Intermediate" },
                        { name: "React.js", level: "Intermediate" },
                        { name: "Next.js", level: "Intermediate" },
                        { name: "HTML5/CSS3", level: "Advanced" }
                      ]
                    },
                    {
                      category: "AI & Data Science",
                      skills: [
                        { name: "Deep Learning", level: "Intermediate" },
                        { name: "Machine Learning", level: "Advanced" },
                        { name: "NLP", level: "Intermediate" },
                        { name: "Data Analysis", level: "Advanced" },
                        { name: "TensorFlow", level: "Intermediate" }
                      ]
                    },
                    {
                      category: "Tools & Technologies",
                      skills: [
                        { name: "Git/GitHub", level: "Advanced" },
                        { name: "Tableau", level: "Intermediate" },
                        { name: "VS Code", level: "Advanced" },
                        { name: "Jupyter", level: "Advanced" },
                        { name: "Postman", level: "Intermediate" }
                      ]
                    }
                  ].map((category, index) => (
                    <div key={category.category} className="text-left">
                      <h3 className={`text-lg font-bold mb-3 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}>{category.category}</h3>
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            className={`flex justify-between items-center p-2 rounded-md ${
                              theme === 'dark'
                                ? 'bg-slate-800/50 hover:bg-slate-800'
                                : 'bg-neutral-100 hover:bg-neutral-200'
                            }`}
                          >
                            <span className={`text-sm font-medium ${
                              theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
                            }`}>{skill.name}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              theme === 'dark'
                                ? 'bg-blue-900/50 text-blue-400'
                                : 'bg-blue-100 text-blue-600'
                            }`}>{skill.level}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.section>
    
)}