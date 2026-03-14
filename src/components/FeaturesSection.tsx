import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointer, Brain, Lightbulb, Layout, BarChart3 } from "lucide-react";

const features = [
  { icon: MousePointer, title: "User Behavior Tracking", desc: "Track every interaction inside your app.", span: "md:col-span-2" },
  { icon: Brain, title: "AI UX Insights", desc: "Detect usability problems automatically.", span: "" },
  { icon: Lightbulb, title: "Product Recommendations", desc: "Get suggestions to improve engagement.", span: "" },
  { icon: Layout, title: "Adaptive UI", desc: "Automatically optimize navigation and layout.", span: "md:col-span-2" },
  { icon: BarChart3, title: "Developer Dashboard", desc: "Visualize insights in a powerful analytics dashboard.", span: "md:col-span-3" },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Features</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Everything you need
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`group p-6 rounded-xl border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-200 ${f.span}`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
