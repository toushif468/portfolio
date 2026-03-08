import Header from "../general/Header";
import { FaQuoteLeft, FaStar } from "react-icons/fa"; // Optional: adding a nice quote icon

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Manager at TechFlow",
        text: "Working with this developer was a game-changer. The E-commerce platform they built is fast, responsive, and increased our conversion rate by 20%.",
        rating: 4.5,
        image: "/testimonials/t1.webp"
    },
    {
        name: "Mark Thompson",
        role: "Editor-in-Chief, Daily News",
        text: "The Newspaper website is pixel-perfect. Performance was our top priority, and they delivered a site that scores 95+ on Lighthouse effortlessly.",
        rating: 3.5,
        image: "/testimonials/t2.webp"
    },
    {
        name: "Alex Williams",
        role: "CTO, StartXYZ",
        text: "Incredible technical depth. They integrated complex payment gateways and real-time inventory systems without a single hitch in the user experience.",
        rating: 4,
        image: "/testimonials/t3.webp"
    },
    {
        name: "Sarah Williams",
        role: "Founder, CreativeStudio",
        text: "Their eye for detail is unmatched. They don't just write code; they build products that look beautiful and function perfectly on every device.",
        rating: 5,
        image: "/testimonials/t4.webp"
    },
    {
        name: "Michael Chen",
        role: "Lead Engineer, DevLink",
        text: "Highly professional and fast. The codebase is clean, well-documented, and the performance optimizations they implemented were world-class.",
        rating: 3,
        image: "/testimonials/t5.webp"
    },
];

export default function TestimonialSection() {
    return (
        <section id="testimonial" className="py-24 px-4 bg-slate-950">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <Header title="Testimonials" />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
                        >
                            <div>
                                <div className="flex items-center mb-4 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar 
                                            key={i} 
                                            className={`w-4 h-4 ${
                                                i < Math.floor(testimonial.rating) 
                                                ? "text-white fill-white" 
                                                : "text-gray-600"
                                            }`} 
                                        />
                                    ))}
                                </div>
                                
                                <FaQuoteLeft className="text-indigo-500 text-2xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <p className="text-gray-400 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shrink-0 shadow-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="text-gray-200 font-bold truncate">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500 truncate">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
