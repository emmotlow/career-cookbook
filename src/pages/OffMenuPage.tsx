import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

export default function OffMenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-terracotta overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta to-terracotta-dark" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-cream/40" />
              <p className="text-cream/60 font-sans text-xs tracking-extra-wide uppercase">
                Off Menu
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-6 leading-[1.05] max-w-2xl">
              When the Dish Doesn&apos;t{' '}
              <span className="italic font-normal text-cream/70">Turn Out</span>
            </h1>
            <p className="text-cream/50 max-w-xl leading-relaxed font-serif italic text-lg">
              &ldquo;The best cooks aren&apos;t the ones who never fail.
              They&apos;re the ones who keep cooking anyway.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story content */}
      <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-[#1E1E1E]" />
        <div className="section-container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Opening */}
            <div className="mb-12">
              <p className="text-cream/90 text-lg leading-relaxed mb-6">
                Every cookbook shows you the beautiful final dish. The perfectly plated
                moment. The five-star review.
              </p>
              <p className="text-cream/90 text-lg leading-relaxed mb-6">
                But here&apos;s what they don&apos;t show: the collapsed souffl&eacute;. The
                burnt reduction. The dish you were so excited about that
                just... didn&apos;t work.
              </p>
              <p className="text-cream/90 text-lg leading-relaxed mb-6">
                Great cooks aren&apos;t great because they never fail. They&apos;re great
                because they&apos;re willing to try what they&apos;ve never done before, learn
                from what goes wrong, and keep cooking.
              </p>
              <p className="text-cream font-serif italic text-xl">
                This is the story of my hardest cook.
              </p>
            </div>

            <div className="w-16 h-px bg-cream/30 mx-auto mb-12" />

            {/* The Opportunity */}
            <div className="mb-10">
              <h3 className="text-xl font-sans font-bold text-cream mb-4">
                The Opportunity
              </h3>
              <div className="space-y-4 text-cream/80 leading-relaxed">
                <p>
                  After six years at Wizeline architecting enterprise sales
                  transformations, an opportunity landed in my lap that I couldn&apos;t
                  resist: a friend traveling in Fiji for real estate development visited
                  a spa, met the owner and founder of a local skincare brand, and
                  learned she was looking for a global distributor.
                </p>
                <p>
                  I&apos;d always loved skincare. As a little girl, I&apos;d mix products and
                  try to sell them (my version of the lemonade stand). I&apos;d watched the
                  rise of D2C businesses and the allure of &ldquo;making money while you
                  sleep.&rdquo; And after years in software, I was excited by something{' '}
                  <em>tangible</em>. You can&apos;t touch code.
                </p>
                <p>
                  So I incorporated a business, became CEO and managing partner,
                  invested my own money, and brought in key partners. The distribution
                  agreement was executed in late 2018 and the team got to work.
                </p>
              </div>
            </div>

            {/* The Plan */}
            <div className="mb-10">
              <h3 className="text-xl font-sans font-bold text-cream mb-4">
                The Plan
              </h3>
              <div className="space-y-4 text-cream/80 leading-relaxed">
                <p>
                  The manufacturer agreed to participate in a rebrand before launching
                  in the U.S. market. Simultaneously, we got our storefront up on
                  Amazon to sell the original products and learn what we could.
                </p>
                <p>
                  December 1, 2019: Owned e-commerce site was live
                </p>
                <p>
                  December 4, 2019: Press release announcing the official launch in the
                  U.S.
                </p>
                <p>
                  February 2020: Content shoot on location in Fiji to ramp up
                  advertising campaigns upon return
                </p>
                <p>
                  March 2020: Two days post trip, San Francisco went into lockdown.
                  Fiji, being an island nation, locked down around the same time
                </p>
                <p>
                  With limited inventory in the States and an uncertain world, I made
                  the hard decision to reduce down to bare-bones operations and ride it
                  out.
                </p>
              </div>
            </div>

            {/* Pivot Attempts */}
            <div className="mb-10">
              <h3 className="text-xl font-sans font-bold text-cream mb-4">
                The Pivot Attempts
              </h3>
              <div className="space-y-4 text-cream/80 leading-relaxed">
                <p>Over the next two years, I tried everything to make it work:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-cream/50 flex-shrink-0">&bull;</span>
                    Partnerships with influencers and aestheticians
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cream/50 flex-shrink-0">&bull;</span>
                    Retail distribution routes to engage with customers in person
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cream/50 flex-shrink-0">&bull;</span>
                    Renegotiating our agreement with the manufacturer in Fiji
                  </li>
                </ul>
                <p>
                  I explored every avenue. But eventually I had to accept reality and
                  exited through sale in early 2023.
                </p>
              </div>
            </div>

            {/* What It Taught Me */}
            <div className="mb-10">
              <h3 className="text-xl font-sans font-bold text-cream mb-4">
                What It Taught Me
              </h3>
              <div className="space-y-4 text-cream/80 leading-relaxed">
                <p>
                  <strong className="text-cream">
                    Before Nama Fiji, I understood ownership in principle.
                  </strong>{' '}
                  It was a powerful leadership tool for rallying teams toward ambitious
                  goals.
                </p>
                <p>
                  <strong className="text-cream">
                    After Nama Fiji, I understood ownership in reality.
                  </strong>{' '}
                  When it failed, there was no one else to blame but myself. No market
                  conditions excuse. No passing the buck to a co-founder or a board. It
                  was mine. All of it.
                </p>
                <p>
                  That taught me the distinction between{' '}
                  <strong className="text-cream">accountability</strong> (ownership of
                  results and failures) and{' '}
                  <strong className="text-cream">responsibility</strong> (duty to
                  perform a task, action, or obligation). Most people understand the
                  latter. Very few truly internalize the former.
                </p>
                <p>
                  <strong className="text-cream">
                    Channel learnings into your next act.
                  </strong>{' '}
                  Failure is only a setback if you let it be. The real test is whether
                  you can take what you learned and apply it to what comes next. Nama
                  Fiji didn&apos;t work, but the lessons I learned there made me better at
                  everything that followed.
                </p>
              </div>
            </div>

            {/* Why It Makes Me Better */}
            <div className="mb-10">
              <h3 className="text-xl font-sans font-bold text-cream mb-4">
                Why It Makes Me Better
              </h3>
              <div className="space-y-4 text-cream/80 leading-relaxed">
                <p>
                  I am a better leader and a better team player. I know what it feels
                  like to lose your own money. To care deeply about people whose
                  livelihoods depend on you getting it right.
                </p>
                <p>
                  I&apos;m a more calculated risk taker. I am still willing to take
                  chances, but only after weighing the probability of success against
                  the likelihood of failure.
                </p>
                <p>
                  And I&apos;m more resilient. Not in the motivational poster sense, but
                  in the &ldquo;I&apos;ve already lived through real business hardship.
                  Everything else is just another pivot&rdquo; sense.
                </p>
                <p>
                  Now when I walk into a Fortune 500 executive meeting, or design a POC
                  for a skeptical CTO, or architect a new business model for a startup,
                  I bring something most operators and sellers don&apos;t:
                </p>
              </div>
            </div>

            <div className="mb-10">
              <div className="space-y-4 text-cream/80 leading-relaxed">
                <p className="text-cream text-lg font-serif">
                  I&apos;ve risked my own money. I&apos;ve built something from zero in a
                  category I&apos;d never worked in. I&apos;ve navigated supply chains across
                  continents, launched during a global pandemic, and lived through it
                  not working out.
                </p>
              </div>
            </div>

            <div className="w-16 h-px bg-cream/20 mx-auto mb-12" />

            {/* Would I / Do I */}
            <div className="text-center mb-12 space-y-4">
              <p className="text-cream font-sans font-bold">
                Would I do it again?{' '}
                <span className="font-serif italic font-normal text-cream/80">
                  Absolutely.
                </span>
              </p>
              <p className="text-cream font-sans font-bold">
                Would I do it differently?{' '}
                <span className="font-serif italic font-normal text-cream/80">
                  Of course.
                </span>
              </p>
              <p className="text-cream font-sans font-bold">
                Do I regret it?{' '}
                <span className="font-serif italic font-normal text-cream/80">
                  Not for a second.
                </span>
              </p>
            </div>

            <p className="text-cream/90 text-lg text-center font-serif italic mb-16">
              Because the dishes that don&apos;t turn out are the ones that make you a
              chef.
            </p>

            {/* Back to Recipes */}
            <div className="text-center">
              <Link
                to="/"
                className="text-cream font-sans text-sm font-semibold tracking-wider uppercase hover:text-cream/70 transition-colors duration-300"
              >
                &larr; Back to Recipes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
