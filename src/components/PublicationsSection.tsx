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
        className="glass rounded-xl p-8 text-center"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Clock size={20} className="text-primary" />
        </div>
        <p className="text-sm font-mono uppercase tracking-wider text-primary mb-2">
          Upcoming
        </p>
        <h3 className="text-lg font-semibold text-foreground">
          Will submit to BMVC&apos;26
        </h3>
      </motion.div>
    </div>
  </section>
);

export default PublicationsSection;
