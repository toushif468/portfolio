import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    return (
        <section id="project" className="py-20">
            <Header title="Recent Projects"/>
            

            <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                
                <ProjectCard 
                    title="Modern Dashboard UI" 
                    image="/Image/p1.webp"  
                    description="A responsive admin dashboard with data visualization charts, user management, and real-time analytics. Built with React, Tailwind CSS and Recharts." 
                />

               
                <ProjectCard 
                    title="E-commerce Marketplace" 
                    image="/Image/p2.webp" 
                    description="A full-stack marketplace featuring secure Stripe payments, real-time inventory, and a custom dashboard for vendors." 
                />                
                <ProjectCard 
                    title="Modern education website" 
                    image="/Image/p3.webp" 
                    description="A full-stack marketplace featuring secure Stripe payments, real-time inventory, and a custom dashboard for vendors." 
                />                
                <ProjectCard 
                    title="Modern SAAS project" 
                    image="/Image/p4.webp" 
                    description="A full-stack marketplace featuring secure Stripe payments, real-time inventory, and a custom dashboard for vendors." 
                />
            </div>
        </section>
    )
}