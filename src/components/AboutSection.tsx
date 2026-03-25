import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Laptop, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(null); // Semua accordion default tertutup

  const stats = [
    { icon: Globe, value: 'Always', label: 'Learning' },
    { icon: Laptop, value: 'Daily', label: 'Practice' }, // Icon lebih menarik
  ];

  const accordionData = [
    {
      title: "My Learning Journey",
      content:
        "I am currently learning web development step by step, starting from the basics and gradually building small projects to improve my skills. I enjoy exploring new ideas, practicing regularly, and understanding how different parts of a website work together. Even though I am still at the learning stage, I stay consistent and motivated to keep growing.",
    },
    {
      title: "My Vision",
      content:
        "My goal is to become a skilled developer by learning consistently and building meaningful projects. I believe that growth comes from practice and real experience, so I continue improving step by step.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden
      bg-gradient-to-b from-white to-gray-50 
      dark:from-[#050816] dark:to-[#050816]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-pink-900/20" />
        <div className="hidden dark:block absolute top-[-100px] left-[-100px] w-[240px] h-[240px] bg-indigo-500/15 blur-[120px] rounded-full" />
        <div className="hidden dark:block absolute bottom-[-100px] right-[-100px] w-[240px] h-[240px] bg-pink-500/15 blur-[120px] rounded-full" />

        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-pink-100" />
        <div className="dark:hidden absolute top-[-80px] left-[-80px] w-[200px] h-[200px] bg-indigo-200/30 blur-[100px] rounded-full" />
        <div className="dark:hidden absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-pink-200/30 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase 
          text-indigo-600 dark:text-indigo-300 mb-3">
            About
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 
          bg-gradient-to-r 
          from-indigo-600 via-purple-600 to-pink-600
          dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
          bg-clip-text text-transparent">
            Get To Know Me
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.6 }}
            className="h-[3px] mx-auto rounded-full 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT (TIDAK DIUBAH ISINYA) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="relative group"
          >

            <div
              className="p-8 rounded-2xl 
              backdrop-blur-xl bg-white/70 dark:bg-white/5 
              border border-black/5 dark:border-white/10
              transition-all duration-500
              group-hover:scale-[1.02]
              group-hover:shadow-[0_0_60px_rgba(139,92,246,0.25)]"
            >

              <h3 className="text-2xl font-bold 
              bg-gradient-to-r 
              from-indigo-600 via-purple-600 to-pink-600
              dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
              bg-clip-text text-transparent
              drop-shadow-[0_2px_6px_rgba(99,102,241,0.25)]
              dark:drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                Hi, I'm Amelia Munandar 
              </h3>

              <p className="mt-4 leading-relaxed 
              text-gray-600 
              dark:text-gray-300">
                I am a student at MAN 1 Banda Aceh who is passionate about web development, 
                especially in creating modern and interactive user interfaces. I enjoy 
                learning new technologies and turning simple ideas into real projects.
              </p>

              <div className="absolute -top-5 -right-5 px-4 py-2 rounded-xl 
              bg-gradient-to-r from-indigo-500 to-pink-500 
              text-white text-xs font-semibold shadow-lg">
                Junior Developer
              </div>

              <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-400">
                "Small steps every day lead to big results."
              </p>
            </div>

            {/* ✨ SIMBOL ANIMASI SPARKLE BESAR */}
            <motion.div
              className="mt-6 text-center text-2xl font-bold
              bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
              bg-clip-text text-transparent tracking-widest"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              °❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold 
              bg-gradient-to-r 
              from-indigo-600 via-purple-600 to-pink-600
              bg-clip-text text-transparent">
              Building My Future
            </h3>

            {/* ACCORDION */}
            <div className="space-y-4">
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl overflow-hidden
                    backdrop-blur-xl bg-white/70 dark:bg-white/5 
                    border border-black/5 dark:border-white/10"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-4"
                    >
                      <span className="font-medium text-gray-800 dark:text-white">
                        {item.title}
                      </span>

                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown className="text-indigo-500" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400"
                        >
                          {item.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* STATS BARU DENGAN ICON LAPTOP */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl text-center 
                  backdrop-blur-xl bg-white/70 dark:bg-white/5 
                  border border-black/5 dark:border-white/10"
                >
                  <stat.icon className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
                  <p className="text-xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}