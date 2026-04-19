import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-secondary/20">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-gradient inline-block"
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl p-8 relative"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 shrink-0">
            <Briefcase size={20} className="text-primary" />
          </div>
          <div>
            <p className="text-xs font-mono text-primary mb-1">Jun 2024 – Nov 2024</p>
            <h3 className="font-semibold text-lg mb-1">ML Research Intern</h3>
            <p className="text-sm text-muted-foreground mb-4">Tata Steel R&D, Jamshedpur</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                Designed and implemented an 8-layer Convolutional Autoencoder from scratch for end-to-end compression and decompression of industrial microstructural images.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                Enhanced reconstruction fidelity through systematic hyperparameter optimization and integration of ResNet and DenseNet skip connections within the encoder–decoder pipeline.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                Validated reconstruction accuracy using MATLAB-based contour overlay analysis, ensuring reliability for downstream industrial deployment.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
