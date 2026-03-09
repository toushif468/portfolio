"use client"; 

import { useEffect, useState } from 'react';
import { LuDownload, LuMenu } from 'react-icons/lu';
import LinkButton from '../LinkButton';
import Logo from './Logo';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { LuX } from 'react-icons/lu';

export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#services", label: "Services" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#skills", label: "Skills" },
  { url: "#testimonials", label: "Testimonials" },
  { url: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {

    const navHandler = () => {
      if (window.scrollY >= 90) setNavBackground(true);
      if (window.scrollY < 90) setNavBackground(false);
    };

    window.addEventListener("scroll", navHandler);

    return () => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);

  return (
    <nav className={`h-18 fixed z-50 w-full transiton-all duration-300 ${navBackground ? "bg-slate-950/50 border-white/10 shadow-md backdrop-blur-md border-b " : ""}`}>
<div className='flex items-center h-full justify-between w-[90%] mx-auto'>
  <Logo />
  <ul className='hidden lg:flex space-x-10 h-full'>
    {navLinks.map((link) => (
      <li key={link.url}>
        <Link href={link.url} className="text-gray-200 hover:text-cyan-300 font-medium transition-colors duration-300">
          {link.label}
        </Link>
      </li>
    ))}
  </ul>

  {/* button  */}
  <div className='hidden lg:block'>
    <LinkButton
            href='/documents/My CV.pdf'
            text='Download CV'
            download
            icon={LuDownload}
            iconPosition='left' aosType={''} aosDelay={0}    />
  </div>

  <button
    onClick={() => setNavOpen(!navOpen)}
    className="w-8 h-8 cursor-pointer text-white z-50 lg:hidden"
  >
    {navOpen ? <LuX size={30} /> : <LuMenu size={30} />}
  </button>


  <MobileNav navOpen={navOpen} setNavOpen={setNavOpen}/>
</div>
  </nav >
);
};

export default Navbar;

