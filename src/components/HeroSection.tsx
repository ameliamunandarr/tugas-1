import { motion } from 'framer-motion';
import { Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
      bg-[#050816] dark:bg-[#050816]
      bg-gradient-to-b from-white to-gray-50 dark:from-transparent dark:to-transparent"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* DARK */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-pink-900/20" />
        <div className="hidden dark:block absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="hidden dark:block absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] bg-pink-500/20 rounded-full blur-[120px]" />

        {/* LIGHT */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-indigo-200 via-white to-pink-200" />
        <div className="dark:hidden absolute top-[-80px] left-[-80px] w-[240px] h-[240px] bg-indigo-300/40 rounded-full blur-[100px]" />
        <div className="dark:hidden absolute bottom-[-80px] right-[-80px] w-[240px] h-[240px] bg-pink-300/40 rounded-full blur-[100px]" />
      </div>

      {/* 3D */}
      <ThreeScene section={''} />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
      >
        <div className="grid md:grid-cols-2 items-center gap-6 lg:gap-10">

          {/* TEXT */}
          <div className="text-center md:text-left max-w-[520px] order-2 md:order-1 mt-6 md:mt-0">

            <motion.div
              variants={item}
              className="flex items-center justify-center md:justify-start gap-3 mb-6"
            >
              <span className="text-lg text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
                ✩ˊ˗
              </span>

              <span className="text-sm tracking-[0.25em] uppercase text-indigo-500 dark:text-indigo-300">
                Shaping ideas into reality
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r 
              from-indigo-600 via-purple-600 to-pink-600
              dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
              bg-clip-text text-transparent">
                Amelia Munandar
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-xl"
            >
              Building modern and functional web applications while learning 
              and growing as a developer.
            </motion.p>

            <motion.div
              variants={item}
              className="flex items-center gap-4 justify-center md:justify-start flex-wrap"
            >
              <Button
                size="lg"
                onClick={() => scrollTo('#projects')}
                className="relative overflow-hidden rounded-full px-8 
                bg-gradient-to-r from-indigo-600 to-pink-600 
                hover:from-indigo-700 hover:to-pink-700
                text-white shadow-lg group"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              </Button>

              {[ 
                { icon: Github, href: 'https://github.com/ameliamunandarr' },
                { icon: Instagram, href: 'https://www.instagram.com/amnandarr' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-indigo-500/20
                  hover:scale-110 hover:bg-indigo-500/10 transition"
                >
                  <item.icon className="w-5 h-5 text-indigo-500" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div
            variants={item}
            className="flex justify-center md:justify-end md:pr-6 lg:pr-10 order-1 md:order-2"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full 
              bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 
              blur-[80px] opacity-30" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="p-[5px] rounded-full 
                bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 shadow-xl">

                  <img
                    src="/profile.jpg"
                    alt="profile"
                    className="w-[260px] h-[260px] 
                    md:w-[340px] md:h-[340px]
                    lg:w-[380px] lg:h-[380px]
                    object-cover object-top
                    rounded-full 
                    border-[6px] border-white/80 
                    dark:border-[#050816]
                    shadow-2xl"
                  />

                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}