import Header from "@/components/general/Header";
import ServiceCard from "./ServiceCard";

export default function XServiceSection() {
    return (
        <section id="services">
            {/* header */}
            <Header title="What I Offer" />
            <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
                {/* service card */}
                <ServiceCard
                    icon="/Image/s1.png"
                    name="UI and UX"
                    description="Desigining intuitive interfaces and seamless user experiences for web and mobile applications, ensuring user satisfaction and engagement."
                />            
                <ServiceCard
                    icon="/Image/s2.png"
                    name="Web and Mobile Application"
                    description="Building responsive and scalable web and mobile applications using modern technologies and frameworks."
                />            
                <ServiceCard
                    icon="/Image/s3.png"
                    name="Design and Creative"
                    description="Creative design solutions for digital and print media, including branding, UI/UX design, and visual storytelling."
                />            
                <ServiceCard
                    icon="/Image/s4.png"
                    name="Development"
                    description="Full-stack development services, including frontend and backend development, database management, and API integration."
                />
            </div>
        </section>
    )
}
