"use client";

import { motion } from "framer-motion";

export default function Footer({ theme }) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`text-center py-4 md:py-6 border-t ${
        theme === "dark"
          ? "border-slate-700 text-slate-400"
          : "border-neutral-200 text-slate-600"
      } text-sm md:text-base font-medium`}
    >
      <p>&copy; 2025 Sneha. All rights reserved.</p>
    </motion.footer>
  );
}
