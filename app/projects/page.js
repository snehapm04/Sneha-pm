"use client";
import React, { useState, useEffect } from "react";

import Projects from "../components/Projects";

export default function ProjectsPage() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
const [theme, setTheme] = useState('dark');
  return (
    <div className={`min-h-screen ${
      theme === 'dark'
      ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-slate-100'
      : 'bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 text-slate-900'
      }`}>
      <div className="pt-24 min-h-screen">
        <Projects
          theme="dark"
          textVariants={textVariants}
          fullPage={true}
        />
      </div>
    </div>
  );
}