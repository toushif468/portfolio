import Header from '../general/Header'
import { technologies } from '@/constants/technologies'

const TechnologySection = () => {
    const duplicatedTech = [...technologies, ...technologies]
    return (
        <section className="w-[90%] md:w-[70%] mx-auto py-20 bg-slate-950/50">

            <Header title="tools & technologies" />
            <div className='relative flex overflow-hidden group mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]'>

                <div className='flex gap-6 py-4 animate-infinite-scroll group-hover:[animation-play-state:paused]'>

                    {
                        duplicatedTech.map((tech, index) => (
                            <div key={`${tech}-${index}`} className='flex-none  rounded-lg border-primary/20 text-white/80 py-2 px-4 text-sm whitespace-nowrap'>

                                {tech}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TechnologySection