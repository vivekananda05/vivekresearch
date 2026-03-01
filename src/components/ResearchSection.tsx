import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Language-Guided Hyperspectral Image Classification",
    tag: "Ongoing PhD",
    desc: "Integration of CLIP + SAM for pixel-level segmentation, patch-level classification, prompt learning (CoOp, CoCoOp), domain generalization, and uncertainty quantification.",
    tech: ["CLIP", "SAM", "CoOp", "CoCoOp", "Diffusion"],
  },
  {
    title: "Medical-VLM",
    tag: "Vision-Language",
    desc: "ALIGNVLM convex projection with ViT-Base/16 + DistilGPT2 for chest X-ray report generation on the IU X-ray dataset.",
    tech: ["ViT", "DistilGPT2", "ALIGNVLM"],
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group glass rounded-xl p-6 hover:glow-border transition-all duration-300 flex flex-col"
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary mb-3">{p.tag}</span>
            <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-background/50 text-muted-foreground border border-border/50">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={14} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink size={14} /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
