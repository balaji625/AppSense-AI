import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";


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
          <a
            href="https://appsense.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            Try the Live Demo <ExternalLink size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mt-12 relative aspect-video rounded-2xl border bg-card overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.youtube.com/embed/hoe-cY2G0-w?si=ZZgtJr7Sjr4EZ45e"
            title="AppSense AI Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
