import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Lightbulb, Layers } from "lucide-react";

const points = [
  { icon: Zap, text: "Detects UX problems automatically" },
  { icon: Lightbulb, text: "Suggests product improvements" },
  { icon: Layers, text: "Adapts the interface based on real usage" },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="section-padding bg-secondary text-secondary-foreground" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">The Solution</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Meet AppSense AI
          </h2>
          <p className="mt-4 text-lg opacity-70 max-w-2xl mx-auto">
            AppSense AI turns raw user behavior into intelligent UX improvements. Instead of just showing analytics, it acts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl border border-border/20 bg-secondary-foreground/5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <p.icon size={20} className="text-primary" />
              </div>
              <p className="text-base font-medium">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
