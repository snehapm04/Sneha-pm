"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Trophy, Users } from "lucide-react";

export default function Achievements({ theme, textVariants }) {
  const achievements = [
    {
      title: "Patent Published: Deep Learning-Based Speech Conversion",
      desc: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Patent published: <b>Deep Learning-Based Speech Conversion for Parkinsonian Dysarthria Using a Paired Acoustic Encoder–Decoder Framework with Multi-Vocoder Speech Reconstruction</b>.
          </li>
          <li>
            Co-authored by 3 inventors.
          </li>
          <li>
            Novel paired acoustic encoder–decoder framework with multi-vocoder speech reconstruction for Parkinsonian dysarthria.
          </li>
        </ul>
      ),
      tag: "Patent",
      icon: <Brain size={18} />,
    },
    {
      title: "IndiaAI Fellowship Recipient",
      desc: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Selected for a competitive fellowship by the Government of India (IndiaAI).</li>
          <li>Awarded ₹1,00,000 grant for research and development.</li>
          <li>Project: <b>AI-based speech enhancement system for Parkinson’s dysarthria</b> using encoder–decoder architecture and neural vocoders.</li>
          <li>Recognized for innovation in healthcare AI solutions.</li>
        </ul>
      ),
      tag: "Fellowship",
      icon: <Trophy size={18} />,
    },
    {
      title: "IEEE Conference Paper Acceptance",
      desc: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Paper accepted at <b>ICPSCN 2026 (IEEE Conference)</b>.</li>
          <li>Title: <i>Attention-Guided Acoustic Normalization of Parkinsonian Dysarthric Speech with Cross-Vocoder Evaluation</i>.</li>
          <li>Presented novel methods for improving speech intelligibility in Parkinson’s patients.</li>
          <li>Peer-reviewed and published in IEEE Xplore.</li>
        </ul>
      ),
      tag: "Conference",
      icon: <GraduationCap size={18} />,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textVariants}
      transition={{ duration: 0.6 }}
      id="achievements"
      className="text-center mt-20"
    >
      {/* Title */}

      <h2
        className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight ${
          theme === "dark" ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Achievements
      </h2>

      <p
        className={`text-sm mb-10 ${
          theme === "dark" ? "text-slate-400" : "text-slate-600"
        }`}
      >
        Fellowships • Conferences
      </p>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}

        <div
          className={`absolute left-3 top-0 bottom-0 w-[2px] ${
            theme === "dark" ? "bg-slate-700" : "bg-neutral-300"
          }`}
        />

        <div className="space-y-8 text-left">
          {achievements.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Timeline Dot */}

              <div
                className={`absolute left-0 top-2 w-6 h-6 rounded-full flex items-center justify-center

${theme === "dark" ? "bg-blue-500 text-white" : "bg-blue-600 text-white"}

`}
              >
                {act.icon}
              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                className={`p-5 rounded-xl border transition-all duration-300

${
  theme === "dark"
    ? "bg-slate-900 border-slate-700 hover:border-blue-500"
    : "bg-white border-neutral-200 hover:border-blue-400"
}

`}
              >
                {/* Header Row */}

                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-md">{act.title}</h3>

                  {/* Tag */}

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium

${theme === "dark" ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-700"}

`}
                  >
                    {act.tag}
                  </span>
                </div>
                {/* Description */}
                <div
                  className={`text-sm leading-relaxed
${theme === "dark" ? "text-slate-300" : "text-slate-700"}
`}
                >
                  {act.desc}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
