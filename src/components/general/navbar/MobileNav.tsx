import { LuDownload } from 'react-icons/lu';
import LinkButton from '../LinkButton';
import { navLinks } from './Navbar';
import Link from 'next/link'
import { useEffect } from 'react';

interface MobileNavProps {
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileNav({ navOpen, setNavOpen }: MobileNavProps) {
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [navOpen]);
    const showMobileNav = navOpen ? 'translate-x-0' : 'translate-x-[100%]';
    return (
        <>
            {/* Your mobile menu code here */}
            <div onClick={() => setNavOpen(false)} className={`fixed inset-0 transform right-0 z-50 bg-black backdrop-blur-sm transition-opacity w-full h-screen duration-500 ${showMobileNav} lg:hidden ${navOpen ? "opacity-100 visible" : "opacity-0 invisible"} `}>
                {/* Menu Content */}
            </div>
            <ul className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[60%] bg-slate-900 border-l border-white/10 flex flex-col items-center justify-center space-y-4 z-[80] transform transition-all duration-500 ease-in-out ${showMobileNav} lg:hidden shadow-2xl`}>
                {
                    navLinks.map((link) => {
                        return (
                            <li key={link.url}>
                                <Link  onClick={()=> setNavOpen(false)} href={link.url} className="flex justify-center items-center text-xl font-medium text-white py-4 px-6 rounded-lg hover:bg-slate-700/50 hover:text-cyan-300 transition-all duration-300 border-b border-slate-700/30 w-full text-center">
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })
                }
                <div className='my-4'>
                    <LinkButton
                        href='/documents/My CV.pdf'
                        text='Download CV'
                        download
                        icon={LuDownload}
                        iconPosition='left' aosType={''} aosDelay={0}                    />
                </div>


            </ul>
        </>
    )
}