import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, BarChart, Clock } from "lucide-react";

const problems = [
  { icon: Eye, title: "Hard to understand real user behavior", desc: "Users interact in ways you never anticipated. Without deep behavioral insights, you're designing blind." },
  { icon: BarChart, title: "Analytics don't give clear answers", desc: "Dashboards show charts, but translating data into actionable UX improvements requires manual effort." },
  { icon: Clock, title: "UX improvements take weeks", desc: "Manual A/B testing and redesigns slow your iteration cycles, costing you users every day." },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">The Problem</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Developers don't know why users leave their apps.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Most teams rely on analytics dashboards, but insights stay buried in charts. Developers still have to manually interpret the data and redesign the UI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl border bg-card hover:border-primary/30 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
