import { motion } from "framer-motion";
import { Play, ArrowRight, BarChart3, Users, Navigation, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const DashboardMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
    className="relative mx-auto max-w-5xl mt-16"
  >
    <div className="absolute -inset-4 rounded-2xl glow-primary opacity-50 blur-2xl" />
    <div className="relative glass-panel border p-4 md:p-6 rounded-2xl shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-accent/60" />
        <div className="w-3 h-3 rounded-full bg-primary/60" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">appsense.ai/dashboard</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {[
          { label: "Total Events", value: "1.2M", icon: BarChart3, change: "+12%" },
          { label: "Active Users", value: "48.2K", icon: Users, change: "+8%" },
          { label: "Nav Changes", value: "156", icon: Navigation, change: "+24%" },
          { label: "Retention", value: "94.2%", icon: TrendingUp, change: "+3.1%" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="bg-surface-elevated rounded-xl p-4 border"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon size={16} className="text-muted-foreground" />
              <span className="text-xs font-mono text-accent">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2 bg-surface-elevated rounded-xl p-4 border h-40">
          <p className="text-xs font-medium text-muted-foreground mb-3">Feature Usage Over Time</p>
          <div className="flex items-end gap-1 h-24">
            {[40, 55, 35, 70, 60, 80, 45, 90, 75, 85, 65, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                className="flex-1 rounded-sm bg-primary/70"
              />
            ))}
          </div>
        </div>
        <div className="bg-surface-elevated rounded-xl p-4 border">
          <p className="text-xs font-medium text-muted-foreground mb-3">Adaptive Navigation</p>
          {["Orders", "Dashboard", "Settings", "Profile"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="flex items-center justify-between py-1.5 text-sm"
            >
              <span className="text-foreground">{item}</span>
              <span className="text-xs font-mono text-muted-foreground">#{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center section-padding pt-32 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full glow-primary opacity-30 blur-3xl" />
    </div>

    <div className="relative text-center max-w-4xl mx-auto">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border bg-surface-elevated text-muted-foreground mb-6">
          Now in Public Beta
          <span className="ml-2 w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
        </span>
      </motion.div>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[1.05]"
      >
        Apps that understand
        <br />
        <span className="text-gradient-primary">users.</span>
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
      >
        AppSense AI analyzes real user behavior inside your app and automatically optimizes the user
        interface to improve engagement and retention.
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#cta"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
        >
          Start Free <ArrowRight size={16} />
        </a>
        <a
          href="#demo"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border text-foreground font-semibold text-sm hover:bg-muted transition-colors duration-200"
        >
          <Play size={16} /> Watch Demo
        </a>
      </motion.div>
    </div>

    <DashboardMockup />
  </section>
);

export default HeroSection;
