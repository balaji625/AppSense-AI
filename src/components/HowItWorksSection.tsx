import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Smartphone, Cpu, BarChart3, Layout } from "lucide-react";

const steps = [
  { icon: User, label: "User", desc: "User interacts with your app" },
  { icon: Smartphone, label: "App", desc: "AppSense tracks behavior events" },
  { icon: Cpu, label: "AI Engine", desc: "AI analyzes usage patterns" },
  { icon: Layout, label: "Adaptive UI", desc: "UI automatically adapts" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">How It Works</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Four steps to smarter UX
          </h2>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 h-px bg-primary -translate-y-1/2 z-0"
            initial={{ width: "0%" }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-elevated border flex items-center justify-center mb-4 shadow-sm">
                <step.icon size={24} className="text-primary" />
              </div>
              <span className="font-mono text-xs text-primary mb-1">Step {i + 1}</span>
              <h3 className="font-semibold text-foreground">{step.label}</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-[180px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
