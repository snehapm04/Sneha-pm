"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700 sticky top-0 z-50 bg-black bg-opacity-75">
        <motion.div
          animate={{ x: [0, -10, 0] }}
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
        >
          Sneha's Portfolio
        </motion.div>
        <nav>
          <ul className="flex gap-6 text-lg">
            <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
            <li><a href="#education" className="hover:text-pink-400">Education</a></li>
            <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
            <li><a href="#experience" className="hover:text-pink-400">Experience</a></li>
            <li><a href="#activities" className="hover:text-pink-400">Activities</a></li>
            <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 py-10 space-y-16">
        {/* About Me Section */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Hi, I'm Sneha!
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I am driven to build impactful solutions using cutting-edge technology.
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg">
            <a href="https://drive.google.com/file/d/1uNPXCXaV8TXC8hINmUWp9T-0WCSR5cPH/view?usp=sharing" download>Download Resume</a>
          </button>
        </section>

        {/* Skills Section */}
        <section id="skills" className="text-center">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">Python</div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">Machine Learning</div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">React.js</div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">Next.js</div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">AI/ML</div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">Data Visualization</div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="text-center">
          <h2 className="text-4xl font-bold mb-6">Education</h2>
          <p className="text-lg">B.E. in Computer Science and Engineering (AI & ML)</p>
          <p className="text-lg">Easwari Engineering College, 2022-2026</p>
          <br></br>
          <p className="text-lg">High School</p>
          <p className="text-lg">Apex Pon Vidyashram</p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="text-center">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <a href="#" className="text-blue-400 hover:underline">Customer Churn Prediction</a>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <a href="#" className="text-blue-400 hover:underline">AI-Driven Research Engine</a>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <a href="#" className="text-blue-400 hover:underline">Next Word Prediction using LSTM</a>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <a href="#" className="text-blue-400 hover:underline">Diabetes Diagnostic Tool</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <div className="flex justify-center gap-6 text-3xl">
            <a href="https://linkedin.com/sneha-mukunthan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <Linkedin />
            </a>
            <a href="https://github.com/snehapm04" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Github />
            </a>
            <a href="pmsneha1234@gmail.com" className="hover:text-red-500">
              <Mail />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700">
        <p>&copy; 2025 Sneha. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
