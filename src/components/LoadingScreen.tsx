import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import planetGif from "../assets/planet.gif"; 

export default function LoadingScreen() {
  const [text, setText] = useState("");
  const fullText = "Preparing your experience...";


  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  
  const planetPositions = [...Array(20)].map(() => {
    let top;
    do {
      top = Math.random() * 100;
    } while (top > 40 && top < 60); 
    return {
      left: Math.random() * 100 + "%",
      top: top + "%",
    };
  });

  return (
    <div className="fixed inset-0 bg-[#050816] z-[9999] overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0">
        {planetPositions.map((pos, i) => (
          <motion.img
            key={i}
            src="/bintang.gif"
            alt="floating planet"
            className="absolute w-12 h-12 opacity-80"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 0],
              y: ["0%", "-50%"],
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 🌠 CENTER CONTENT (SYMBOL + TITLE + TYPING) */}
      <div className="flex flex-col items-center justify-center gap-1 relative z-10">

        {/* CENTER SYMBOL */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          ⋆˚.⭒˚.⋆
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: [0, 1, 0.9, 1],
            scale: [0.95, 1.05, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-3xl font-bold tracking-widest
            bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
            bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
        >
          Initializing Universe
        </motion.h1>

        {/* TYPING TEXT */}
        <p className="text-sm text-gray-400 tracking-widest font-mono">
          {text}
          <span className="animate-pulse">|</span>
        </p>

      </div>
    </div>
  );
}