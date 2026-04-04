import { DiJavascript, DiReact, DiNodejs, DiPython, DiJava } from "react-icons/di";
import { 
    SiTypescript, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiMongodb, 
    SiExpress, 
    SiPhp, 
    SiCplusplus,
    SiShadcnui,
    SiMysql 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export interface SkillItem {
    id: number;
    name: string;
    icon: React.ReactNode;
    skillLevel: number;
}

export interface SkillData {
    frontend: SkillItem[];
    backend: SkillItem[];
    dataAndMl: SkillItem[];
}

export const skills: SkillData = {
    frontend: [
        { id: 1, name: "Javascript", icon: <DiJavascript />, skillLevel: 85 },
        { id: 2, name: "React Js", icon: <DiReact />, skillLevel: 90 },
        { id: 3, name: "Typescript", icon: <SiTypescript />, skillLevel: 80 },
        { id: 4, name: "Next Js", icon: <SiNextdotjs />, skillLevel: 88 },
        { id: 5, name: "TailwindCSS", icon: <SiTailwindcss />, skillLevel: 95 },
        { id: 13, name: "Shadcn UI", icon: <SiShadcnui />, skillLevel: 90 },
    ],
    backend: [
        { id: 6, name: "Node Js", icon: <DiNodejs />, skillLevel: 75 },
        { id: 7, name: "Express", icon: <SiExpress />, skillLevel: 80 },
        { id: 9, name: "PHP", icon: <SiPhp />, skillLevel: 75 }, 
        { id: 10, name: "Java", icon: <DiJava />, skillLevel: 75 },
        { id: 14, name: "REST API", icon: <TbApi />, skillLevel: 85 },
    ],
    dataAndMl: [
        { id: 8, name: "MongoDB", icon: <SiMongodb />, skillLevel: 82 }, 
        { id: 11, name: "Python", icon: <DiPython />, skillLevel: 70 },
        { id: 15, name: "MySQL", icon: <SiMysql />, skillLevel: 80 },
        { id: 12, name: "C++", icon: <SiCplusplus />, skillLevel: 65 },
    ]
};