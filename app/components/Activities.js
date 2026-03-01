"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Trophy, Users } from "lucide-react";

export default function Activities({ theme, textVariants }) {

const activities = [

{
title: "AI Workshop Mentor",
desc: "Conducted an interactive AI workshop for 10th-grade students including computer vision demos, model training basics, tech quiz, and AI ethics discussions.",
tag:"Mentor",
icon:<GraduationCap size={18}/>
},

{
title: "BITS Hyderabad Hackathon",
desc: "Built a Generative AI synthetic data generator in a 24-hour hackathon with rapid prototyping and model experimentation.",
tag:"Hackathon",
icon:<Brain size={18}/>
},

{
title: "Technical Event Head – ATLAS",
desc: "Led and organized the first AIML departmental symposium, managing technical events and team coordination.",
tag:"Leadership",
icon:<Users size={18}/>
},

{
title: "CodHer'24 Hackathon",
desc: "Developed a Diabetes Prediction web system using Django during a 24-hour ACM women-only hackathon.",
tag:"Hackathon",
icon:<Trophy size={18}/>
}

];

return (

<motion.section
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={textVariants}
transition={{ duration: 0.6 }}
id="activities"
className="text-center mt-20"
>

{/* Title */}

<h2 className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight ${
theme === "dark" ? "text-blue-400" : "text-blue-600"
}`}>
Activities & Leadership
</h2>

<p className={`text-sm mb-10 ${
theme==="dark"?"text-slate-400":"text-slate-600"
}`}>
Workshops • Hackathons • Leadership
</p>



<div className="max-w-4xl mx-auto relative">

{/* Vertical Line */}

<div className={`absolute left-3 top-0 bottom-0 w-[2px] ${
theme==="dark"?"bg-slate-700":"bg-neutral-300"
}`} />



<div className="space-y-8 text-left">

{activities.map((act,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*0.1}}

className="relative pl-10"
>


{/* Timeline Dot */}

<div className={`absolute left-0 top-2 w-6 h-6 rounded-full flex items-center justify-center

${
theme==="dark"
?"bg-blue-500 text-white"
:"bg-blue-600 text-white"
}

`}>

{act.icon}

</div>



{/* Card */}

<motion.div

whileHover={{
y:-4
}}

className={`p-5 rounded-xl border transition-all duration-300

${
theme==="dark"
?"bg-slate-900 border-slate-700 hover:border-blue-500"
:"bg-white border-neutral-200 hover:border-blue-400"
}

`}
>


{/* Header Row */}

<div className="flex justify-between items-center mb-2">

<h3 className="font-semibold text-md">
{act.title}
</h3>


{/* Tag */}

<span className={`text-xs px-3 py-1 rounded-full font-medium

${
theme==="dark"
?"bg-blue-900 text-blue-300"
:"bg-blue-100 text-blue-700"
}

`}>

{act.tag}

</span>

</div>



{/* Description */}

<p className={`text-sm leading-relaxed

${
theme==="dark"
?"text-slate-300"
:"text-slate-700"
}

`}>

{act.desc}

</p>



</motion.div>

</motion.div>

))}

</div>

</div>

</motion.section>

);
}