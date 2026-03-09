"use client"

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        // CLEANUP: Remove the listener when the component unmounts
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        })
    }

    return (
        <>
            {showButton && (
                <button 
                    onClick={scrollToTop} 
                    aria-label="Scroll to top"
                    className="fixed bottom-6 right-6 w-12 h-12 bg-slate-800 hover:bg-indigo-600 text-white rounded-full grid place-items-center cursor-pointer shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 z-50 border border-white/10" 
                >
                    <FaArrowUp />
                </button>
            )}
        </>
    )
}