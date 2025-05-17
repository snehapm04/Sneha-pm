"use client";
import Image from 'next/image'
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 border-b border-gray-700 sticky top-0 z-50 bg-black bg-opacity-75">
        <motion.div
          animate={{ x: [0, -10, 0] }}
          className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4 md:mb-0"
        >Sneha's Portfolio
        </motion.div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center gap-3 md:gap-6 text-base md:text-lg">
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
      <main className="px-4 md:px-6 py-8 md:py-10 space-y-12 md:space-y-16">
        {/* About Me Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Hi, I'm Sneha!
          </h1>
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-500">
              <Image
                src="/profile-pic.jpg"
                alt="Sneha's Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            A passionate Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I am driven to build impactful solutions using cutting-edge technology.
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg text-base md:text-lg font-semibold shadow-lg">
            <a href="https://drive.google.com/file/d/1uNPXCXaV8TXC8hINmUWp9T-0WCSR5cPH/view?usp=sharing" download>Download Resume</a>
          </button>
        </section>

        {/* Skills Section */}
        <section id="skills" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-base md:text-lg px-4">
            <div className="bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg">Python</div>
            <div className="bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg">Machine Learning</div>
            <div className="bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg">React.js</div>
            <div className="bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg">Next.js</div>
            <div className="bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg">AI/ML</div>
            <div className="bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg">Data Visualization</div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
          <div className="grid gap-6 md:grid-cols-2 px-4 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">B.E. in Computer Science and Engineering</h3>
              <p className="text-base md:text-lg font-medium mb-2">Easwari Engineering College</p>
              <p className="text-sm md:text-base text-gray-300 mb-3">2022 - 2026</p>
              <ul className="text-left text-sm md:text-base space-y-2 text-gray-300">
                <li>• Specialization in AI & ML</li>
                <li>• CGPA: 9.1/10</li>
                <li>• Relevant Coursework: Machine Learning, Deep Learning, Data Structures, Algorithms</li>
                <li>• Pursuing a Honours Degree</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">High School</h3>
              <p className="text-base md:text-lg font-medium mb-2">Apex Pon Vidyashram</p>
              <p className="text-sm md:text-base text-gray-300 mb-3">2020 - 2022</p>
              <ul className="text-left text-sm md:text-base space-y-2 text-gray-300">
                <li>• Stream: Computer Science</li>
                <li>• Percentage: 92%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>
          <div className="space-y-8 px-4 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">Web Development Intern</h3>
              <p className="text-base md:text-lg font-medium mb-2">Triad Software Pvt Ltd</p>
              <p className="text-sm md:text-base text-gray-300 mb-3">Feb 2023 - March 2023</p>
              <ul className="text-left text-sm md:text-base space-y-2 text-gray-300">
                <li>• Training in the development of Word Press CMS website and redesigned the intranet pages.</li>
                <li>• Gained hands-on experience in the software development workflow</li>
                <li>• Contributed to frontend development using WordPress </li>
                
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">Virtual Internship</h3>
              <p className="text-base md:text-lg font-medium mb-2">Skillable</p>
              <p className="text-sm md:text-base text-gray-300 mb-3">July 2023 - August 2023</p>
              <ul className="text-left text-sm md:text-base space-y-2 text-gray-300">
                <li>Gained hands-on experience with GenAI concepts, prompt engineering, and model applications through practical modules</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">Event Head - Tech Symposium</h3>
              <p className="text-base md:text-lg font-medium mb-2">Easwari Engineering College</p>
              <p className="text-sm md:text-base text-gray-300 mb-3">2024 - Present</p>
              <ul className="text-left text-sm md:text-base space-y-2 text-gray-300">
                <li>• Led the planning and execution of four technical events</li>
                <li>• Coordinated with event heads, volunteers, and faculty to ensure smooth execution and strong participation.</li>
      
              </ul>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Activities</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Technical Event Head</h3>
              <p className="text-sm md:text-base text-gray-300">ATLAS EEC, Easwari Engineering College</p>
              <p className="text-sm text-gray-400 mt-2">2024 - Present</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Competitive Programmer</h3>
              <ul className="text-left text-sm md:text-base space-y-2 text-gray-300">
                <li>• Solved 500+ problems on <a href="https://leetcode.com/u/snehapm/" className="text-blue-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
                <li>• 5-star coder on <a href="https://www.hackerrank.com/profile/pmsneha1234" className="text-blue-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">HackerRank</a></li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Volunteer</h3>
              <p className="text-sm md:text-base text-gray-300">Youth Red Cross EEC</p>
              <p className="text-sm text-gray-400 mt-2">Supported community service and awareness activities</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Contributor</h3>
              <p className="text-sm md:text-base text-gray-300">Social Winter of Code</p>
              <p className="text-sm text-gray-400 mt-2">Contributed to open-source projects and code improvements</p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Web Development Bootcamp</h3>
              <p className="text-sm md:text-base text-gray-300">Udemy</p>
              <p className="text-sm text-gray-400 mt-2">2023</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Affective Computing</h3>
              <p className="text-sm md:text-base text-gray-300">NPTEL</p>
              <p className="text-sm text-gray-400 mt-2">Jan-Mar 2025</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Data analysis with Python</h3>
              <p className="text-sm md:text-base text-gray-300">NPTEL</p>
              <p className="text-sm text-gray-400 mt-2">Jan-Mar 2024</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">CCNA Certification</h3>
              <p className="text-sm md:text-base text-gray-300">Cisco</p>
              <p className="text-sm text-gray-400 mt-2">Dec-May 2025</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Introduction to GenAI</h3>
              <p className="text-sm md:text-base text-gray-300">Google Cloud</p>
              <p className="text-sm text-gray-400 mt-2">May 2024</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <a href="https://github.com/snehapm04/customer-churn-prediction" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-40 md:h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/customer-churn.png"
                    alt="Customer Churn Prediction"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-400">Customer Churn Prediction</h3>
              </a>
            </div>
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <a href="https://github.com/snehapm04/Invictrons" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-40 md:h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/synthetic-data.jpg"
                    alt="Synthetic Data Generation"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-400">SynVault-Synthetic Data Generation</h3>
              </a>
            </div>
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <a href="https://github.com/snehapm04/Next-Word-Prediction-using-LSTM" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-40 md:h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/next-word.jpg"
                    alt="Next Word Prediction"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-400">Next Word Prediction using LSTM</h3>
              </a>
            </div>
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <a href="https://github.com/snehapm04/Diabetes-Prediction" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-40 md:h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/diabetes.jpeg"
                    alt="Diabetes Diagnostic Tool"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-400">Diabetes Diagnostic Tool</h3>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
          <div className="flex justify-center gap-6 text-2xl md:text-3xl">
            <a href="https://linkedin.com/sneha-mukunthan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <Linkedin />
            </a>
            <a href="https://github.com/snehapm04" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Github />
            </a>
            <a href="mailto:pmsneha1234@gmail.com" className="hover:text-red-500">
              <Mail />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 md:py-6 border-t border-gray-700 text-sm md:text-base">
        <p>&copy; 2025 Sneha. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
