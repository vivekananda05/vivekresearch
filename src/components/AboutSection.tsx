import { motion } from "framer-motion";
import {
  GraduationCap,
  Brain,
  Layers,
  Eye,
  Sparkles,
  ShieldCheck,
  Globe2,
  Radar,
  Wand2,
} from "lucide-react";

const interests = [
  { label: "Multimodal AI", icon: Layers },
  { label: "Vision-Language Models", icon: Eye },
  { label: "Prompt Learning", icon: Sparkles },
  { label: "Security & Privacy in Vision", icon: ShieldCheck },
  { label: "Domain Generalization", icon: Globe2 },
  { label: "Hyperspectral Imaging", icon: Radar },
  { label: "Generative Models", icon: Wand2 },
];

const education = [
  { period: "2025 – Present", degree: "PhD", institution: "IIT Bombay", detail: "Computer Vision & Multimodal Deep Learning" },
  { period: "2023 – 2025", degree: "MTech", institution: "IIT Kharagpur", detail: "GPA: 9.36/10" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-gradient inline-block"
      >
        About
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a PhD candidate in the Centre of Studies in Resources Engineering (CSRE) at IIT Bombay,
            advised by{" "}
            <a
              href="https://biplab-banerjee.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Dr. Biplab Banerjee
            </a>
            . My research explores multimodal AI systems that align vision, language, and reasoning.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Previously, I completed my MTech at IIT Kharagpur (GPA 9.36/10), building strong foundations
            in machine learning, deep learning, and scientific computing. My current work centers on
            prompt learning in vision-language models and prompt-based security and privacy for vision
            tasks, advancing trustworthy visual understanding.
          </p>

          <div className="flex items-center gap-2 mb-4">
            <Brain size={18} className="text-primary" />
            <h3 className="font-semibold">Research Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map((t, i) => (
              <motion.span
                key={t}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground border border-border"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Education timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={18} className="text-primary" />
            <h3 className="font-semibold">Education</h3>
          </div>
          <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
            {education.map((e) => (
              <div key={e.degree} className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs font-mono text-primary mb-1">{e.period}</p>
                <h4 className="font-semibold">{e.degree} — {e.institution}</h4>
                <p className="text-sm text-muted-foreground">{e.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
