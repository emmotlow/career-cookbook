import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'Off Menu', href: '/off-menu', isPage: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const linkClass =
    `font-sans text-xs tracking-extra-wide uppercase transition-colors duration-300 hover:text-terracotta ${
      scrolled ? 'text-charcoal/60' : 'text-cream/70'
    }`;

  const renderLink = (link: typeof navLinks[number], options?: { onClick?: () => void; mobile?: boolean }) => {
    const cls = options?.mobile
      ? 'font-sans text-sm tracking-extra-wide uppercase text-cream/80 hover:text-terracotta transition-colors duration-300'
      : linkClass;

    if (link.isPage) {
      return (
        <Link to={link.href} className={cls} onClick={options?.onClick}>
          {link.label}
        </Link>
      );
    }
    if (!isHome) {
      return (
        <Link to={`/${link.href}`} className={cls} onClick={options?.onClick}>
          {link.label}
        </Link>
      );
    }
    return (
      <a href={link.href} className={cls} onClick={options?.onClick}>
        {link.label}
      </a>
    );
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF9F6] border-b border-charcoal/[0.06]'
            : 'bg-transparent'
        }`}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
      >
        <nav className="section-container flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link
            to="/"
            className={`font-display text-lg font-bold tracking-wide transition-colors duration-500 ${
              scrolled ? 'text-charcoal' : 'text-cream'
            }`}
          >
            <span className="text-terracotta">Career Cookbook</span>{' '}
            <span className="hidden sm:inline italic font-normal">by Erin Motlow</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                {renderLink(link, {})}
              </li>
            ))}
            <li>
              <a
                href="mailto:erinmotlow@gmail.com"
                className="font-sans text-xs tracking-extra-wide uppercase bg-terracotta text-cream px-5 py-2 rounded-sm hover:bg-terracotta-dark transition-colors duration-300"
              >
                Let&apos;s Cook
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`absolute h-px w-5 transition-all duration-300 ${
                mobileOpen ? 'bg-charcoal' : scrolled ? 'bg-charcoal' : 'bg-cream'
              } ${mobileOpen ? 'rotate-45' : '-translate-y-1.5'}`}
            />
            <span
              className={`absolute h-px w-5 transition-all duration-300 ${
                mobileOpen ? 'bg-charcoal' : scrolled ? 'bg-charcoal' : 'bg-cream'
              } ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute h-px w-5 transition-all duration-300 ${
                mobileOpen ? 'bg-charcoal' : scrolled ? 'bg-charcoal' : 'bg-cream'
              } ${mobileOpen ? '-rotate-45' : 'translate-y-1.5'}`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-md flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav>
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  {renderLink(link, { onClick: handleLinkClick, mobile: true })}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.08 }}
              >
                <a
                  href="mailto:erinmotlow@gmail.com"
                  className="inline-block font-sans text-sm tracking-extra-wide uppercase bg-terracotta text-cream px-6 py-3 rounded-sm hover:bg-terracotta-dark transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Let&apos;s Cook
                </a>
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      )}
    </>
  );
}
