import { motion } from "framer-motion";

const categories = [
  { label: "Programming", items: ["Python", "C++", "SQL", "R"] },
  { label: "Frameworks", items: ["PyTorch", "TensorFlow", "Keras", "FastAI"] },
  { label: "Computer Vision", items: ["OpenCV", "Rasterio", "SAM", "R-CNN", "YOLO", "Swin Transformer"] },
  { label: "Multimodal & VLM", items: ["CLIP", "ALIGN", "FLAMINGO", "LLaVA"] },
  { label: "Generative & SSL", items: ["GAN", "VAE", "Flow", "Diffusion", "JEPA", "MAML"] },
  { label: "LLM & Tooling", items: ["Hugging Face", "Diffusers", "LangChain", "LlamaIndex", "MLflow"] },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-gradient inline-block"
      >
        Skills
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08, duration: 0.4 }}
            className="glass rounded-xl p-5"
          >
            <h3 className="text-xs font-mono uppercase tracking-wider text-primary mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs rounded-md bg-background/60 text-foreground border border-border/50 hover:border-primary/50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
