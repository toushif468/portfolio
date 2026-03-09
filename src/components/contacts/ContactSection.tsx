"use client";

import { useState } from 'react';
import toast from 'react-hot-toast';
import { 
    FaGithub, 
    FaLinkedin, 
    FaEnvelope, 
    FaMapMarkerAlt, 
    FaPhoneAlt, 
    FaPaperPlane, 
    FaCheckCircle, 
    FaSpinner 
} from "react-icons/fa";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("sending");
        
        const toastId = toast.loading('Sending your message...');
        const formData = new FormData(event.currentTarget);
        
        // Add the timestamp for your 'submittedAt' column
        // formData.append("submittedAt", new Date().toLocaleString());
        formData.append("access_key", "47be8946-62af-46aa-a3bb-2e00ec70a99f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                toast.success('Form submitted successfully!', { id: toastId });
                (event.target as HTMLFormElement).reset(); 
                setMessage("");
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                toast.error('Submission failed. Please try again.', { id: toastId });
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch (error) {
            setStatus("error");
            toast.error('Network error. Check your connection.', { id: toastId });
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section id="contact" className="py-20 lg:py-32 bg-slate-950">
            <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Side: Contact Info */}
                <div className="space-y-8" data-aos="fade-right">
                    <div>
                        <h2 className="py-3 text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400">
                            Ready to collaborate?
                        </h2>
                        <p className="text-gray-400 text-lg mt-4 max-w-md">
                            I'm currently available for freelance work. Let's build something amazing.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                                <a href="mailto:tmhasan283@gmail.com" className="text-gray-200 font-semibold hover:text-indigo-400 transition-colors underline decoration-indigo-500/30">
                                    tmhasan283@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Location</p>
                                <p className="text-gray-200 font-semibold">Dhaka, Bangladesh</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <FaPhoneAlt size={18} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Phone</p>
                                <a href="tel:+8801301729107" className="text-gray-200 font-semibold hover:text-indigo-400 transition-colors">
                                    +880 1301-729107
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a href="https://github.com/toushif468" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-600 transition-all shadow-lg">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/toushif-muktashid-hasan-1891b720a/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-600 transition-all shadow-lg">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden group" data-aos="zoom-in">
                    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        {/* Web3Forms Formatting Helpers */}
                        <input type="hidden" name="from_name" value="Portfolio Contact Bot" />
                        {/* <input type="hidden" name="subject" value="New Submission via Portfolio" /> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Name</label>
                                <input name="Name" type="text" required placeholder="Your Name" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Subject</label>
                                <input name="Subject" type="text" required placeholder="Project Inquiry" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Email</label>
                            <input name="email" type="email" required placeholder="email@example.com" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm text-gray-400 ml-1">Message</label>
                                <span className={`text-xs ${message.length > 1400 ? 'text-orange-400' : 'text-gray-500'}`}>
                                    {message.length} / 1500 chars (approx 250 words)
                                </span>
                            </div>
                            <textarea 
                                name="Message" 
                                required 
                                rows={7} 
                                maxLength={1500}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="How can I help you?" 
                                className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === "sending" || status === "success"}
                            className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer
                                ${status === "success" ? "bg-green-600 shadow-green-500/20" : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20"}
                                ${status === "sending" ? "opacity-80 cursor-not-allowed" : "active:scale-95"}
                                text-white
                            `}
                        >
                            {status === "idle" && (
                                <>
                                    <FaPaperPlane className="text-sm" />
                                    <span>Send Message</span>
                                </>
                            )}
                            {status === "sending" && (
                                <>
                                    <FaSpinner className="animate-spin text-lg" />
                                    <span>Sending...</span>
                                </>
                            )}
                            {status === "success" && (
                                <>
                                    <FaCheckCircle className="text-lg" />
                                    <span>Message Sent!</span>
                                </>
                            )}
                            {status === "error" && <span>Something went wrong</span>}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}