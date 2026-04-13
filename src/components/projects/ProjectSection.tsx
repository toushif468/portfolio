"use client";
import { allProjects, categories } from "@/constants/project";
import Header from "../general/Header";
import ProjectCard from "./ProjectCard";
import { useState } from "react";


export default function ProjectSection() {
    const [cat, setCat] = useState("ALL")
    const filteredProjects = allProjects.filter((project) =>
        cat === "ALL" ? true : project.category.includes(cat)
    )
    return (
        <section id="projects" className="py-20">
            <Header title="Recent Projects" />

            <div className=" flex gap-6 items-center justify-center flex-wrap mb-12">
                {

                    categories.map((categories) => (
                        <button onClick={() => setCat(categories)} key={categories} className={`px-4 py-2 rounded-full text-sm font-medium ${categories === cat ? 'bg-indigo-600 text-white font-semibold' : 'bg-slate-800 text-gray-300'}  transition-all`}>
                            {categories}
                        </button>
                    ))
                }
            </div>
            <div className="w-[90%] md:w-[70%] mx-auto grid md:grid-cols-2 gap-10">

                {/* <div data-aos="fade-right"> */}
                {
                    filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            tools={project.tools}
                            category={project.category}
                            gitURL={project.gitURL}
                            demoLink={project.demoLink}
                        />
                    ))
                }

                {/* </div> */}

                {/* <div className="fade-left">
                    <ProjectCard
                        title="SymToDoc"
                        image="/Image/SymToDoc.png"
                        description="SymToDoc is a React Native mobile application designed to empower users with fast, accessible, and intelligent health insights. Visit github to know more."
                    />
                </div>

                <div data-aos="fade-left">
                    <ProjectCard
                        title="Root2Good"
                        image="/Image/Roots2Goods.png"
                        description="An agro-product supply chain management system that help users to manage their business and monitored by admin. Visit github to know more."
                    />
                </div>
                <div className="fade-right">
                    <ProjectCard
                        title="Modern education website"
                        image="/Image/UIU_PSP.png"
                        description="UIU_PSP is a collaborative educational web app designed to help students improve academic performance by engaging in peer-to-peer learning, question sharing, and interactive problem solving."
                    />
                </div> */}

            </div>
        </section>
    )
}