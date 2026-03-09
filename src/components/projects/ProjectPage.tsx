// "use client";
// import React, { useState } from 'react';
// import Image from "next/image";
// import { FaPlus, FaGithub } from "react-icons/fa";
// import { IoClose } from "react-icons/io5"; // New Close Icon
// import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

// // Mock data remains the same
// const projectsData = [
//     {
//         id: 1,
//         title: "Modern Dashboard UI",
//         date: "August 2024",
//         tools: [<SiNextdotjs key="1" />, <SiTailwindcss key="2" />],
//         shortDesc: "A responsive admin dashboard with data visualization charts...",
//         fullDesc: "A responsive admin dashboard with data visualization charts, user management, and real-time analytics. Built with React, Tailwind CSS and Recharts.",
//         gitLink: "https://github.com/toushif"
//     },
//     {
//         id: 2,
//         title: "E-commerce Marketplace",
//         date: "January 2025",
//         tools: [<SiNextdotjs key="3" />, <SiMongodb key="4" />],
//         shortDesc: "A high-performance scalable marketplace with secure payment...",
//         fullDesc: "A full-stack marketplace featuring secure Stripe payments, real-time inventory, and a custom dashboard for vendors. Built using Next.js 15 and Server Actions.",
//         gitLink: "https://github.com/toushif"
//     }
// ];

// export default function ProjectPage() {
//     const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
//     const [isFormOpen, setIsFormOpen] = useState(false);

//     return (
//         <section id="projects" className="min-h-screen py-20 bg-slate-950 px-4 sm:px-10">
//             {/* Title with Gradient */}
//             <div className="text-center mb-16">
//                 <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300">
//                     Recent Projects
//                 </h1>
//             </div>

//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
//                 {/* Left Side: Profile or Project Detail */}
//                 <div className="sticky top-24 flex justify-center items-center min-h-[400px]">
//                     {!selectedProject ? (
//                         <div className="relative w-64 h-64" data-aos="fade-left">
//                             <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-lg animate-pulse opacity-50"></div>
//                             <div className="absolute inset-[-4px] rounded-full bg-linear-to-r from-blue-500 to-purple-600 animate-spin-slow opacity-75"></div>
//                             <div className="relative w-full h-full rounded-full border-4 border-indigo-500/30 overflow-hidden z-10">
//                                 <Image src="/Image/image.jpg" alt="Toushif" fill className="object-cover" />
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="bg-slate-900 p-8 rounded-xl border border-white/10 w-full" data-aos="zoom-in">
//                             <h2 className="text-3xl font-bold text-gray-200 mb-2">{selectedProject.title}</h2>
//                             <p className="text-indigo-400 font-medium mb-4">{selectedProject.date}</p>
//                             <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.fullDesc}</p>
//                             <div className="flex gap-4 text-2xl text-gray-400 mb-8">
//                                 {selectedProject.tools.map((tool, i) => <span key={i}>{tool}</span>)}
//                             </div>
//                             <a href={selectedProject.gitLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
//                                 <FaGithub /> View on GitHub
//                             </a>
//                             <button onClick={() => setSelectedProject(null)} className="mt-6 text-sm text-gray-500 hover:text-gray-300 block">
//                                 ← Back to Profile
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Right Side: Project List */}
//                 <div className="space-y-6">
//                     {projectsData.map((project) => (
//                         <div 
//                             key={project.id}
//                             data-aos="fade-right"
//                             onClick={() => setSelectedProject(project)}
//                             className="bg-slate-900 p-6 rounded-lg border border-white/5 cursor-pointer hover:border-indigo-500/50 transition-all w-full h-48 flex flex-col justify-between group"
//                         >
//                             <div>
//                                 <h3 className="text-xl font-bold text-gray-200 group-hover:text-indigo-400 transition-colors">
//                                     {project.title}
//                                 </h3>
//                                 <p className="text-sm text-indigo-500 mb-2">{project.date}</p>
//                                 <p className="text-gray-500 group-hover:text-gray-300 transition-colors line-clamp-2">
//                                     {project.shortDesc}
//                                 </p>
//                             </div>
//                             <div className="flex gap-3 text-gray-400">
//                                 {project.tools}
//                             </div>
//                         </div>
//                     ))}

//                     <div className="flex items-center gap-4 pt-10">
//                         <span className="text-gray-300 font-medium">Add new project</span>
//                         <button 
//                             onClick={() => setIsFormOpen(true)}
//                             className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
//                         >
//                             <FaPlus />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal Form with Close Button */}
//             {isFormOpen && (
//                 <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
//                     <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-md border border-white/10 relative">
                        
//                         {/* --- CLOSE BUTTON --- */}
//                         <button 
//                             onClick={() => setIsFormOpen(false)}
//                             className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors duration-300"
//                             aria-label="Close form"
//                         >
//                             <IoClose size={28} />
//                         </button>

//                         <h2 className="text-2xl font-bold text-gray-200 mb-6">Create New Project</h2>
//                         <form className="space-y-4">
//                             <input type="text" placeholder="Project Name" className="w-full bg-slate-800 border border-white/10 p-3 rounded text-gray-300 outline-none focus:border-indigo-500" />
//                             <input type="text" placeholder="Date" className="w-full bg-slate-800 border border-white/10 p-3 rounded text-gray-300 outline-none focus:border-indigo-500" />
                            
//                             <div className="flex gap-4">
//                                 <label className="text-gray-400 flex items-center gap-2 cursor-pointer">
//                                     <input type="radio" name="tool" className="accent-indigo-500" /> Next.js
//                                 </label>
//                                 <label className="text-gray-400 flex items-center gap-2 cursor-pointer">
//                                     <input type="radio" name="tool" className="accent-indigo-500" /> React
//                                 </label>
//                             </div>

//                             <textarea placeholder="Description" className="w-full bg-slate-800 border border-white/10 p-3 rounded text-gray-300 h-32 outline-none focus:border-indigo-500"></textarea>
                            
//                             <button type="button" onClick={() => setIsFormOpen(false)} className="w-full bg-indigo-600 py-3 rounded font-bold text-white hover:bg-indigo-500 transition-colors">
//                                 Save Project
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// }