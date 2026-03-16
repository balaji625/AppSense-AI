import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Github, Twitter, Mail, Rocket, Users, Gift, Zap, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const founders = [
  {
    name: "Bathala Balaji",
    role: "Co-Founder · Product & Technology",
    desc: "Technology enthusiast focused on building intelligent software systems. Balaji leads product development and is passionate about AI-driven platforms that help developers build smarter applications.",
    initials: "BB",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "balaji@appsenseai.com",
    },
  },
  {
    name: "Kondreddy Vijaya",
    role: "Co-Founder · Vision & Growth",
    desc: "Co-founder focused on product vision and growth strategy. Vijaya works on shaping the platform to help developers understand user behavior and improve app experiences.",
    initials: "KV",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "vijaya@appsenseai.com",
    },
  },
];

const steps = [
  {
    icon: Mail,
    title: "Send Us a Message",
    desc: "Fill out the contact form on our homepage or email us directly. Tell us about your project and goals.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Users,
    title: "Schedule a Call",
    desc: "We'll set up a quick 15-minute call to understand your needs and show you what AppSense AI can do.",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: Rocket,
    title: "Get Early Access",
    desc: "Join our exclusive early access program with priority onboarding, direct founder support, and special perks.",
    color: "from-emerald-500 to-green-400",
  },
];

const perks = [
  { icon: Gift, label: "Free 3-Month Pro Plan", desc: "Full access to all premium features at no cost." },
  { icon: Star, label: "Priority Support", desc: "Direct Slack channel with the founding team." },
  { icon: Zap, label: "Shape the Product", desc: "Your feedback directly influences our roadmap." },
  { icon: CheckCircle, label: "Lifetime Discount", desc: "Lock in 40% off when we launch publicly." },
];

const EarlyAccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-5xl flex items-center gap-4 py-4 px-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-card text-foreground text-sm font-medium hover:bg-muted transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1 className="text-lg font-bold text-foreground">Early Access Program</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest">
            🚀 Early Access
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Join the future of <br />
            <span className="text-primary">intelligent apps.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get exclusive access, meet the founders, and help shape AppSense AI from the ground up.
          </p>
        </motion.div>

        {/* Founders */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div className="text-center">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Meet the Team</span>
            <h3 className="mt-2 text-3xl font-bold text-foreground">The Founders</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group relative p-8 rounded-2xl border bg-card overflow-hidden hover:border-primary/40 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-lg">
                      {f.initials}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{f.name}</h4>
                      <p className="text-sm font-mono text-primary">{f.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{f.desc}</p>
                  <div className="flex gap-2">
                    {[
                      { Icon: Linkedin, href: f.socials.linkedin, label: "LinkedIn" },
                      { Icon: Github, href: f.socials.github, label: "GitHub" },
                      { Icon: Twitter, href: f.socials.twitter, label: "Twitter" },
                      { Icon: Mail, href: `mailto:${f.socials.email}`, label: "Email" },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="p-2.5 rounded-xl border bg-muted/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                        title={label}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How to Connect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="text-center">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">How to Connect</span>
            <h3 className="mt-2 text-3xl font-bold text-foreground">3 Simple Steps</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="relative p-8 rounded-2xl border bg-card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-muted/20">
                  {i + 1}
                </div>
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5`}>
                  <step.icon size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Early Access Perks */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Exclusive Perks</span>
            <h3 className="mt-2 text-3xl font-bold text-foreground">What You Get</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <perk.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{perk.label}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center p-12 rounded-3xl bg-secondary text-secondary-foreground"
        >
          <h3 className="text-2xl md:text-4xl font-bold">Ready to get started?</h3>
          <p className="mt-3 text-secondary-foreground/70 max-w-lg mx-auto">
            Head back and fill out the contact form — we'll reach out within 24 hours.
          </p>
          <button
            onClick={() => navigate("/#contact")}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> Contact Us Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default EarlyAccess;
