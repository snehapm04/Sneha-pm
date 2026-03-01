"use client";

import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Activities from "./components/Activities";
import Certifications from "./components/Certifications";
export default function Portfolio() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
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

<div className={`min-h-screen ${
theme === 'dark'
? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-slate-100'
: 'bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 text-slate-900'
}`}>

<Header theme={theme} toggleTheme={toggleTheme} />

<main className="px-4 md:px-6 py-8 md:py-12 space-y-12 md:space-y-16 max-w-6xl mx-auto">

<About theme={theme} textVariants={textVariants} />

<Skills theme={theme} textVariants={textVariants} />

<Education theme={theme} textVariants={textVariants} />

<Experience theme={theme} textVariants={textVariants} />

<Projects
theme={theme}
textVariants={textVariants}
home={true}
/>
<Activities theme={theme} textVariants={textVariants}/>
<Certifications theme={theme} textVariants={textVariants} />
<Contact theme={theme} textVariants={textVariants} />

</main>

<Footer theme={theme} />

</div>

  );
}