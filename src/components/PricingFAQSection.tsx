import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CreditCard, Layers, Building2, RefreshCcw, ShieldCheck, Sparkles } from "lucide-react";

const faqs = [
  {
    icon: CreditCard,
    q: "How does billing work?",
    a: "Plans are billed monthly or annually — annual saves ~20%. You can upgrade, downgrade, or cancel anytime from your dashboard. We accept all major cards via secure checkout, and invoices are emailed automatically.",
    accent: "from-sky-500/15 to-blue-500/5",
  },
  {
    icon: Layers,
    q: "What's the difference between Free, Pro, and Enterprise?",
    a: "Free is for solo builders exploring AppSense AI with limited events. Pro unlocks unlimited events, advanced AI insights, integrations, and priority support. Enterprise adds SSO, custom data residency, dedicated success manager, and a tailored SLA.",
    accent: "from-violet-500/15 to-fuchsia-500/5",
  },
  {
    icon: Building2,
    q: "When should I choose Enterprise?",
    a: "Pick Enterprise if you need SOC2 / GDPR-grade compliance, SSO/SAML, custom contracts, audit logs, or volume above 10M events/month. Most teams under 50 are perfectly served by Pro.",
    accent: "from-emerald-500/15 to-teal-500/5",
  },
  {
    icon: RefreshCcw,
    q: "Can I switch plans later?",
    a: "Yes — switch any time. Upgrades are prorated instantly; downgrades take effect at the next billing cycle. No lock-in, no hidden fees.",
    accent: "from-amber-500/15 to-orange-500/5",
  },
  {
    icon: ShieldCheck,
    q: "Do you offer refunds?",
    a: "We offer a 14-day no-questions-asked refund on Pro. Enterprise contracts follow the agreed terms in your MSA.",
    accent: "from-rose-500/15 to-pink-500/5",
  },
];

const PricingFAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing-faq" ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto max-w-3xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-card text-xs font-mono text-primary uppercase tracking-widest">
            <Sparkles size={12} /> Pricing FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Quick answers about <span className="text-primary">plans &amp; billing.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Everything you need before you pick a tier.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className={`group rounded-2xl border bg-gradient-to-br ${f.accent} backdrop-blur-sm px-5 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg transition-all duration-300`}
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-card border flex items-center justify-center text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground group-data-[state=open]:border-primary transition-colors duration-300">
                      <f.icon size={18} />
                    </div>
                    <span className="font-semibold text-foreground text-base">{f.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 pr-2 pb-5 text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingFAQSection;