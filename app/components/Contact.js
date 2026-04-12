"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Contact({ theme, textVariants }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textVariants}
      transition={{ duration: 0.6 }}
      id="contact"
      className="text-center"
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${
          theme === "dark" ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Contact Me
      </h2>
      <div className="flex justify-center gap-6 text-2xl md:text-3xl">
        {[
          {
            icon: <Linkedin />,
            link: "https://linkedin.com/sneha-mukunthan",
            label: "LinkedIn",
          },
          {
            icon: <Github />,
            link: "https://github.com/snehapm04",
            label: "GitHub",
          },
          {
            icon: <Mail />,
            link: "mailto:snehapmukunthan@gmail.com",
            label: "Email",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`transition-colors ${
              theme === "dark"
                ? "text-slate-300 hover:text-blue-400"
                : "text-slate-600 hover:text-blue-500"
            }`}
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
