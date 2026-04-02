"use client"

import Typewriter from 'typewriter-effect'

const AnimatedIntro = () => {
    return (
        <div data-aos="fade-up" data-aos-delay="400" className="text-lg h-30 px-8 text-center font-medium text-gray-400">I&apos;m a passionate
            <span className='text-indigo-400 font-bold'>
                <Typewriter options={{
                    strings: ['Fullstack Developer',
                        'Nextjs Developer',
                        'React Developer',
                        'Nodejs Developer',
                        'MERN Stack Developer',
                        'Tech Enthusiast',
                        'UI/UX Designer',
                        'Backend Engineer',
                        
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    wrapperClassName: 'InlineBlock py-6',
                }}
                />
            </span>
        </div>

    )
}

export default AnimatedIntro