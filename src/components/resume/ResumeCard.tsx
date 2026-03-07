import { IconType } from "react-icons"; 

interface ResumeCardProps {
    role: string;
    icon: IconType; 
    date?: string; 
    description: string;
}

export default function ResumeCard({
    role,
    icon: Icon,
    date,           
    description,
}: ResumeCardProps) {
    return (
        <div className="flex items-start space-x-6 bg-blue-950/20 p-4 sm:p-8 rounded-md border border-white/5 hover:bg-blue-950/30 transition-colors">
            {/* Icon Circle */}
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-950 rounded-full grid place-items-center flex-shrink-0">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-200" />
            </div>

            <div className="flex-1">
                  {/* 1. Date  */}
                {date && (
                    <p className="text-indigo-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1">
                        {date}
                    </p>
                )}

                {/* 2. Role Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-gray-100 mb-3">
                    {role}
                </h3>

                {/* 3. Description */}
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {description}
                </p>
            </div>
        </div>
    )
}