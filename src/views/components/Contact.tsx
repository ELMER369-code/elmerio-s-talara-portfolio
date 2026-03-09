import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 container mx-auto px-6 text-center max-w-4xl">
            <p className="font-mono text-cyan-electric text-lg mb-4">
                04. What's Next?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-silver mb-8 font-sans">
                Get In Touch
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                Whether you have a question about my hardware prototypes, software solutions, or just want to say hi, my inbox is always open.
            </p>

            <a
                href="mailto:elmeriotalara@gmail.com"
                className="inline-block font-mono text-cyan-electric border border-cyan-electric px-8 py-4 rounded hover:bg-cyan-electric/10 transition-all duration-300"
            >
                Say Hello
            </a>
        </section>
    );
};

export default Contact;
