import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Briefcase, Rocket, TrendingUp } from "lucide-react";

const users = [
  { icon: Code, title: "Developers", desc: "Build adaptive UIs without guessing." },
  { icon: Briefcase, title: "Product Managers", desc: "Get actionable UX insights instantly." },
  { icon: Rocket, title: "Startups", desc: "Ship faster with data-driven design." },
  { icon: TrendingUp, title: "Growth Teams", desc: "Optimize retention automatically." },
];

const TargetUsersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Built For</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Built for teams that care about user experience.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {users.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="p-6 rounded-xl border bg-card text-center hover:border-primary/30 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <u.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{u.title}</h3>
              <p className="text-sm text-muted-foreground">{u.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;
