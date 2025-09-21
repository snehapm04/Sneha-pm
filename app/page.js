"use client";
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Sun, Moon } from "lucide-react";

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme || systemTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-slate-100' 
        : 'bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 text-slate-900'
    } font-sans`}>
      {/* Header */}
      <header className={`flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-5 border-b sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300 ${
        theme === 'dark'
          ? 'border-slate-700 bg-slate-800/95'
          : 'border-neutral-200 bg-white/95'
      }`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl md:text-3xl font-bold mb-4 md:mb-0 tracking-tight ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          Sneha&apos;s Portfolio
        </motion.div>
        <div className="flex items-center gap-6">
        <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
              {['Skills', 'Education', 'Projects', 'Experience', 'Activities', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`font-medium tracking-wide transition-colors ${
                      theme === 'dark' 
                        ? 'text-slate-300 hover:text-blue-400' 
                        : 'text-slate-600 hover:text-blue-500'
                    }`}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
          </ul>
        </nav>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' 
                ? 'text-blue-400 hover:bg-slate-700' 
                : 'text-blue-600 hover:bg-neutral-100'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-16 max-w-6xl mx-auto">
        {/* About Me Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Sneha!</span>
          </h1>
          <div className="flex justify-center mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-lg ${
                theme === 'dark' ? 'border-blue-500' : 'border-blue-400'
              }`}
            >
              <Image
                src="/IMG-20250904-WA0001.jpg"
                alt="Sneha's Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
          <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
          }`}>
            A passionate Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I am driven to build impactful solutions using cutting-edge technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-6 py-2.5 px-6 rounded-md text-base font-semibold shadow-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <a href="https://drive.google.com/file/d/1uNPXCXaV8TXC8hINmUWp9T-0WCSR5cPH/view?usp=sharing" download>Download Resume</a>
          </motion.button>
        </motion.section>

        {/* Skills Section */}
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

        {/* Education Section */}
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

        {/* Experience Section */}
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

        {/* Projects Section */}
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

        {/* Contact Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          transition={{ duration: 0.6 }}
          id="contact" 
          className="text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}>Contact Me</h2>
          <div className="flex justify-center gap-6 text-2xl md:text-3xl">
            {[
              {
                icon: <Linkedin />,
                link: "https://linkedin.com/sneha-mukunthan",
                label: "LinkedIn"
              },
              {
                icon: <Github />,
                link: "https://github.com/snehapm04",
                label: "GitHub"
              },
              {
                icon: <Mail />,
                link: "mailto:snehapmukunthan@gmail.com",
                label: "Email"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-colors ${
                  theme === 'dark' ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-500'
                }`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`text-center py-4 md:py-6 border-t ${
          theme === 'dark' ? 'border-slate-700 text-slate-400' : 'border-neutral-200 text-slate-600'
        } text-sm md:text-base font-medium`}
      >
        <p>&copy; 2025 Sneha. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
