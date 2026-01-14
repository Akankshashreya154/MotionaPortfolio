import m1 from "../assets/m1.PNG";
import m2 from "../assets/m2.png";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Harik Cherukuri",
    role: "Frontend Developer at Cognizant",
    review:
      "Akanksha is a visionary developer. Her attention to detail and creativity blew us away. Our project was a massive success because of her.",
    image: m1,
  },
  {
    name: "Kumari Anuragini",
    role: "Software Engineer at GlobalData",
    review:
      "Working with Akanksha was an absolute pleasure. She brings design and code together like magic. Highly recommend her!",
    image: w1,
  },
  {
    name: "Milind Poddar",
    role: "Tech Manager at Accenture",
    review:
      "From concept to execution, Akanksha handled everything flawlessly. Her work ethic and innovation are unmatched.",
    image: m2,
  },
  {
    name: "Sonia Yadav",
    role: "Anayst at Sanofi",
    review:
      "Akanksha transformed our outdated platform into something modern and powerful. Her skills are world-class.",
    image: w2,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-black text-white flex flex-col items-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What People Say
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transition duration-500 hover:scale-105 hover:-rotate-1"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
              loading="lazy"
            />

            <p className="text-sm text-white/80 italic mb-4">
              “{t.review}”
            </p>

            <h3 className="font-semibold text-lg">{t.name}</h3>
            <span className="text-sm text-white/60">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
