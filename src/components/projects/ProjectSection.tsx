import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    return (
        <section id="projects" className="py-20">
            <Header title="Recent Projects" />


            <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                <div data-aos="fade-right">
                    <ProjectCard
                        title="Fashion E-commerce"
                        image="/Image/fashionEcomerce.png"
                        description="A responsive admin dashboard with data visualization charts, user management, and real-time analytics. Built with React, Tailwind CSS and Recharts."
                    />
                </div>

                <div className="fade-left">
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
                </div>

            </div>
        </section>
    )
}