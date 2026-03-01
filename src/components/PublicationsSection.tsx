import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "Language-Guided Hyperspectral Image Classification Using CLIP and SAM",
    authors: "V. Giri et al.",
    venue: "Under Review",
    year: "2025",
    type: "Journal",
    abstract:
      "A multimodal framework integrating CLIP and SAM for pixel-level segmentation and patch-level classification of hyperspectral images with prompt learning and domain generalization.",
    links: { paper: "#", code: "#" },
  },
  {
    title: "Genetic Programming-Based Feature Engineering for Chromium Recovery Prediction",
    authors: "V. Giri et al.",
    venue: "MTech Thesis, IIT Kharagpur",
    year: "2025",
    type: "Thesis",
    abstract:
      "Ensemble modeling with Lasso, Ridge, and Random Forest enhanced by Genetic Programming-driven feature engineering for industrial chromium recovery optimization.",
    links: { paper: "#" },
  },
];

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

      <div className="flex flex-col gap-6">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-xl p-6 hover:glow-border transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded bg-primary/20 text-primary border border-primary/30">
                    {pub.type}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">{pub.year}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1 text-foreground">{pub.title}</h3>
                <p className="text-xs text-primary/80 mb-2">{pub.authors}</p>
                <p className="text-xs text-muted-foreground italic mb-3">{pub.venue}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{pub.abstract}</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4 pt-4 border-t border-border/30">
              {pub.links.paper && (
                <a href={pub.links.paper} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <FileText size={13} /> Paper
                </a>
              )}
              {pub.links.code && (
                <a href={pub.links.code} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={13} /> Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
