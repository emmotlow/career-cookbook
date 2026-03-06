import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [colophonOpen, setColophonOpen] = useState(false);
  const colophonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (colophonRef.current && !colophonRef.current.contains(e.target as Node)) {
        setColophonOpen(false);
      }
    }
    if (colophonOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [colophonOpen]);

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="section-container">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sage font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Let&apos;s Cook
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal mb-6 leading-[1.05]">
            Ready to Cook Something{' '}
            <span className="italic font-normal text-terracotta">Together?</span>
          </h2>
          <p className="text-charcoal/60 leading-relaxed text-lg mb-10">
            Whether you&apos;re navigating an inflection point, designing a
            transformation moment, or building something that doesn&apos;t exist yet
            &mdash; let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:erinmotlow@gmail.com"
              className="inline-block bg-terracotta text-cream px-8 py-4 rounded-sm font-sans font-semibold text-sm tracking-wider uppercase hover:bg-terracotta-dark transition-colors duration-300"
            >
              Let&apos;s Cook
            </a>
            <a
              href="https://linkedin.com/in/erinmotlow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-charcoal/20 text-charcoal px-8 py-4 rounded-sm font-sans font-semibold text-sm tracking-wider uppercase hover:border-terracotta hover:text-terracotta transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>

          <blockquote className="mt-16 text-lg font-serif italic text-charcoal/50 max-w-xl mx-auto leading-relaxed">
            &ldquo;I see inflection points before they happen, combine the right
            elements at the right time, and create the experience that transforms
            skeptics into champions.&rdquo;
          </blockquote>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-charcoal/10 text-center space-y-2">
          <p className="text-charcoal/40 font-sans text-sm">
            &copy; {new Date().getFullYear()} Erin Motlow. Cooked with care.
          </p>
          <div className="relative inline-block" ref={colophonRef}>
            <button
              onClick={() => setColophonOpen(!colophonOpen)}
              className="text-charcoal/30 font-sans text-xs tracking-wider hover:text-charcoal/50 transition-colors duration-300 cursor-pointer underline underline-offset-2 decoration-charcoal/15 hover:decoration-charcoal/30"
            >
              Colophon ↗
            </button>
            {colophonOpen && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[calc(100vw-3rem)] sm:w-72 bg-cream border border-charcoal/10 shadow-xl rounded-sm p-6 text-left z-50">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-cream" />
                <p className="font-sans text-[10px] tracking-widest uppercase text-charcoal/40 mb-3">
                  Built with
                </p>
                <ul className="space-y-1.5 mb-5">
                  <li className="text-charcoal/70 font-serif text-sm">Claude Code</li>
                  <li className="text-charcoal/70 font-serif text-sm">GitHub</li>
                  <li className="text-charcoal/70 font-serif text-sm">Vercel</li>
                  <li className="text-charcoal/70 font-serif text-sm">Google Gemini</li>
                </ul>
                <p className="font-sans text-[10px] tracking-widest uppercase text-charcoal/40 mb-3">
                  Design inspired by
                </p>
                <ul className="space-y-1.5">
                  <li className="text-charcoal/70 font-serif italic text-sm">Kinfolk</li>
                  <li className="text-charcoal/70 font-serif italic text-sm">Bon App&eacute;tit</li>
                  <li className="text-charcoal/70 font-serif italic text-sm">Salt Fat Acid Heat</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
