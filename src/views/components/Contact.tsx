import React from 'react';

const Contact = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=elmeriotalara@gmail.com&su=Hello%20Elmer&body=Hello%20Elmer,";
    const messengerUrl = "https://m.me/dummyacctv3?text=Say%20Hello";

    return (
        <section id="contact" className="py-20 container mx-auto px-6 text-center max-w-4xl relative">
            <p className="font-mono text-cyan-electric text-lg mb-4">
                04. What's Next?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-silver mb-8 font-sans transition-all duration-300">
                Get In Touch
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                Whether you have a question about my hardware prototypes, software solutions, or just want to say hi, my inbox is always open.
            </p>

            <div className="relative inline-block">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-block font-mono text-cyan-electric border border-cyan-electric px-8 py-4 rounded hover:bg-cyan-electric/10 transition-all duration-300"
                >
                    {isOpen ? 'Close' : 'Say Hello'}
                </button>

                {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-navy-light border border-cyan-electric/20 rounded-lg shadow-2xl p-4 z-50 animate-in fade-in zoom-in duration-200">
                        <div className="flex flex-col gap-3">
                            <a
                                href={messengerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-[#00B2FF]/10 text-[#00B2FF] border border-[#00B2FF]/30 py-3 rounded font-mono text-sm hover:bg-[#00B2FF]/20 transition-all group"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.908 1.457 5.518 3.737 7.238V22l3.352-1.84c.883.245 1.815.38 2.784.38 5.523 0 10-4.145 10-9.258S17.523 2 12 2zm1.18 12.19l-2.545-2.722-4.962 2.722 5.457-5.795 2.618 2.722 4.889-2.722-5.457 5.795z" />
                                </svg>
                                VIA MESSENGER
                            </a>
                            <a
                                href={gmailUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-[#EA4335]/10 text-[#EA4335] border border-[#EA4335]/30 py-3 rounded font-mono text-sm hover:bg-[#EA4335]/20 transition-all group"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                VIA GMAIL
                            </a>
                        </div>
                        <div className="mt-4 pt-3 border-t border-cyan-electric/10 text-[10px] text-slate-500 font-mono italic">
                            Pre-filled message: "Say Hello"
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;
