import { motion } from 'framer-motion';

export default function AuthorNote() {
  return (
    <section className="py-32 md:py-40 bg-[#FBF8F5]">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-charcoal/20 mx-auto mb-10" />

          <h2 className="text-2xl md:text-3xl font-serif font-medium text-charcoal mb-10">
            A Note from the Author
          </h2>

          <div className="space-y-6 font-serif italic text-charcoal/70 text-lg leading-relaxed">
            <p>
              Every recipe in this cookbook represents a specific moment in time:
              specific market conditions, specific business challenges, specific
              teams, specific constraints. They worked because they made sense
              then, in that kitchen, with those ingredients.
            </p>

            <p>
              But here&apos;s the truth about both cooking and business: context
              is everything.
            </p>

            <p>
              A souffl&eacute; that rises perfectly in one oven might collapse in
              another. A reduction that works with fresh stock might fail with
              yesterday&apos;s leftovers. And a business model that transforms
              one company might be completely wrong for the next.
            </p>

            <p>
              That&apos;s not a weakness of the recipe. It&apos;s the nature of
              the craft.
            </p>

            <p>
              The recipes in this cookbook aren&apos;t formulas to follow blindly.
              They&apos;re frameworks to understand, adapt, and make your own.
              The value isn&apos;t in replicating the exact steps. It&apos;s in
              understanding why each ingredient mattered, when to add heat, and
              how to read the signals that tell you whether something&apos;s
              working.
            </p>

            <p>
              Great cooks don&apos;t just follow recipes. They develop intuition
              through repetition. They learn the fundamentals so well that they
              can improvise when circumstances change. They understand that the
              best dish tomorrow might require completely different ingredients
              than the one that worked yesterday.
            </p>

            <p>
              That&apos;s the foundation this cookbook is meant to convey. The
              transformation that matters most isn&apos;t in this cookbook.
              It&apos;s the one your business needs right now.
            </p>
          </div>

          <p className="mt-10 text-charcoal/50 font-serif text-base">
            &mdash; Erin
          </p>

          <div className="w-12 h-px bg-charcoal/20 mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
