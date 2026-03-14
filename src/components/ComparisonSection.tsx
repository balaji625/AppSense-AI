import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const rows = [
  { feature: "Analytics Type", old: "Charts only", new: "AI insights" },
  { feature: "UX Improvements", old: "Manual", new: "Automatic optimization" },
  { feature: "Speed", old: "Slow experimentation", new: "Real-time UX adaptation" },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Comparison</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Why AppSense AI
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="border rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 text-sm font-semibold">
            <div className="p-4 bg-muted text-muted-foreground" />
            <div className="p-4 bg-muted text-muted-foreground text-center">Traditional Analytics</div>
            <div className="p-4 bg-primary text-primary-foreground text-center">AppSense AI</div>
          </div>
          {rows.map((row) => (
            <div key={row.feature} className="grid grid-cols-3 text-sm border-t">
              <div className="p-4 font-medium text-foreground">{row.feature}</div>
              <div className="p-4 text-center text-muted-foreground flex items-center justify-center gap-2">
                <X size={14} className="text-destructive" /> {row.old}
              </div>
              <div className="p-4 text-center text-foreground flex items-center justify-center gap-2">
                <Check size={14} className="text-accent" /> {row.new}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
