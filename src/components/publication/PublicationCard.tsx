import { FaBook } from "react-icons/fa";
import Image from 'next/image';
import { FiExternalLink } from "react-icons/fi";
interface publicationCardProps {
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
}

const PublicationCard = ({ image, title, description, date, link }: publicationCardProps) => {
    return (
        <div className='p-6 rounded-lg transition-all duration-500 bg-blue-950/20 border border-white/5 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:scale-[1.02]'>
            <div className="flex flex-col sm:flex-row items-start gap-4">


                <div className='flex flex-col sm:flex-row items-start w-full gap-5'>

                    <div className="bg-blue-950/30 p-4 rounded-full text-white shrink-0 hidden sm:block">
                        <FaBook />
                    </div>


                    <div className='h-44 w-full sm:w-72 rounded-md overflow-hidden shrink-0'>
                        <div className="relative w-full h-full p-[2px] overflow-hidden rounded-xl bg-slate-900">

                            <div
                                className="absolute inset-[-1000%] animate-border-spin group-hover:animate-border-spin-fast bg-[conic-gradient(from_90deg_at_50%_50%,#818cf8_0%,#4338ca_50%,#818cf8_100%)]"
                            />
                            <Image
                                src={image}
                                alt={title}
                                height={800}
                                width={900}
                                className='w-full h-full object-cover rounded-[10px] grayscale-[70%] hover:grayscale-0 hover:scale-110 transition-all duration-700'
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between w-full h-full sm:h-44 py-1">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">
                                {title}
                            </h3>
                            <p className="text-gray-300 mb-2">
                                {description}
                            </p>
                        </div>


                        <div className="flex justify-between items-center mt-auto pt-4">
                            <p className='text-gray-400 text-base m-0'>
                                {date}
                            </p>
                            <a href={link} className="text-sm font-medium text-indigo-500 hover:text-indigo-400 transition-colors">
                                <div className="flex items-center justify-end gap-1.5">
                                    <p>Read Publication</p>
                                    <FiExternalLink className="text-xl" />
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default PublicationCard;