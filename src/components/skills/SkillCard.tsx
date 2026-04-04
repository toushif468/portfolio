import { ReactNode } from "react";

interface SkillCardProps {
    name: string;
    icon: ReactNode;
    skillLevel: number;
}

export default function SkillCard({ name, icon, skillLevel }: SkillCardProps) {

    return (
        <div className="bg-slate-900 text-center rounded-3xl flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-indigo-500/20 p-3">
            <div className="text-5xl text-gray-300">
                {icon}
            </div>
            {/* Displaying level as a percentage */}
            <p className="text-xl font-semibold my-2 text-gray-200">{skillLevel}%</p>
            <p className="text-indigo-500 font-semibold">{name}</p>
        </div>
    );
}