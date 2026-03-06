import { motion } from 'framer-motion';

const philosophies = [
  {
    number: '01',
    title: 'Technical Fluency',
    description:
      'Understanding the science: Why does searing lock in flavor? How does acid balance richness? Knowing the fundamentals lets you improvise.',
  },
  {
    number: '02',
    title: 'Business Judgment',
    description:
      "Reading the room: Who's eating? What's the occasion? What will make this moment memorable? Execution without judgment results in poor taste.",
  },
  {
    number: '03',
    title: 'Revenue Execution',
    description:
      'Perfect timing: When to add heat. When to let it rest. When to serve. The best dish poorly timed is a missed opportunity.',
  },
  {
    number: '04',
    title: 'Entrepreneurial DNA',
    description:
      "Creative risk-taking: What if I combine these flavors? What if I try this technique? Innovation comes from trying what doesn't exist yet.",
  },
];

export default function KitchenPhilosophy() {
  return (
    <section id="philosophy" className="py-28 md:py-36 bg-charcoal text-cream relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 right-0 h-px bg-cream" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-cream" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] border border-cream rounded-full" />
        <div className="absolute bottom-[15%] left-[5%] w-[200px] h-[200px] border border-cream rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold font-sans text-xs tracking-extra-wide uppercase">
              The Full Stack
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.05] max-w-2xl">
            My Kitchen{' '}
            <span className="italic font-normal text-gold">Philosophy</span>
          </h2>
          <p className="text-cream/50 max-w-xl leading-relaxed text-lg">
            Every kitchen runs on a set of principles. These four define how I
            approach every challenge, every opportunity, and every transformation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, index) => (
            <motion.div
              key={item.number}
              className="group relative p-8 border-t border-cream/10 hover:border-gold/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="block text-gold/40 font-display text-5xl font-bold mb-6 transition-colors duration-500 group-hover:text-gold/70">
                {item.number}
              </span>
              <h3 className="text-lg font-sans font-bold mb-4 tracking-wide transition-colors duration-300 group-hover:text-gold">
                {item.title}
              </h3>
              <p className="text-cream/45 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="h-px w-16 bg-gold/30" />
          <p className="text-center text-xl font-serif italic text-cream/50 max-w-lg">
            &ldquo;When these four come together, you don&apos;t just cook &mdash; you
            transform.&rdquo;
          </p>
          <div className="h-px w-16 bg-gold/30" />
        </motion.div>
      </div>
    </section>
  );
}
