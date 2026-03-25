import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, BookOpen, Puzzle } from "lucide-react";

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive portfolio website built to showcase my projects, skills, and learning journey in web development.",
    tags: ["React", "Tailwind CSS"],
    status: "Completed",
    progress: 100,
    icon: Globe,
    gradient:
      "linear-gradient(135deg, rgba(99,102,241,0.6), rgba(236,72,153,0.6))",
    badgeClass: "bg-purple-500/10 text-purple-600 dark:text-purple-300",
    progressClass: "bg-purple-600",
    glowClass:
      "shadow-[0_0_60px_rgba(99,102,241,0.45),0_0_80px_rgba(236,72,153,0.35)]",
  },
  {
    title: "Web Development Practice Project",
    description:
      "A learning project where I practice building web applications and improve my understanding of frontend and backend development.",
    tags: ["Next.js", "TypeScript"],
    status: "In Progress",
    progress: 60,
    icon: BookOpen,
    gradient:
      "linear-gradient(135deg, rgba(139,92,246,0.6), rgba(59,130,246,0.6))",
    badgeClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300",
    progressClass: "bg-indigo-600",
    glowClass:
      "shadow-[0_0_60px_rgba(139,92,246,0.45),0_0_80px_rgba(59,130,246,0.35)]",
  },
  {
    title: "Future Innovation Project",
    description:
      "A planned project aimed at exploring new technologies and enhancing problem-solving skills through real-world applications.",
    tags: ["Planned"],
    status: "Planned",
    progress: 20,
    icon: Puzzle,
    gradient:
      "linear-gradient(135deg, rgba(236,72,153,0.6), rgba(139,92,246,0.6))",
    badgeClass: "bg-pink-500/10 text-pink-600 dark:text-pink-300",
    progressClass: "bg-pink-600",
    glowClass:
      "shadow-[0_0_60px_rgba(236,72,153,0.45),0_0_80px_rgba(139,92,246,0.35)]",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);

  useEffect(() => {
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden
      bg-gradient-to-b from-white to-gray-50 
      dark:from-[#050816] dark:to-[#050816]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-indigo-900/15 via-transparent to-pink-900/15" />
        <div className="hidden dark:block absolute top-[-100px] left-[-100px] w-[240px] h-[240px] bg-indigo-500/10 blur-[140px] rounded-full" />
        <div className="hidden dark:block absolute bottom-[-100px] right-[-100px] w-[240px] h-[240px] bg-pink-500/10 blur-[140px] rounded-full" />
        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-pink-100" />
        <div className="dark:hidden absolute top-[-80px] left-[-80px] w-[200px] h-[200px] bg-indigo-200/20 blur-[120px] rounded-full" />
        <div className="dark:hidden absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-pink-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-indigo-600 dark:text-indigo-300 mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
            dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
            bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[3px] mx-auto rounded-full 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6 overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A curated selection of projects showcasing my journey in building
            modern, scalable, and user-focused web applications.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center h-[360px]">
          {PROJECTS.map((project, index) => {
            const position =
              (index - activeIndex + PROJECTS.length) % PROJECTS.length;

            let scale = 0.7;
            let opacity = 0.3;
            let translateX = 0;
            let zIndex = 0;
            let rotateY = 0;

            if (position === 0) {
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (position === 1) {
              scale = 0.85;
              opacity = 0.6;
              translateX = 260;
              rotateY = -10;
            } else if (position === PROJECTS.length - 1) {
              scale = 0.85;
              opacity = 0.6;
              translateX = -260;
              rotateY = 10;
            }

            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity,
                  scale,
                  x: translateX,
                  rotateY,
                  y: 0,
                  zIndex,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute w-[280px] will-change-transform"
              >
                <div
                  className={`relative p-6 rounded-2xl backdrop-blur-xl 
                  bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10
                  transition-all duration-500 overflow-hidden
                  ${position === 0 ? project.glowClass : "opacity-60 scale-95"}`}
                >
                  <div
                    className="aspect-[4/3] rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: project.gradient }}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  <div className="flex justify-center mb-2">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${project.badgeClass}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.description}
                  </p>

                  <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1 }}
                      className={`h-full ${project.progressClass}`}
                    />
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}