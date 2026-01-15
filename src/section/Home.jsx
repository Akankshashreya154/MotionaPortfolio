import { useMemo, useState, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import avatar from "../assets/avatar.png";

const social = [
  { Icon: FaXTwitter, label: "X", href: "" },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akanksha-shreya-9966741b3",
  },
  {
    Icon: FaGithub,
    label: "Github",
    href: "https://github.com/Akankshashreya154",
  },
];

const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 20px rgba(255,255,255,0.6))",
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 20px rgba(16,185,129,0.8))",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  tap: {
    scale: 0.95,
    y: 0,
  },
};

export default function Home() {
  const roles = useMemo(
    () => [
      "Web Developer",
      "Frontend Developer",
      "React Developer",
      "Full Stack Developer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground />

      {/* Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bfff] to-[#1cd8d2] opacity-30 md:opacity-10 blur-[100px] md:blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bfff] to-[#1cd8d2] opacity-30 md:opacity-10 blur-[100px] md:blur-[150px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Hi, I’m Akanksha
            </h1>

            <p className="mt-4 text-xl text-pink-400">
              {roles[index].substring(0, subIndex)}
              <span className="animate-pulse">|</span>
            </p>

            <motion.h1
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello I'm
              <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Akanksha Shreya
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I turn complex ideas into seamless, high-impact web experiences —
              building modern, scalable and lightning-fast applications that make
              a difference.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>

              {/* ✅ FIXED RESUME LINK */}
              <a
                href="/Resume1.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-lg text-white border border-white/30 hover:bg-white/10 transition-all"
              >
                My Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {social.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-end w-full h-full">
          <motion.img
            src={avatar}
            alt="Akanksha Shreya"
            className="w-full max-w-md"
            style={{ width: "min(45vw, 780px)", maxHeight: "90vh" }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}
