import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'ACADEMICS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(item.href);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 🔥 PROGRESS BAR (GRADIENT PREMIUM) */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] 
        bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 to-cyan-400"
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`w-full max-w-6xl transition-all duration-500 rounded-2xl px-6 ${
            isScrolled
              ? 'backdrop-blur-2xl bg-white/60 dark:bg-black/50 border border-white/20 shadow-[0_10px_50px_rgba(0,0,0,0.25)]'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-16">

            {/* 🌈 LOGO */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-lg md:text-xl font-bold 
              bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 
              bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              mmell's portfolio
            </motion.a>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-muted-foreground hover:text-white'
                      }`}
                    >
                      {item.label}

                      {/* ✨ HOVER GLOW */}
                      <span className="absolute inset-0 rounded-full 
                      bg-gradient-to-r from-pink-500/10 to-cyan-400/10 
                      opacity-0 hover:opacity-100 transition duration-300" />
                    </button>

                    {/* 🔥 ACTIVE PILL PREMIUM */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full 
                        bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 
                        shadow-[0_0_20px_rgba(168,85,247,0.6)] -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}

              {/* 🌗 THEME */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-white/10 transition"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <Sun />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Moon />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>

            {/* MOBILE */}
            <div className="flex items-center gap-2 md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun /> : <Moon />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl 
            backdrop-blur-2xl bg-gradient-to-br from-white/70 to-white/40 
            dark:from-black/70 dark:to-black/40 
            border border-white/20 shadow-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg font-medium 
                  text-muted-foreground hover:text-white transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}