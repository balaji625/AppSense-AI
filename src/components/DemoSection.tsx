import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const DemoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demo" className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Product Demo</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            See AppSense AI in action.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Watch how AppSense detects user behavior patterns and automatically reorganizes navigation to match usage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mt-12 relative aspect-video rounded-2xl border bg-card overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Play size={32} className="text-primary-foreground ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-left">
            <p className="text-xs font-mono text-primary-foreground/60">Demo Flow</p>
            <p className="text-sm text-primary-foreground/80 mt-1">User opens Orders → AI detects pattern → Navigation adapts</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
