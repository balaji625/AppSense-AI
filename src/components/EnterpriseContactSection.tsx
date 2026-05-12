import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Building2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name (min 2 characters)")
    .max(100, "Name must be under 100 characters"),
  workEmail: z
    .string()
    .trim()
    .min(1, "Work email is required")
    .email("Enter a valid email like name@company.com")
    .max(255, "Email must be under 255 characters")
    .refine(
      (v) => !/@(gmail|yahoo|outlook|hotmail|icloud|proton)\./i.test(v),
      "Please use your work email — personal inboxes aren't supported"
    ),
  company: z
    .string()
    .trim()
    .min(2, "Company name is required")
    .max(100, "Company name must be under 100 characters"),
  companySize: z.string().min(1, "Select your company size so we can match the right plan"),
  eventVolume: z.string().min(1, "Pick your monthly event volume"),
  needs: z.array(z.string()).default([]),
  notes: z.string().trim().max(1000, "Notes must be under 1000 characters").optional().default(""),
});

type FieldKey = "name" | "workEmail" | "company" | "companySize" | "eventVolume" | "notes";

const sizes = ["1–10", "11–50", "51–200", "201–1000", "1000+"];
const volumes = ["< 1M / month", "1M – 10M", "10M – 100M", "100M+"];
const needsList = ["SSO / SAML", "SOC 2", "GDPR / DPA", "HIPAA", "Custom data residency", "Audit logs"];

const EnterpriseContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    workEmail: "",
    company: "",
    companySize: "",
    eventVolume: "",
    needs: [] as string[],
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});

  const validateField = (field: FieldKey, nextForm = form) => {
    const result = schema.safeParse(nextForm);
    if (result.success) {
      setErrors((p) => {
        const { [field]: _, ...rest } = p;
        return rest;
      });
      return;
    }
    const issue = result.error.issues.find((i) => i.path[0] === field);
    setErrors((p) => ({ ...p, [field]: issue?.message }));
  };

  const updateField = (field: FieldKey, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    if (touched[field]) validateField(field, next);
  };

  const blur = (field: FieldKey) => {
    setTouched((p) => ({ ...p, [field]: true }));
    validateField(field);
  };

  const toggleNeed = (n: string) =>
    setForm((p) => ({
      ...p,
      needs: p.needs.includes(n) ? p.needs.filter((x) => x !== n) : [...p.needs, n],
    }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<FieldKey, string>> = {};
      const allTouched: Partial<Record<FieldKey, boolean>> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as FieldKey;
        if (!fieldErrors[k]) fieldErrors[k] = i.message;
        allTouched[k] = true;
      });
      setErrors(fieldErrors);
      setTouched((p) => ({ ...p, ...allTouched }));
      toast({
        title: "Please fix the highlighted fields",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      await emailjs.send(
        "service_qvr20bd",
        "template_3jfdoxr",
        {
          name: parsed.data.name,
          email: parsed.data.workEmail,
          message:
            `[Enterprise Inquiry]\nCompany: ${parsed.data.company}\nSize: ${parsed.data.companySize}\nEvent volume: ${parsed.data.eventVolume}\nNeeds: ${parsed.data.needs.join(", ") || "—"}\n\nNotes: ${parsed.data.notes || "—"}`,
        },
        "aSiKP7rbqoKlXXhUC"
      );
      setDone(true);
      setForm({ name: "", workEmail: "", company: "", companySize: "", eventVolume: "", needs: [], notes: "" });
      setErrors({});
      setTouched({});
      toast({ title: "Request sent ✓", description: "Our team will reach out within 1 business day." });
    } catch {
      toast({ title: "Could not send", description: "Please try again in a moment.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition";
  const inputCls = (field: FieldKey) =>
    `${inputBase} ${
      errors[field]
        ? "border-destructive focus:ring-destructive/30 focus:border-destructive"
        : "focus:ring-primary/40 focus:border-primary"
    }`;

  const ErrorMsg = ({ field }: { field: FieldKey }) =>
    errors[field] ? (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
        <AlertCircle size={12} /> {errors[field]}
      </p>
    ) : null;

  return (
    <section id="enterprise" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-card text-xs font-mono text-primary uppercase tracking-widest">
            <Building2 size={12} /> Enterprise
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Talk to our <span className="text-primary">enterprise team.</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Tell us about your scale and compliance needs — we'll tailor a plan with SSO, SLAs, and dedicated support.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block">Full name</label>
              <input
                className={inputCls("name")}
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                onBlur={() => blur("name")}
                aria-invalid={!!errors.name}
                placeholder="Jane Doe"
                maxLength={100}
              />
              <ErrorMsg field="name" />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block">Work email</label>
              <input
                type="email"
                className={inputCls("workEmail")}
                value={form.workEmail}
                onChange={(e) => updateField("workEmail", e.target.value)}
                onBlur={() => blur("workEmail")}
                aria-invalid={!!errors.workEmail}
                placeholder="jane@company.com"
                maxLength={255}
              />
              <ErrorMsg field="workEmail" />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground mb-1.5 block">Company</label>
            <input
              className={inputCls("company")}
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
              onBlur={() => blur("company")}
              aria-invalid={!!errors.company}
              placeholder="Acme Inc."
              maxLength={100}
            />
            <ErrorMsg field="company" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block">Company size</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => {
                      const next = { ...form, companySize: s };
                      setForm(next);
                      setTouched((p) => ({ ...p, companySize: true }));
                      validateField("companySize", next);
                    }}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                      form.companySize === s
                        ? "bg-primary text-primary-foreground border-primary"
                        : `bg-background text-foreground hover:border-primary/40 ${
                            errors.companySize ? "border-destructive/50" : ""
                          }`
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <ErrorMsg field="companySize" />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block">Monthly event volume</label>
              <div className="flex flex-wrap gap-2">
                {volumes.map((v) => (
                  <button
                    type="button"
                    key={v}
                    onClick={() => {
                      const next = { ...form, eventVolume: v };
                      setForm(next);
                      setTouched((p) => ({ ...p, eventVolume: true }));
                      validateField("eventVolume", next);
                    }}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                      form.eventVolume === v
                        ? "bg-primary text-primary-foreground border-primary"
                        : `bg-background text-foreground hover:border-primary/40 ${
                            errors.eventVolume ? "border-destructive/50" : ""
                          }`
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <ErrorMsg field="eventVolume" />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground mb-1.5 block">SSO / Compliance needs</label>
            <div className="flex flex-wrap gap-2">
              {needsList.map((n) => {
                const active = form.needs.includes(n);
                return (
                  <button
                    type="button"
                    key={n}
                    onClick={() => toggleNeed(n)}
                    className={`px-3 py-1.5 rounded-full border text-xs font-medium transition flex items-center gap-1.5 ${
                      active
                        ? "bg-primary/10 text-primary border-primary/40"
                        : "bg-background text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {active && <CheckCircle2 size={12} />}
                    {n}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground mb-1.5 block flex items-center justify-between">
              <span>Anything else? (optional)</span>
              <span className="text-[10px] font-normal text-muted-foreground">{form.notes.length}/1000</span>
            </label>
            <textarea
              rows={3}
              className={inputCls("notes")}
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              onBlur={() => blur("notes")}
              placeholder="Timeline, integrations, questions…"
              maxLength={1000}
            />
            <ErrorMsg field="notes" />
          </div>

          <button
            type="submit"
            disabled={submitting || done}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {done ? (
              <>
                <CheckCircle2 size={16} /> Request sent
              </>
            ) : (
              <>
                <Send size={16} /> {submitting ? "Sending…" : "Request a call"}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default EnterpriseContactSection;