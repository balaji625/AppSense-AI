import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate EmailJS here
    console.log("Contact form submitted:", form);
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Contact</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Get in touch
          </h2>
          <p className="mt-4 text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4 p-8 rounded-2xl border bg-card"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <User size={14} className="text-muted-foreground" /> Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border bg-surface-elevated text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <Mail size={14} className="text-muted-foreground" /> Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border bg-surface-elevated text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
              <MessageSquare size={14} className="text-muted-foreground" /> Message
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border bg-surface-elevated text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity duration-200 w-full justify-center"
          >
            {status === "sent" ? "Message Sent ✓" : <><Send size={16} /> Send Message</>}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
