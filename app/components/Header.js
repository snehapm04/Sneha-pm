"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Header({ theme, toggleTheme }) {

return (

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
    
  </motion.div>

  <div className="flex items-center gap-6">

    <nav className="w-full md:w-auto">

      <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">

        {['Skills','Education','Projects','Experience','Activities','Contact'].map((item)=>(
          
          <motion.li
            key={item}
            whileHover={{ scale:1.05 }}
            whileTap={{ scale:0.95 }}
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
      whileHover={{ scale:1.1 }}
      whileTap={{ scale:0.9 }}
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        theme === 'dark'
        ? 'text-blue-400 hover:bg-slate-700'
        : 'text-blue-600 hover:bg-neutral-100'
      }`}
    >

      {theme === 'dark'
        ? <Sun size={20}/>
        : <Moon size={20}/>
      }

    </motion.button>

  </div>

</header>

)

}