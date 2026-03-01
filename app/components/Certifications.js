"use client";

import { motion } from "framer-motion";

export default function Certifications({ theme, textVariants }) {

const certs = [

{
name:"Affective Computing",
org:"NPTEL",
score:"Elite + Gold (94%)",
highlight:true
},

{
name:"Foundations of R Software",
org:"NPTEL",
score:"Elite + Gold (94%)",
highlight:true
},

{
name:"Data Analytics with Python",
org:"NPTEL",
score:"Elite + Silver (81%)"
},

{
name:"Explore GenAI & Copilots",
org:"Microsoft Learnathon",
score:"Completed"
},

{
name:"The Complete 2024 Web Development Bootcamp",
org:"Udemy",
score:"Issued May 2024"
},

{
name:"Entrepreneurship Essentials",
org:"Professional Certification",
score:"Completed"
},

{
name:"Leadership & Team Effectiveness",
org:"Professional Certification",
score:"Completed"
}

];

return (

<motion.section
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={textVariants}
transition={{ duration: 0.6 }}
id="certifications"
className="text-center mt-20"
>

{/* Title */}

<h2 className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight ${
theme === "dark" ? "text-blue-400" : "text-blue-600"
}`}>
Certifications
</h2>

{/* Subtitle */}

<p className={`text-sm mb-8 ${
theme==="dark"?"text-slate-400":"text-slate-600"
}`}>
Professional certifications and technical learning
</p>



<div className={`max-w-4xl mx-auto border rounded-xl p-6 ${
theme === "dark"
? "bg-slate-900/50 border-slate-700"
: "bg-white border-neutral-200"
}`}>

<div className="grid md:grid-cols-2 gap-4 text-left">

{certs.map((cert,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*0.07}}

className={`p-4 rounded-lg flex justify-between items-center transition-all duration-300

${cert.highlight
? theme==="dark"
? "border border-blue-500 bg-slate-800"
: "border border-blue-400 bg-blue-50"
: theme==="dark"
? "bg-slate-800/50 hover:bg-slate-800"
: "bg-neutral-100 hover:bg-neutral-200"
}

`}
>

<div>

{/* Cert Name */}

<p className="font-semibold text-sm">
{cert.name}
</p>


{/* Organization */}

<p className={`text-xs mt-1 ${
theme === "dark" ? "text-slate-400":"text-slate-600"
}`}>
{cert.org}
</p>

</div>


{/* Score Badge */}

<span className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap

${
cert.highlight
? theme==="dark"
? "bg-blue-900 text-blue-300"
: "bg-blue-200 text-blue-800"
: theme === "dark"
? "bg-blue-900/50 text-blue-400"
: "bg-blue-100 text-blue-600"
}

`}>
{cert.score}
</span>


</motion.div>

))}

</div>

</div>

</motion.section>

);
}