import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section id="introduction" className="py-24 md:py-36">
      <div className="section-container">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-px w-12 bg-sage" />
          <p className="text-sage-dark font-sans text-xs tracking-extra-wide uppercase">
            Introduction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Text column — wider */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal mb-10 leading-[1.05]">
              Why{' '}
              <span className="italic text-terracotta">Cooking?</span>
            </h2>
            <div className="space-y-6 text-charcoal/75 leading-[1.8] text-lg max-w-[58ch]">
              <p>
                The best meals aren&apos;t just about following recipes. They&apos;re about
                seeing potential in raw ingredients and architecting the moment where
                everything comes together. That&apos;s what I do in business. I see
                inflection points before they happen, combine the right elements at
                the right time, and create the experience that transforms skeptics
                into champions.
              </p>
              <p>
                This cookbook is my career, told through the language of
                transformation. Each recipe represents a moment where I saw what
                could be, built the experience, and changed the outcome.
              </p>
            </div>
          </motion.div>

          {/* Image + quote column — offset upward for asymmetry */}
          <motion.div
            className="md:col-span-5 md:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/introduction.jpg"
                  alt="Hands working with ingredients"
                  className="w-full h-full object-cover scale-110 origin-top-left"
                  loading="lazy"
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/20 -z-10" />
            </div>

            {/* Pull quote below image */}
            <blockquote className="mt-10 pl-6 border-l-2 border-gold">
              <p className="text-lg font-serif italic text-charcoal/60 leading-relaxed">
                &ldquo;I see inflection points before they happen, combine the right
                elements at the right time, and create the experience that transforms
                skeptics into champions.&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
