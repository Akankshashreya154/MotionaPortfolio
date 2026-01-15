import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

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

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black py-10">
      {/* Background ambient gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.25),transparent_70%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_75%,rgba(16,185,129,0.25),transparent_70%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center gap-6"
      >
        {/* Name with gradient glow behind */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#0d58cc]/40 via-cyan-400/40 to-emerald-400/40 rounded-full"></div>

          <h1
            className="relative font-semibold leading-none text-white text-center select-none"
            style={{
              fontSize: "clamp(3rem,5vw,14rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.9,
              padding: "0 3vw",
              whiteSpace: "nowrap",
            }}
          >
            Akanksha Shreya
          </h1>
        </div>

        <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400" />

        <div className="flex gap-5 text-2xl md:text-3xl">
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
              className="text-gray-300 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-300 italic max-w-xl text-center">
          "Make your own way"
        </p>

        <p className="text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Akanksha Shreya. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
