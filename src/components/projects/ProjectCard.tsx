import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

interface ProjectCardProps {
    image: string
    title: string
    description: string
    tools: string[]
    category: string[]
    gitURL: string
    demoLink?: string
}

export default function ProjectCard({
    image,
    title,
    description,
    tools,
    category,
    gitURL,
    demoLink
}: ProjectCardProps) {
    return (

        <div className="group cursor-pointer mx-auto">


            <div className="relative p-[2px] overflow-hidden rounded-xl bg-blue-950/20 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] group-hover:scale-[1.02]">


                <div
                    className="absolute inset-[-1000%] animate-border-spin group-hover:animate-border-spin-fast bg-[conic-gradient(from_90deg_at_50%_50%,#818cf8_0%,#4338ca_50%,#818cf8_100%)]"
                />

                <div className="relative z-10 rounded-[10px] overflow-hidden bg-blue-950/20 aspect-video">
                    <Image
                        src={image}
                        alt={title}
                        width={900}
                        height={800}
                        className="w-full h-full object-cover rounded-[10px] grayscale-[70%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                </div>
            </div>

            {/* 3. Text Section */}
            <div className="transform transition-transform duration-300 group-hover:translate-x-2 px-2">
                <p className="mt-4 mb-2 text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                    {title}
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed line-clamp-2 mb-5">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 ">
                    <span className="px-2 py-1 bg-slate-950/50 text-indigo-300  border border-indigo-300/20 hover:border-indigo-300/40 text-sm rounded">React</span>
                    <span className="px-2 py-1 bg-slate-950/50 text-indigo-300  border border-indigo-300/20 hover:border-indigo-300/40 text-sm rounded">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-slate-950/50 text-indigo-300  border border-indigo-300/20 hover:border-indigo-300/40 text-sm rounded">Next.js</span>

                </div>
                <div className="flex gap-5">
                    <a href="#" className="text-sm font-medium text-indigo-500 hover:text-indigo-400 transition-colors">
                        <FaGithub className="text-xl" />
                    </a>
                    <a href="#" className="text-sm font-medium text-indigo-500 hover:text-indigo-400 transition-colors">
                        <FiExternalLink className="text-xl" />
                    </a>
                </div>
            </div>

        </div>
    )
}