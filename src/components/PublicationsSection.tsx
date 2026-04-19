import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const PublicationsSection = () => (
  <section id="publications" className="section-padding">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-gradient inline-block"
      >
        Publications
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl p-8"
      >
        <div className="flex items-start gap-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 shrink-0">
            <Clock size={20} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
              Upcoming · Submitting to BMVC 2026
            </p>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 leading-snug">
              Dual Patch-to-Pixel Prompt Learning in HSI Cross-Scene Generalization
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A dual-branch prompt learning framework integrating patch-level (CLIP) and pixel-level (SAM) representations with FiLM-based cross-scale alignment, Self-Prompt Guided LoRA (PG-LoRA), Hierarchical Orthogonality Regularizer (HOR), and gated Product-of-Experts fusion for hyperspectral cross-scene classification.
            </p>
          </div>
        </div></motion.div>
    </div>
  </section>
);

export default PublicationsSection;
