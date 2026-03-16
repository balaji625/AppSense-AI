import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="relative text-center p-12 md:p-20 rounded-3xl bg-secondary text-secondary-foreground overflow-hidden"
        >
          <div className="absolute inset-0 glow-primary opacity-20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Build apps that improve themselves.
            </h2>
            <p className="mt-4 text-lg opacity-70 max-w-xl mx-auto">
              Join hundreds of teams already using AppSense AI to understand and optimize their user experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
              >
                Start Free <ArrowRight size={16} />
              </a>
              <a
                href="#founders"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-secondary-foreground/20 text-secondary-foreground font-semibold text-sm hover:bg-secondary-foreground/10 transition-colors duration-200"
              >
                <Sparkles size={16} /> Join Early Access
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
