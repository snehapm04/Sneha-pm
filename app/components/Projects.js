"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Projects({ theme, textVariants,fullPage = false}) {

const [filter,setFilter] = useState("All")
const projects = [

{
title:"FoodShare Platform",
description:"Real-time food sharing platform with donor-recipient chat and live listings",
image:"/food-donate.jpg",
link:"#",
category:"Featured Systems",
tags:["NextJS","SocketIO","FullStack"]
},

{
title:"Customer Churn Prediction",
description:"Predicts telecom customer churn using ML and emotional analysis",
image:"/customer-churn.png",
link:"https://github.com/snehapm04/customer-churn-prediction",
category:"AI&ML",
tags:["Python","ML","NLP"]
},

{
title:"Next Word Prediction",
description:"Deep learning LSTM network for sequence based text prediction",
image:"/next-word.jpg",
link:"https://github.com/snehapm04/Next-Word-Prediction-using-LSTM",
category:"AI&ML",
tags:["LSTM","DeepLearning"]
},

{
title:"Synthetic Data Generation",
description:"AI based synthetic dataset generation using statistical modeling",
image:"/synthetic-data.jpg",
link:"https://github.com/snehapm04/Invictrons",
category:"AI&ML",
tags:["AI","Data"]
},

{
title:"Diabetes Prediction",
description:"ML classification model predicting diabetes risk",
image:"/diabetes.jpeg",
link:"https://github.com/snehapm04/Diabetes-Prediction",
category:"AI&ML",
tags:["Python","ML"]
},
{
title:"Marketing Campaign Optimization using Agents",
description:"Multi-agent system that generates comprehensive marketing campaigns using AI agents powered by CrewAI and AutoGen",
image:"/market.jpg",
link:"https://github.com/snehapm04/Marketing-Campaign-Optimization-using-Agents",
category:"Core Applications",
tags:["Python","Agents"]
},
{
title:"Blood donation management system",
description:"A Tkinter-based desktop application that connects to a MySQL database to manage blood donor information.",
image:"/blood.jpg",
link:"https://github.com/snehapm04/Blood-donation-mgt-system",
category:"Exploration...",
tags:["Python","MySQL","Tkinter"]
},
{
title:"Banking Application with Tkinter",
description:"Implementation of a GUI-based banking system using Python's Tkinter library",
image:"/banking.jpg",
link:"https://github.com/snehapm04/banking-pspp",
category:"Exploration...",
tags:["Python","Tkinter"]
},
{
title:"Language learning flashcards",
description:"Web-based application for users learn vocabulary through interactive flashcards.",
image:"/flashcard.jpg",
link:"https://github.com/snehapm04/Language-Learning-Flashcards/",
category:"Full Stack",
tags:["HTML","CSS","JavaScript"]
},
{
title:"Blog generation",
description:"AI-powered blog generation using LangChain and Streamlit",
image:"/blog.jpg",
link:"https://github.com/snehapm04/Blog-generation",
category:"AI&ML",
tags:["langchain","streamlit"]
},
{
title:"Web Scraping",
description:"Web scraping tool built with Python and BeautifulSoup",
image:"/web_scraping.jpg",
link:"https://github.com/snehapm04/Web-Scraping",
category:"Exploration...",
tags:["Python","BeautifulSoup"]
}
];

const filteredProjects =
  filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

const visibleProjects = fullPage
  ? filteredProjects
  : filteredProjects.slice(0, 4);

return (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={textVariants}
    transition={{ duration: 0.6 }}
    id="projects"
    className="text-center"
  >
    <h2
      className={`text-3xl md:text-4xl font-bold mb-8 tracking-tight ${
        theme === "dark"
          ? "text-blue-400"
          : "text-blue-600"
      }`}
    >
      Projects
    </h2>

    {/* CATEGORY FILTERS */}
    <div className="flex justify-center gap-3 mb-8 flex-wrap">
      {[
        "All",
        "Featured Systems",
        "AI&ML",
        "Full Stack",
        "Exploration...",
      ].map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 border ${
            filter === cat
              ? theme === "dark"
                ? "bg-blue-500 text-white border-blue-400"
                : "bg-blue-500 text-white border-blue-500"
              : theme === "dark"
              ? "border-slate-600 text-slate-300 hover:border-blue-400"
              : "border-neutral-300 text-slate-600 hover:border-blue-500"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* PROJECT GRID */}
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto pb-8">
      {visibleProjects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{ y: -6 }}
          className={`relative rounded-xl overflow-hidden border shadow-md transition-all duration-500 ${
            theme === "dark"
              ? "bg-slate-900/70 border-slate-700 hover:border-blue-400"
              : "bg-white border-neutral-200 hover:border-blue-500"
          }`}
        >
          {/* IMAGE */}
          <div className="relative w-full h-44 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-700 hover:scale-110"
            />

            {/* HOVER OVERLAY */}
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 hover:opacity-100 transition duration-400 ${
                theme === "dark"
                  ? "bg-slate-900/95 text-white"
                  : "bg-white/95 text-black"
              }`}
            >
              <p className="text-sm mb-3">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm hover:scale-105 transition"
              >
                View Project
              </a>
            </div>
          </div>

          {/* TEXT */}
          <div className="p-4">
            <h3
              className={`font-semibold text-lg mb-2 ${
                theme === "dark"
                  ? "text-blue-400"
                  : "text-blue-600"
              }`}
            >
              {project.title}
            </h3>

            {/* TAGS */}
            <div className="flex gap-2 justify-center flex-wrap">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded-md ${
                    theme === "dark"
                      ? "bg-slate-700 text-slate-200"
                      : "bg-blue-100 text-slate-700"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* HOME PAGE → View All Button */}
    {!fullPage && (
      <div className="mt-10">
        <Link
          href="/projects"
          className={`px-6 py-2 rounded-md font-semibold transition ${
            theme === "dark"
              ? "text-blue-400 hover:bg-slate-800"
              : "text-blue-600 hover:bg-blue-50"
          }`}
        >
          View All Projects →
        </Link>
      </div>
    )}
  </motion.section>
)
}