"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
export default function Header({ theme, toggleTheme }) {
  const navItems = [
    "Skills",
    "Education",
    "Projects",
    "Experience",
    "Achievements",
    "Activities",
    "Certifications",
    "Contact",
  ];

  <Link href="/projects">Projects</Link>;
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300

${
  theme === "dark"
    ? "bg-slate-900/80 border-slate-700"
    : "bg-white/80 border-neutral-200"
}

`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl md:text-2xl font-bold tracking-tight cursor-pointer

${theme === "dark" ? "text-blue-400" : "text-blue-600"}

`}
        >
          Sneha
        </motion.div>

        {/* Navigation */}

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <motion.li
                key={item}
                className="relative group"
                whileHover={{ y: -2 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-300

${
  theme === "dark"
    ? "text-slate-300 group-hover:text-blue-400"
    : "text-slate-600 group-hover:text-blue-600"
}

`}
                >
                  {item}
                </a>

                {/* Animated Underline */}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full

${theme === "dark" ? "bg-blue-400" : "bg-blue-600"}

`}
                />
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all

${
  theme === "dark"
    ? "text-blue-400 hover:bg-slate-800"
    : "text-blue-600 hover:bg-neutral-100"
}

`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
