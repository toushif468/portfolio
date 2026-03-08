import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 lg:py-32 bg-slate-950">
            <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Side: Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="py-3 text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400">
                            Ready to collaborate?
                        </h2>
                        <p className="text-gray-400 text-lg mt-4 max-w-md">
                            I'm currently available for freelance work or full-time positions.
                            If you have a project that needs a sophisticated touch, let's talk.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* EMAIL */}
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

                        {/* LOCATION */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Location</p>
                                <p className="text-gray-200 font-semibold">Dhaka, Bangladesh</p>
                            </div>
                        </div>

                        {/* PHONE NUMBER - Added below Location */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                {/* You'll need to import FaPhoneAlt from react-icons/fa if not already there */}
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

                {/* Right Side: Functional Contact Form */}
                <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* ACTION points to Web3Forms API */}
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5 relative z-10">

                        {/* 1. REPLACE THE VALUE BELOW WITH YOUR ACCESS KEY */}
                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                        {/* 2. OPTIONAL: Customize the email subject */}
                        <input type="hidden" name="subject" value="New Portfolio Message from [Name]" />

                        {/* 3. OPTIONAL: Redirect to a 'Thank You' page after success */}
                        {/* <input type="hidden" name="redirect" value="https://yourwebsite.com/thanks" /> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Name</label>
                                <input name="name" type="text" required placeholder="Your Name" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Email</label>
                                <input name="email" type="email" required placeholder="email@example.com" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Message</label>
                            <textarea name="message" required rows={9} placeholder="How can I help you?" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
                        </div>

                        {/* Honeypot to prevent Spam (Invisible to users) */}
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-95 cursor-pointer">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}