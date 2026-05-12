import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Minus, Sparkles } from "lucide-react";

type Cell = boolean | string;

const tiers = ["Free", "Pro", "Enterprise"] as const;

const rows: { label: string; values: [Cell, Cell, Cell] }[] = [
  { label: "Monthly events", values: ["10K", "1M", "Unlimited"] },
  { label: "Team seats", values: ["1", "10", "Unlimited"] },
  { label: "AI behavior insights", values: [true, true, true] },
  { label: "Auto UI optimization", values: [false, true, true] },
  { label: "Integrations (Slack, Webhooks)", values: [false, true, true] },
  { label: "Priority support", values: [false, true, true] },
  { label: "SSO / SAML", values: [false, false, true] },
  { label: "Custom data residency", values: [false, false, true] },
  { label: "Dedicated success manager", values: [false, false, true] },
  { label: "SLA & custom contract", values: [false, false, true] },
];

const renderCell = (v: Cell) => {
  if (typeof v === "string") return <span className="text-sm font-semibold text-foreground">{v}</span>;
  return v ? (
    <Check size={18} className="mx-auto text-primary" />
  ) : (
    <Minus size={18} className="mx-auto text-muted-foreground/40" />
  );
};

const PricingComparisonSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing-compare" ref={ref} className="section-padding bg-surface-elevated">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-card text-xs font-mono text-primary uppercase tracking-widest">
            <Sparkles size={12} /> Compare Plans
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Pick the plan that fits your team.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border bg-card overflow-hidden shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-4 bg-muted/40 border-b">
            <div className="p-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">Feature</div>
            {tiers.map((t) => (
              <div
                key={t}
                className={`p-4 text-center text-sm font-bold ${
                  t === "Pro" ? "text-primary bg-primary/5" : "text-foreground"
                }`}
              >
                {t}
                {t === "Pro" && (
                  <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider">
                    Popular
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-4 items-center ${i !== rows.length - 1 ? "border-b" : ""}`}
            >
              <div className="p-4 text-sm text-foreground">{r.label}</div>
              {r.values.map((v, idx) => (
                <div
                  key={idx}
                  className={`p-4 text-center ${tiers[idx] === "Pro" ? "bg-primary/5" : ""}`}
                >
                  {renderCell(v)}
                </div>
              ))}
            </div>
          ))}

          {/* Footer CTAs */}
          <div className="grid grid-cols-4 border-t bg-muted/20">
            <div />
            <div className="p-4 text-center">
              <a href="#contact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Start Free →</a>
            </div>
            <div className="p-4 text-center bg-primary/5">
              <a href="#contact" className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity">Choose Pro →</a>
            </div>
            <div className="p-4 text-center">
              <a href="#enterprise" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Contact Sales →</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingComparisonSection;