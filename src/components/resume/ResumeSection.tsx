import { LuAward, LuBookOpen, LuGraduationCap } from "react-icons/lu";
import Header from "../general/Header";
import ResumeCard from "./ResumeCard";
import { RiNextjsFill } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* education */}
        <div>
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard icon={LuGraduationCap} role={"Computer Science"} description={"Bachelor of Coputer Science and Engineering from United INternation University | Focused on algorithms, data structures, softwate engineering principles, and web technologies."} date="Novenmber 2025" />
            <ResumeCard icon={LuBookOpen} role={"Relevant Coursework"} description={"WebDevelpment, Database System, Data Strucutres & Algorithms, Software Engineering, computer Networking, Operating Systems, Cloud Computing."} date="Novenmber 2025" />
            <ResumeCard icon={LuAward} role={"Academic Achievements"} description={" Graduated from United International University | Champion of Electronincs Project Award | first Runnerup in Micro."} date="Novenmber 2024" />
          </div>
        </div>
        {/* experience */}
        <div>
          <Header title="My Experience" as="h2" />
          <div className="space-y-8">
            {/* 1. CURRENT PROJECT: E-COMMERCE */}
            <ResumeCard
              icon={MdOutlinePayment}
              role="Full Stack E-commerce Development"
              date="January 2025 — Present"
              description="Developing a high-performance scalable marketplace with secure payment integration, real-time inventory tracking, and an optimized checkout flow using Next.js 15 and Server Actions."
            />

            {/* 2. COMPLETED PROJECT: NEWSPAPER */}
            <ResumeCard
              icon={IoNewspaperOutline}
              role="Full Stack Web Development (Newspaper)"
              date="November 2023 — January 2025"
              description="Engineered a responsive digital news platform featuring dynamic content rendering, SEO optimization for fast indexing, and a custom CMS for seamless editorial workflows."
            />

            {/* 3. CORE EXPERTISE / PREVIOUS ROLE */}
            <ResumeCard
              icon={RiNextjsFill}
              role="Frontend & UI/UX Specialist"
              date="2023"
              description="Focused on building accessible, pixel-perfect interfaces. Implemented advanced animations and performance-tuned React components to ensure 90+ Lighthouse scores."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

