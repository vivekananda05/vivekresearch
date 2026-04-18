import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import profileImg from "@/assets/profile.webp";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <ParticleBackground />
    <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
          PhD Candidate · IIT Bombay
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Vivekananda <span className="text-gradient">Giri</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-3">
          Computer Vision & Multimodal Deep Learning
        </p>
        <p className="text-base text-muted-foreground/80 max-w-lg mb-8 leading-relaxed">
          Building multimodal AI systems that align vision, language, and reasoning.
          My research spans vision-language models, prompt learning, domain generalization,
          and prompt-based security and privacy for visual understanding.
        </p>
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <Button asChild size="lg">
            <a href="#research">
              <ArrowDown size={16} className="mr-2" /> View Research
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#">
              <FileText size={16} className="mr-2" /> Download CV
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#contact">
              <Mail size={16} className="mr-2" /> Contact
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 animate-pulse-glow">
          <img src={profileImg} alt="Vivekananda Giri – PhD Candidate at IIT Bombay" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
