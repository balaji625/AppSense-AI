const links = [
  { label: "Product", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Contact", href: "#" },
];

const FooterSection = () => (
  <footer className="border-t py-12 px-4 md:px-8">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-lg font-bold text-foreground">
        AppSense <span className="text-primary">AI</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            {l.label}
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2026 AppSense AI</p>
    </div>
  </footer>
);

export default FooterSection;
