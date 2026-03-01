"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About({theme,textVariants}) {
  return(
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
                    src="/profile-pic-2.jpg"
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
    


              )
}