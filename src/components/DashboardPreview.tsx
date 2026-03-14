import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Users, Star, Lightbulb, Navigation } from "lucide-react";

const stats = [
  { label: "Total Events", value: "2.4M", icon: Activity },
  { label: "User Sessions", value: "86.3K", icon: Users },
  { label: "Most Used", value: "Orders", icon: Star },
  { label: "UX Insights", value: "23", icon: Lightbulb },
];

const navOrder = [
  { name: "Orders", score: 94 },
  { name: "Dashboard", score: 87 },
  { name: "Analytics", score: 72 },
  { name: "Settings", score: 45 },
  { name: "Profile", score: 31 },
];

const DashboardPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Dashboard</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Your command center
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="border rounded-2xl bg-card p-6 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-surface-elevated border">
                <s.icon size={16} className="text-muted-foreground mb-2" />
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-elevated border">
              <div className="flex items-center gap-2 mb-4">
                <Navigation size={14} className="text-primary" />
                <p className="text-sm font-medium text-foreground">Recommended Navigation Order</p>
              </div>
              {navOrder.map((item, i) => (
                <div key={item.name} className="flex items-center justify-between py-2 border-b last:border-0 border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground w-5">#{i + 1}</span>
                    <span className="text-sm text-foreground">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.score}%` } : {}}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                      />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{item.score}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border">
              <p className="text-sm font-medium text-foreground mb-4">UX Insights</p>
              {[
                { text: "Users navigate to Orders 3x more than Settings", type: "info" },
                { text: "Profile page has 40% bounce rate", type: "warning" },
                { text: "Search feature usage increased 22% after repositioning", type: "success" },
              ].map((insight) => (
                <div key={insight.text} className="flex items-start gap-3 py-2 border-b last:border-0 border-border/50">
                  <span className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                    insight.type === "success" ? "bg-accent" : insight.type === "warning" ? "bg-destructive" : "bg-primary"
                  }`} />
                  <p className="text-sm text-muted-foreground">{insight.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
