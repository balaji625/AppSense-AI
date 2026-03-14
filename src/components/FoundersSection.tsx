import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

const founders = [
  {
    name: "Bathala Balaji",
    role: "Co-Founder",
    desc: "Technology enthusiast focused on building intelligent software systems. Balaji leads product development and is passionate about AI-driven platforms that help developers build smarter applications.",
    initials: "BB",
  },
  {
    name: "Kondreddy Vijaya",
    role: "Co-Founder",
    desc: "Co-founder focused on product vision and growth strategy. Vijaya works on shaping the platform to help developers understand user behavior and improve app experiences.",
    initials: "KV",
  },
];

const FoundersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founders" className="section-padding bg-surface-elevated" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Founders</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            The people building AppSense AI.
          </h2>
          <p className="mt-4 text-muted-foreground">Building the future of intelligent user experiences.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="group p-8 rounded-2xl border bg-card hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xl font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {f.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{f.name}</h3>
                  <p className="text-sm font-mono text-primary">{f.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{f.desc}</p>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[Linkedin, Github, Twitter].map((Icon, idx) => (
                  <button key={idx} className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Icon size={16} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
