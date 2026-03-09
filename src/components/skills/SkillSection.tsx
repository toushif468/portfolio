import { DiJavascript, DiReact, DiNodejs, DiPython, DiJava } from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiCplusplus, SiExpress, SiMongodb, SiPhp } from "react-icons/si";
import Header from "../general/Header";
import SkillCard from "./SkillCard";

const skills = [
    { name: "Javascript", icon: <DiJavascript />, skillLevel: 85 },
    { name: "React Js", icon: <DiReact />, skillLevel: 90 },
    { name: "Typescript", icon: <SiTypescript />, skillLevel: 80 },
    { name: "Node Js", icon: <DiNodejs />, skillLevel: 75 },
    { name: "Next Js", icon: <SiNextdotjs />, skillLevel: 88 },
    { name: "TailwindCSS", icon: <SiTailwindcss />, skillLevel: 95 },
    { name: "MongoDB", icon: <SiMongodb />, skillLevel: 82 }, 
    { name: "Express", icon: <SiExpress />, skillLevel: 80 },
    { name: "Python", icon: <DiPython />, skillLevel: 70 },
    { name: "PHP", icon: <SiPhp />, skillLevel: 75 },         
    { name: "C++", icon: <SiCplusplus />, skillLevel: 65 },
    { name: "Java", icon: <DiJava />, skillLevel: 75 },       
];

export default function SkillSection() {
    return (
        <section id="skills" className="py-20 bg-slate-950/50">
            <Header title="My Skills" />
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12">
                    {skills.map((skill, index) => (
                        /* Wrap in a div to ensure AOS triggers correctly */
                        <div 
                            key={index} 
                            data-aos="flip-right" 
                            /* Dynamic delay: 0ms, 100ms, 200ms, etc. */
                            data-aos-delay={index * 80} 
                        >
                            <SkillCard 
                                name={skill.name}
                                icon={skill.icon}
                                skillLevel={skill.skillLevel}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}