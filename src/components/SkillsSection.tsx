import { motion } from 'framer-motion';
import { FlaskConical, Globe, Sigma, Atom, FlaskRound, Dna } from 'lucide-react';

const academics = [
  {
    title: 'Science',
    icon: <FlaskConical className="w-7 h-7 text-indigo-500" />,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    glow: 'shadow-[0_0_60px_rgba(139,92,246,0.25)]',
    data: [
      { name: 'Mathematics', level: 85, icon: <Sigma size={16} /> },
      { name: 'Physics', level: 80, icon: <Atom size={16} /> },
      { name: 'Chemistry', level: 78, icon: <FlaskRound size={16} /> },
      { name: 'Biology', level: 82, icon: <Dna size={16} /> },
    ],
  },
  {
    title: 'Languages',
    icon: <Globe className="w-7 h-7 text-pink-500" />,
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
    glow: 'shadow-[0_0_60px_rgba(236,72,153,0.25)]',
    data: [
      { name: 'Bahasa Indonesia', level: 88, icon: '🇮🇩' },
      { name: 'English', level: 75, icon: '🇺🇸' },
      { name: 'Arabic', level: 80, icon: '🇸🇦' },
    ],
  },
];

function SkillBar({ skill, gradient }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-gray-800 dark:text-gray-200">
            {skill.name}
          </span>
        </div>
        <span className="text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>

      <div className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${gradient} relative`}
        >
          <div className="absolute inset-0 bg-white/30 blur-sm opacity-40 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden
      bg-gradient-to-b from-white to-gray-50 
      dark:from-[#050816] dark:to-[#050816]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="hidden dark:block absolute inset-0 
        bg-gradient-to-br from-indigo-900/15 via-transparent to-pink-900/15" />

        <div className="hidden dark:block absolute top-[-100px] left-[-100px] 
        w-[240px] h-[240px] bg-indigo-500/10 blur-[140px] rounded-full" />

        <div className="hidden dark:block absolute bottom-[-100px] right-[-100px] 
        w-[240px] h-[240px] bg-pink-500/10 blur-[140px] rounded-full" />

        <div className="dark:hidden absolute inset-0 
        bg-gradient-to-br from-indigo-100 via-white to-pink-100" />

        <div className="dark:hidden absolute top-[-80px] left-[-80px] 
        w-[200px] h-[200px] bg-indigo-200/20 blur-[120px] rounded-full" />

        <div className="dark:hidden absolute bottom-[-80px] right-[-80px] 
        w-[200px] h-[200px] bg-pink-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase 
          text-indigo-600 dark:text-indigo-300 mb-3">
            Academics
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 
          bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
          dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
          bg-clip-text text-transparent">
            Academic Strengths
          </h2>

          {/* 🔥 ANIMATED LINE (SAMA SEPERTI ABOUT & PROJECTS) */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[3px] mx-auto rounded-full 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden"
          >
            {/* ✨ SHIMMER EFFECT */}
            <motion.div
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute inset-0 
              bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed mt-6"
          >
            Developing a strong academic foundation in science while enhancing 
            communication skills through multiple languages, supporting both 
            analytical thinking and global interaction in learning and real-world applications.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {academics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="relative group h-full"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-20 blur-xl group-hover:opacity-40 transition`} />

              <div className="relative p-6 rounded-2xl backdrop-blur-xl 
              bg-white/70 dark:bg-white/5 
              border border-black/5 dark:border-white/10
              overflow-hidden h-full flex flex-col justify-between">

                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ${item.glow}`} />

                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <motion.div 
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="flex justify-center"
                    >
                      {item.icon}
                    </motion.div>

                    <h3 className="font-semibold text-xl text-gray-800 dark:text-white mt-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-4 mt-4">
                    {item.data.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        gradient={item.gradient}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}