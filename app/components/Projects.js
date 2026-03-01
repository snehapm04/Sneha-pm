"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects({theme,textVariants}) {
  return(
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ duration: 0.6 }}
              id="projects" 
              className="text-center"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>Projects</h2>
              <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
                {[
                  {
                    title: "Customer Churn Prediction",
                    description: "Machine Learning project to predict customer churn using various algorithms",
                    image: "/customer-churn.png",
                    link: "https://github.com/snehapm04/customer-churn-prediction"
                  },
                  {
                    title: "Synthetic Data Generation",
                    description: "AI project for generating synthetic data using advanced techniques",
                    image: "/synthetic-data.jpg",
                    link: "https://github.com/snehapm04/Invictrons"
                  },
                  {
                    title: "Next Word Prediction",
                    description: "LSTM-based model for predicting the next word in a sequence",
                    image: "/next-word.jpg",
                    link: "https://github.com/snehapm04/Next-Word-Prediction-using-LSTM"
                  },
                  {
                    title: "Diabetes Prediction",
                    description: "Machine Learning model to predict diabetes risk factors",
                    image: "/diabetes.jpeg",
                    link: "https://github.com/snehapm04/Diabetes-Prediction"
                  },
                  {
                    title: "FoodShare: Real Time Food Sharing Platform",
                    description: "Real-time platform to share surplus food with live donor-recipient communication",
                    image: "/food-donate.jpg",
                    link: "#"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-3 rounded-lg shadow-md border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-slate-900/50 border-slate-700 hover:border-blue-500'
                        : 'bg-white border-neutral-200 hover:border-blue-400'
                    }`}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="relative w-full h-32 md:h-40 mb-3 rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <h3 className={`text-lg md:text-xl font-bold mb-1 tracking-tight ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}>{project.title}</h3>
                      <p className={`text-sm md:text-base font-medium ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                      }`}>{project.description}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.section>
    
              )
  }