import { FaAward } from "react-icons/fa6";
import Image from 'next/image';
const AwardCard = () => {
    return (
        <div className='group p-6 rounded-lg transition-all duration-500 bg-blue-950/20 border border-white/5 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:scale-[1.02]'>

            <div className='flex  '>
                <div className='text-2xl text-indigo-500 p-3 rounded-full '>
                    <FaAward />
                </div>
                <div className=''>
                    <div className='h-56 w-full rounded-lg overflow-hidden mb-4'>
                        <div className="relative w-full h-full p-[2px] overflow-hidden rounded-xl bg-slate-900">
                            <div
                                className="absolute inset-[-1000%] animate-border-spin group-hover:animate-border-spin-fast bg-[conic-gradient(from_90deg_at_50%_50%,#818cf8_0%,#4338ca_50%,#818cf8_100%)]"
                            />
                            <Image
                                src="/Image/micro.jpeg"
                                alt="Award giving ceremony"
                                height={800}
                                width={900}
                                className='w-full h-full object-cover rounded-[10px] grayscale-[70%] hover:grayscale-0 hover:scale-110 transition-all duration-700'
                            />
                        </div>

                    </div>


                    <h3 className='text-xl font-bold text-white mt-4 mb-1'>
                        Award giving ceremony for the best project in the 2023 MicroProject
                    </h3>
                    <p className='text-gray-400 mb-2'>
                        CSE project show
                    </p>
                    <p className='text-gray-400 text-base'>
                        2023
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AwardCard