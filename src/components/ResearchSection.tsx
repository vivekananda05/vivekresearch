import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const researchProjects = [
  {
    title: "Dual Patch-to-Pixel Prompt Learning in HSI Cross-Scene Generalization",
    tag: "Ongoing",
    venue: "Submitting to BMVC 2026",
    desc: "Developed a dual-branch prompt learning framework for hyperspectral cross-scene classification, integrating patch-level (CLIP) and pixel-level (SAM) representations with cross-scale alignment via FiLM modulation. Proposed Self-Prompt Guided LoRA (PG-LoRA) for dynamic, context-aware adaptation of text encoders, enabling efficient parameter tuning conditioned on learned prompts. Introduced a Hierarchical Orthogonality Regularizer (HOR) to enforce diversity between dual encoders at prompt, weight, and projection levels, improving generalization. Designed a gated Product-of-Experts fusion mechanism to combine multi-branch logits, enhancing classification robustness across varying spectral scenes.",
    tech: ["CLIP", "SAM", "PG-LoRA", "FiLM", "HOR", "PoE Fusion"],
  },
];

const otherProjects = [
  {
    title: "Medical-VLM",
    tag: "Vision-Language",
    desc: "ALIGNVLM convex projection with ViT-Base/16 + DistilGPT2 for chest X-ray report generation on the IU X-ray dataset.",
    tech: ["ViT", "DistilGPT2", "ALIGNVLM"],
    github: "https://github.com/vivekananda05/medical-vlm",
  },
  {
    title: "Multi-task Image Restoration",
    tag: "Computer Vision",
    desc: "DINOv3-Small frozen encoder with LoRA-based fine-tuning for denoising + inpainting via cross-attention shared latent space.",
    tech: ["DINOv3", "LoRA", "Cross-Attention"],
  },
  {
    title: "Few-shot Learning with MAML",
    tag: "Meta-Learning",
    desc: "MobileNetV3-Small backbone for CIFAR-100 → CUB-200-2011 adaptation in 10-way 1-shot setting.",
    tech: ["MAML", "MobileNetV3", "Few-shot"],
  },
  {
    title: "Genetic Programming for Chromium Recovery",
    tag: "MTech Thesis",
    desc: "Feature engineering via Genetic Programming with Lasso, Ridge, Random Forest ensemble modeling and regularization.",
    tech: ["Genetic Programming", "Ensemble", "Ridge"],
  },
  {
    title: "ML Research – Tata Steel R&D",
    tag: "Industry",
    desc: "8-layer CNN autoencoder for microstructural image compression with ResNet/DenseNet skip connections and MATLAB contour overlay validation.",
    tech: ["CNN", "Autoencoder", "ResNet", "DenseNet"],
  },
];

type Project = {
  title: string;
  tag: string;
  venue?: string;
  desc: string;
  tech: string[];
  github?: string;
  link?: string;
};

const ProjectCard = ({ p, i }: { p: Project; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08, duration: 0.5 }}
    className="group glass rounded-xl p-6 hover:glow-border transition-all duration-300 flex flex-col"
  >
    <div className="flex items-center gap-2 flex-wrap mb-3">
      <span className="text-[10px] font-mono uppercase tracking-wider text-primary">{p.tag}</span>
      {p.venue && (
        <span className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-primary to-primary/70 text-primary-foreground shadow-sm">
          {p.venue}
        </span>
      )}
    </div>
    <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
    <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{p.desc}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {p.tech.map((t) => (
        <span
          key={t}
          className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} GitHub repository`} className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={14} />
        </a>
      )}
      {p.link && (
        <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} external link`} className="text-muted-foreground hover:text-primary transition-colors">
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  </motion.div>
);

const ResearchSection = () => (
  <section id="research" className="section-padding bg-secondary/20">
    <div className="container max-w-6xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-gradient inline-block"
      >
        Research & Projects
      </motion.h2>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Research Projects</h3>
        <div className="grid grid-cols-1 gap-6">
          {researchProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Other Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResearchSection;
