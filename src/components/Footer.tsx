import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ameliamunandar', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/amnandarr?igsh=MWRscm41Ym56ZXI1bw==', label: 'Instagram' },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <footer className="relative py-16 overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* DARK */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-[#050816] via-[#040612] to-black" />
        <div className="hidden dark:block absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="hidden dark:block absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] bg-pink-600/20 blur-[120px] rounded-full" />

        {/* LIGHT */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-b from-indigo-100 via-white to-pink-100" />
        <div className="dark:hidden absolute top-[-60px] left-[-60px] w-[220px] h-[220px] bg-indigo-300/30 blur-[80px] rounded-full" />
        <div className="dark:hidden absolute bottom-[-60px] right-[-60px] w-[220px] h-[220px] bg-pink-300/30 blur-[80px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 💎 GLASS CONTAINER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 px-6 py-10"
        >
          {/* ✨ ANIMATED GRADIENT LINE */}
          <motion.div
            variants={itemVariants}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[2px] w-full mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_100%] relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              variants={itemVariants}
              className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left"
            >
              © {currentYear}{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                Amelia Munandar
              </span>{' '}
              — All rights reserved.
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, rotate: 2, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-3 rounded-full bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-0 group-hover:opacity-50 transition duration-500 -z-10" />
                  <social.icon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition duration-500" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-xs text-gray-500 dark:text-gray-500 mt-6 text-center"
          >
            Designed & built with modern web technologies
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}