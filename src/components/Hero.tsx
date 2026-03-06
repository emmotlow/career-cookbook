import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0 bg-cream"
        style={{ y: backgroundY }}
      >
        {/* Decorative circles — editorial kitchen motif */}
        <div className="absolute inset-0">
          <div className="absolute top-[15%] left-[8%] w-[280px] h-[280px] border border-sage/[0.07] rounded-full" />
          <div className="absolute bottom-[20%] right-[5%] w-[180px] h-[180px] border border-gold/[0.08] rounded-full" />
          <div className="absolute top-[40%] right-[18%] w-[120px] h-[120px] bg-sage/[0.03] rounded-full" />
          <div className="absolute bottom-[35%] left-[15%] w-[90px] h-[90px] border border-terracotta/[0.06] rounded-full" />
          <div className="absolute top-[10%] right-[35%] w-[200px] h-[200px] border border-gold/[0.04] rounded-full" />
          {/* Horizontal editorial lines */}
          <div className="absolute top-[30%] left-0 right-0 h-px bg-charcoal/[0.03]" />
          <div className="absolute bottom-[25%] left-0 right-0 h-px bg-charcoal/[0.03]" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.h1
          className="text-[2.75rem] sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-charcoal mb-6 leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Transformation
          <br />
          <span className="italic font-normal text-terracotta">Kitchen</span>
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <div className="h-px w-12 bg-gold" />
          <p className="text-sm md:text-base text-charcoal/50 font-sans tracking-wider uppercase">
            Architecting Moments That Change Everything
          </p>
          <div className="h-px w-12 bg-gold" />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-charcoal/45 font-serif italic max-w-xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          Where ingredients become experiences, and experiences change trajectories
        </motion.p>

        <motion.a
          href="#recipes"
          className="group inline-flex items-center gap-3 bg-terracotta text-cream px-10 py-4 font-sans font-semibold text-sm tracking-wider uppercase hover:bg-terracotta-dark transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore the Recipes
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] font-sans tracking-extra-wide uppercase text-charcoal/30">
          Scroll
        </span>
        <div className="w-px h-8 bg-charcoal/20" />
      </motion.div>
    </section>
  );
}
