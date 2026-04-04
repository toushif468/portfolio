import { DiJavascript, DiReact, DiNodejs, DiPython, DiJava } from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiCplusplus, SiExpress, SiMongodb, SiPhp } from "react-icons/si";
import Header from "../general/Header";
import SkillCard from "./SkillCard";
import { SkillData, SkillItem, skills } from "@/constants/skills";
// const skills = [
//     { name: "Javascript", icon: <DiJavascript />, skillLevel: 85 },
//     { name: "React Js", icon: <DiReact />, skillLevel: 90 },
//     { name: "Typescript", icon: <SiTypescript />, skillLevel: 80 },
//     { name: "Node Js", icon: <DiNodejs />, skillLevel: 75 },
//     { name: "Next Js", icon: <SiNextdotjs />, skillLevel: 88 },
//     { name: "TailwindCSS", icon: <SiTailwindcss />, skillLevel: 95 },
//     { name: "MongoDB", icon: <SiMongodb />, skillLevel: 82 }, 
//     { name: "Express", icon: <SiExpress />, skillLevel: 80 },
//     { name: "Python", icon: <DiPython />, skillLevel: 70 },
//     { name: "PHP", icon: <SiPhp />, skillLevel: 75 },         
//     { name: "C++", icon: <SiCplusplus />, skillLevel: 65 },
//     { name: "Java", icon: <DiJava />, skillLevel: 75 },       
// ];

export default function SkillSection() {
    let globalCounter = 0;
    return (
        // <section id="skills" className="py-20 bg-slate-950/50">
        //     <Header title="My Skills" />
        //     <div className="max-w-6xl mx-auto px-4">
        //         <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12">
        //             {skills.map((skill, index) => (
        //                 /* Wrap in a div to ensure AOS triggers correctly */
        //                 <div 
        //                     key={index} 
        //                     data-aos="flip-right" 
        //                     /* Dynamic delay: 0ms, 100ms, 200ms, etc. */
        //                     data-aos-delay={index * 80} 
        //                 >
        //                     <SkillCard 
        //                         name={skill.name}
        //                         icon={skill.icon}
        //                         skillLevel={skill.skillLevel}
        //                     />
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </section>
        <section className="py-20 bg-slate-950/50">

            <Header title="My Skills" />

            <div className="w-[90%] md:w-[70%] grid md:grid-rows-3 gap-10 px-4 mx-auto">

                {
                    (Object.entries(skills) as [keyof SkillData, SkillItem[]][]).map(([category, skillList]) => (
                        <div key={category} className="border rounded-xl  bg-blue-950/20  border-white/5 ">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold border-b border-indigo-400/30 mb-6 pb-4 text-white">
                                    <span className="w-3 h-3 bg-white rounded-full mr-3">.</span>
                                    {
                                        category === 'frontend' ? 'Frontend' :
                                            category === 'backend' ? 'Backend' :
                                                'Data & ML'
                                    }
                                </h3>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
                                    {
                                        skillList.map((skill) => (
                                            <SkillCard
                                                key={skill.id}
                                                name={skill.name}
                                                icon={skill.icon}
                                                skillLevel={skill.skillLevel}

                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }




            </div>

        </section>
    );
}