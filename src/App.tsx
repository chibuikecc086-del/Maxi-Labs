import { useState, useEffect, useRef } from "react";
import logoSrc from "./imports/Gemini_Generated_Image_qmauhcqmauhcqmau.jpg";

// ─── Data

const capabilities = [
  {
    n: "01",
    title: "Social Distribution",
    desc: "We build the distribution layer behind your social presence — coordinated engagement on X, platform-specific posting cadence, and cross-platform support designed to keep your account consistently visible.",
    tags: ["Twitter/X strategy", "Cross-platform distribution", "Visibility campaigns", "Posting cadence"],
  },
  {
    n: "02",
    title: "KOL and Creator Engagement",
    desc: "We source, brief, and coordinate Web3-native creators and key opinion leaders to get your project in front of the CT audiences that actually matter, tracked against clear performance criteria.",
    tags: ["Creator sourcing", "CT visibility", "Campaign coordination", "Performance tracking"],
  },
  {
    n: "03",
    title: "Community Activation",
    desc: "We run structured Telegram engagement — active conversation participation and a consistent community presence that keeps your channel feeling alive without ever reading as automated.",
    tags: ["Telegram engagement", "Active conversation", "Community presence", "Structured coordination"],
  },
  {
    n: "04",
    title: "Social Growth Systems",
    desc: "A coordinated team runs engagement across X, Telegram, Instagram, TikTok, and Kick — built to increase visibility, engagement, and dwell time over the life of a campaign, not just a single post.",
    tags: ["Instagram/TikTok/Kick support", "Team coordination", "Engagement systems", "Dwell time growth"],
  },
];

const processSteps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We audit your current community health, social presence, and competitive landscape before touching anything.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "We build a campaign architecture tailored to your stage, audience, and goals. No templates, no copy-paste playbooks.",
  },
  {
    n: "03",
    title: "Execution",
    desc: "We run the campaign, iterate in real time, and stay accountable to outcomes — not just deliverables.",
  },
  {
    n: "04",
    title: "Retention",
    desc: "We design for longevity. Communities that stay active after the launch are the ones worth building.",
  },
];

// ─── Proof of Work data

const dashboardStats = [
  { value: "Scalable", label: "Operators per campaign" },
  { value: "1K–4K+", label: "Avg. views" },
  { value: "55K+", label: "Peak reach" },
  { value: "X · TG · IG · TikTok · Kick", label: "Channels" },
];

const platformsList = ["X", "Telegram", "Instagram", "TikTok", "Kick"];

const campaignCards = [
  {
    n: "01",
    category: "Web3 Project",
    teamBadge: "20-Person Deployment",
    metric: "1K+ avg. views / post",
    desc: "Early-stage social distribution and cross-platform outreach to support launch traction.",
    tags: ["X Distribution", "Community", "Launch"],
  },
  {
    n: "02",
    category: "Web3 KOL",
    teamBadge: "10-Person Deployment",
    metric: "4K+ avg. views / post",
    desc: "Coordinated X engagement and interaction management at higher volume.",
    tags: ["X Engagement", "Social Proof"],
  },
  {
    n: "03",
    category: "Web3 Creator",
    teamBadge: "10-Person Deployment",
    metric: "55K+ peak post reach",
    desc: "Campaign support focused on early visibility, culminating in a single pinned post reaching significant peak reach.",
    tags: ["X Distribution", "Activation"],
  },
];

// ─── Hook

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Logo mark

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <img
      src={logoSrc}
      alt="Maxi Labs"
      width={size}
      height={size}
      style={{ borderRadius: "50%", display: "block" }}
    />
  );
}

// ─── Nav

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-[#17352A] py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <LogoMark size={30} />
          <span className="font-display font-semibold text-[15px] tracking-tight text-[#F2F7F3]">
            Maxi Labs
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[["Work", "#selected-work"], ["Services", "#services"], ["Process", "#process"], ["About", "#about"]].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{ color: "#9AADA2" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F2F7F3")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9AADA2")}
            >
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5 rounded-lg items-center gap-2">
          Work with us
        </a>

        <button
          className="md:hidden transition-colors"
          style={{ color: "#9AADA2" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
            {menuOpen
              ? <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-[#17352A] px-6 py-6 flex flex-col gap-4">
          {[["Work", "#selected-work"], ["Services", "#services"], ["Process", "#process"], ["About", "#about"]].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-1"
              style={{ color: "#9AADA2" }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-sm px-5 py-2.5 rounded-lg inline-flex items-center justify-center mt-2"
          >
            Work with us
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero

function NetworkGraphic() {
  const nodes = [
    { x: 50, y: 8, r: 5, glow: true },
    { x: 18, y: 28, r: 3.5 },
    { x: 82, y: 22, r: 4 },
    { x: 35, y: 48, r: 6, glow: true },
    { x: 68, y: 52, r: 3.5 },
    { x: 12, y: 66, r: 3 },
    { x: 88, y: 68, r: 5, glow: true },
    { x: 50, y: 82, r: 4 },
    { x: 30, y: 92, r: 3 },
    { x: 70, y: 90, r: 3.5 },
  ];

  const edges = [
    [0, 1], [0, 2], [0, 3], [1, 3], [2, 4], [3, 4],
    [3, 5], [4, 6], [5, 7], [6, 7], [7, 8], [7, 9], [3, 7],
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ overflow: "visible" }}>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#1e4235"
          strokeWidth="0.3"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r / 10}
          fill={n.glow ? "#34D399" : "#20C66B"}
          opacity={n.glow ? 0.9 : 0.5}
          className={n.glow ? "pulse-dot" : ""}
        />
      ))}
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-32 pb-20">
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb-1 absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, #20C66B 0%, #0B5D38 45%, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.11,
          }}
        />
        <div
          className="orb-2 absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full"
          style={{
            background: "radial-gradient(circle, #34D399 0%, #20C66B 50%, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.07,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
        {/* Left — text content, left-aligned */}
        <div className="flex flex-col items-start gap-8 text-left">
          <div className="animate-fade-up animate-delay-1">
            <span
              className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-4 py-1.5 border"
              style={{ color: "#9AADA2", borderColor: "#17352A", background: "rgba(23,53,42,0.5)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C66B] pulse-dot" />
              Accepting new clients
            </span>
          </div>

          <h1
            className="animate-fade-up animate-delay-2 font-display font-extrabold text-5xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-[-0.03em]"
            style={{ color: "#F2F7F3" }}
          >
            Maxi Labs
            <br />
            <span className="gradient-text">Web3 Growth,</span>
            <br />
            <span style={{ color: "rgba(242,247,243,0.85)" }}>Engineered.</span>
          </h1>

          <p
            className="animate-fade-up animate-delay-3 text-lg md:text-xl max-w-lg leading-relaxed font-light"
            style={{ color: "#9AADA2" }}
          >
            We help Web3 creators and protocols build communities that last through authentic engagement, precise social strategy, and deep culture fluency.
          </p>

          <div className="animate-fade-up animate-delay-4 flex flex-col sm:flex-row gap-3 items-start">
            <a href="#selected-work" className="btn-primary px-7 py-3.5 rounded-xl text-[15px] inline-flex items-center gap-2.5">
              View our work
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost px-7 py-3.5 rounded-xl text-[15px] inline-flex items-center gap-2.5">
              Work with us
            </a>
          </div>

          {/* Small credibility row */}
          <div
            className="animate-fade-up animate-delay-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2"
            style={{ borderTop: "1px solid #17352A", marginTop: "0.5rem", paddingTop: "1.5rem", width: "100%" }}
          >
            <div>
              <p className="font-display font-bold text-2xl" style={{ color: "#F2F7F3" }}>Web3</p>
              <p className="text-xs mt-0.5" style={{ color: "#9AADA2" }}>Native operators</p>
            </div>
            <div className="hidden sm:block w-px h-8" style={{ background: "#17352A" }} />
            <div>
              <p className="font-display font-bold text-2xl" style={{ color: "#F2F7F3" }}>Full-cycle</p>
              <p className="text-xs mt-0.5" style={{ color: "#9AADA2" }}>Launch to retention</p>
            </div>
            <div className="hidden sm:block w-px h-8" style={{ background: "#17352A" }} />
            <div>
              <p className="font-display font-bold text-2xl" style={{ color: "#F2F7F3" }}>Selective</p>
              <p className="text-xs mt-0.5" style={{ color: "#9AADA2" }}>Curated client roster</p>
            </div>
          </div>
        </div>

        {/* Right — network graphic, hidden on small screens */}
        <div className="hidden lg:block relative animate-fade-up animate-delay-4" style={{ aspectRatio: "1 / 1" }}>
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(32,198,107,0.08) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <NetworkGraphic />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-bounce">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M10 4v12M5 11l5 5 5-5" stroke="#20C66B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

// ─── Proof of Work (editorial numbered list, matches Selected Work wireframe)

function ProofOfWork() {
  const { ref, inView } = useInView();

  return (
    <section id="selected-work" className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "#34D399" }}>
              Selected work
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight" style={{ color: "#F2F7F3" }}>
              Built for attention.
              <br />
              <span className="gradient-text">Proven in-market.</span>
            </h2>
          </div>
          <p className="text-sm max-w-sm leading-relaxed" style={{ color: "#9AADA2" }}>
            We deploy coordinated teams across X, Telegram, and beyond — turning early attention into measurable, in-market traction. What follows is the infrastructure behind those results, not a service you run yourself.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-24">
          {dashboardStats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 flex flex-col gap-1.5"
              style={{
                border: "1px solid #17352A",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(10px)",
                transition: `opacity 0.5s ${i * 0.06}s, transform 0.5s ${i * 0.06}s`,
              }}
            >
              <p className="font-display font-extrabold text-xl md:text-2xl tracking-tight leading-tight" style={{ color: "#34D399" }}>
                {stat.value}
              </p>
              <p className="text-[11px] uppercase tracking-widest" style={{ color: "#5C7768" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Selected Campaigns — numbered editorial rows */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-widest font-medium mb-8" style={{ color: "#5C7768" }}>
            Selected campaigns
          </p>

          <div className="flex flex-col">
            {campaignCards.map((c, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-10 py-8 items-start ${
                  i !== campaignCards.length - 1 ? "border-b" : ""
                }`}
                style={{
                  borderColor: "#17352A",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(10px)",
                  transition: `opacity 0.5s ${0.2 + i * 0.1}s, transform 0.5s ${0.2 + i * 0.1}s`,
                }}
              >
                {/* Number */}
                <p
                  className="font-display font-extrabold text-3xl tabular-nums leading-none"
                  style={{ color: "transparent", WebkitTextStroke: "1.5px #1e4235" }}
                >
                  {c.n}
                </p>

                {/* Middle content */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#F2F7F3" }}>
                      {c.category}
                    </span>
                    <span className="text-xs" style={{ color: "#5C7768" }}>{c.metric}</span>
                  </div>
                  <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#9AADA2" }}>{c.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ color: "#5C7768", border: "1px solid #17352A" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — team badge + view link */}
                <div className="flex flex-row md:flex-col items-start md:items-end justify-between md:justify-start gap-3 md:gap-4">
                  <span
                    className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ color: "#34D399", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)" }}
                  >
                    {c.teamBadge}
                  </span>
                  <a
                    href="#case-snapshot"
                    className="text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                    style={{ color: "#5C7768" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#34D399")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#5C7768")}
                  >
                    View
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution across the stack */}
        <div className="mb-24" id="case-snapshot">
          <p className="text-xs uppercase tracking-widest font-medium mb-8" style={{ color: "#5C7768" }}>
            Distribution across the stack
          </p>
          <div
            className="flex flex-wrap items-center gap-x-10 gap-y-5 py-8"
            style={{
              borderTop: "1px solid #17352A",
              borderBottom: "1px solid #17352A",
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(10px)",
              transition: "opacity 0.5s 0.4s, transform 0.5s 0.4s",
            }}
          >
            {platformsList.map((p, i) => (
              <span key={p} className="flex items-center gap-10">
                <span className="font-display font-semibold text-lg md:text-xl" style={{ color: "#F2F7F3" }}>{p}</span>
                {i !== platformsList.length - 1 && (
                  <span className="hidden md:inline-block w-1 h-1 rounded-full" style={{ background: "#17352A" }} />
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Confidentiality note */}
        <p className="text-xs leading-relaxed max-w-2xl mb-14" style={{ color: "#17352A" }}>
          Client information anonymized for confidentiality. Figures shown reflect documented campaign performance and are not attributed to specific individuals or projects.
        </p>

        {/* Closing line + CTA */}
        <div className="flex flex-col items-center text-center gap-6">
          <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight" style={{ color: "#F2F7F3" }}>
            Your content. <span className="gradient-text">Our distribution.</span>
          </h3>
          <a
            href="#contact"
            className="btn-primary px-8 py-3.5 rounded-xl text-[15px] inline-flex items-center gap-2.5 font-semibold"
          >
            Work with Maxi Labs
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


// ─── Services (merged — alternating row layout)

function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: "#20C66B" }}>What we do</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight" style={{ color: "#F2F7F3" }}>
              Growth systems,
              <br />
              <span className="gradient-text-subtle">not one-off campaigns.</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#9AADA2" }}>
            We build repeatable growth infrastructure. The kind that compounds over time and survives market cycles.
          </p>
        </div>

        {/* Alternating rows instead of a card grid */}
        <div className="flex flex-col">
          {capabilities.map((c, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 py-10 ${
                i !== capabilities.length - 1 ? "border-b" : ""
              } ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              style={{
                borderColor: "#17352A",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(14px)",
                transition: `opacity 0.55s ${i * 0.08}s, transform 0.55s ${i * 0.08}s`,
              }}
            >
              {/* Big outlined number */}
              <div className="md:w-1/4 flex-shrink-0">
                <p
                  className="font-display font-extrabold text-6xl md:text-7xl tabular-nums leading-none"
                  style={{ color: "transparent", WebkitTextStroke: "1.5px #1e4235" }}
                >
                  {c.n}
                </p>
              </div>

              {/* Content */}
              <div className="md:w-3/4 flex flex-col gap-4">
                <h3 className="font-display font-semibold text-2xl md:text-[28px] tracking-tight" style={{ color: "#F2F7F3" }}>
                  {c.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: "#9AADA2" }}>
                  {c.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full px-3 py-1 border"
                      style={{ color: "#9AADA2", borderColor: "#17352A" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process (connected horizontal timeline)

function Process() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: "#20C66B" }}>How we work</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight" style={{ color: "#F2F7F3" }}>
            A process built
            <br />
            <span className="gradient-text">for real results.</span>
          </h2>
        </div>

        {/* Connected timeline */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-[13px] left-0 right-0 h-px"
            style={{ background: "#17352A" }}
          />
          <div
            className="hidden md:block absolute top-[13px] left-0 h-px"
            style={{
              background: "linear-gradient(90deg, #20C66B, #34D399)",
              width: inView ? "100%" : "0%",
              transition: "width 1.1s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col gap-4"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(10px)",
                  transition: `opacity 0.5s ${0.3 + i * 0.12}s, transform 0.5s ${0.3 + i * 0.12}s`,
                }}
              >
                {/* Node on the line */}
                <div
                  className="relative z-10 w-[26px] h-[26px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "#07110E",
                    border: `1.5px solid ${i === 0 ? "#34D399" : "#17352A"}`,
                  }}
                >
                  <span
                    className="text-[10px] font-bold tabular-nums"
                    style={{ color: i === 0 ? "#34D399" : "#9AADA2" }}
                  >
                    {step.n}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg tracking-tight" style={{ color: "#F2F7F3" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9AADA2" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Live Demo (converted from the standalone mockup — TG coordination + X engagement)

function LiveDemo() {
  const { ref, inView } = useInView(0.3);
  const [scene, setScene] = useState<"tg" | "post">("tg");
  const [visibleBubbles, setVisibleBubbles] = useState(0);
  const [visibleReplies, setVisibleReplies] = useState(0);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [likes, setLikes] = useState(40);
  const [replies, setReplies] = useState(12);
  const [views, setViews] = useState(310);
  const started = useRef(false);

  const bubbles = [
    { name: "Operator 1", text: "Target post is live 🔗" },
    { name: "Operator 2", text: "On it" },
    { name: "Operator 3", text: "lets roll ✅" },
    { name: "Operator 2", text: "Nice, numbers moving" },
  ];
  const replyList = [
    { name: "Operator 1", text: "gm ski 👀 wya" },
    { name: "Operator 2", text: "wait this the one that migrated?" },
    { name: "Operator 3", text: "been hearing about this since last night ngl" },
  ];

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    bubbles.forEach((_, i) => {
      setTimeout(() => setVisibleBubbles(i + 1), 400 + i * 900);
    });

    setTimeout(() => setScene("post"), 400 + bubbles.length * 900 + 800);

    setTimeout(() => {
      replyList.forEach((_, i) => {
        setTimeout(() => setVisibleReplies(i + 1), i * 900);
      });
    }, 400 + bubbles.length * 900 + 1600);

    const countStart = 400 + bubbles.length * 900 + 1600 + replyList.length * 900 + 800;
    setTimeout(() => setTaglineVisible(true), countStart - 400);
    setTimeout(() => {
      const duration = 3000;
      const t0 = performance.now();
      function step(now: number) {
        const p = Math.min(1, (now - t0) / duration);
        setLikes(Math.floor(40 + (1240 - 40) * p));
        setReplies(Math.floor(12 + (318 - 12) * p));
        setViews(Math.floor(310 + (3800 - 310) * p));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, countStart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section className="py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: "#34D399" }}>Live example</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight" style={{ color: "#F2F7F3" }}>
            Coordinated engagement, <span className="gradient-text">in motion.</span>
          </h2>
        </div>

        <div
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{ background: "#0B1F16", border: "1px solid #17352A", minHeight: 420 }}
        >
          {scene === "tg" && (
            <div className="max-w-md mx-auto">
              <div className="rounded-2xl overflow-hidden" style={{ background: "#0C1A15", border: "1px solid #17352A" }}>
                <div className="px-4 py-3 font-semibold text-sm" style={{ background: "#0F241A", borderBottom: "1px solid #17352A", color: "#F2F7F3" }}>
                  &lt;Example X KOL&gt; X Team
                </div>
                <div className="p-4 flex flex-col gap-2.5" style={{ minHeight: 220 }}>
                  {bubbles.slice(0, visibleBubbles).map((b, i) => (
                    <div
                      key={i}
                      className="rounded-xl px-3.5 py-2 text-sm max-w-[80%]"
                      style={{
                        background: "#132B1F",
                        color: "#F2F7F3",
                        alignSelf: i % 2 === 1 ? "flex-end" : "flex-start",
                      }}
                    >
                      <span className="block text-xs font-bold mb-0.5" style={{ color: "#34D399" }}>{b.name}</span>
                      {b.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {scene === "post" && (
            <div className="max-w-md mx-auto">
              <div className="rounded-2xl p-5" style={{ background: "#0C1A15", border: "1px solid #17352A" }}>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-sm"
                    style={{ background: "linear-gradient(135deg, #20C66B, #34D399)", color: "#07110E" }}
                  >
                    XK
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#F2F7F3" }}>&lt;Example X KOL&gt;</p>
                    <p className="text-xs" style={{ color: "#5C7768" }}>@examplekol</p>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: "#F2F7F3" }}>$EXMPL just went live on-chain. paying attention rn</p>
                <div className="flex gap-6 text-xs mb-4" style={{ color: "#9AADA2" }}>
                  <span><b className="font-display" style={{ color: "#34D399" }}>{likes.toLocaleString()}</b> Likes</span>
                  <span><b className="font-display" style={{ color: "#34D399" }}>{replies.toLocaleString()}</b> Replies</span>
                  <span><b className="font-display" style={{ color: "#34D399" }}>{views.toLocaleString()}</b> Views</span>
                </div>
                <div className="flex flex-col gap-2.5" style={{ borderTop: "1px solid #17352A", paddingTop: "0.875rem" }}>
                  {replyList.slice(0, visibleReplies).map((r, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                        style={{ background: "#132B1F", border: "1px solid #20C66B", color: "#34D399" }}
                      >
                        {r.name.slice(-1)}
                      </div>
                      <p className="text-xs" style={{ color: "#9AADA2" }}>
                        <span className="font-bold" style={{ color: "#F2F7F3" }}>{r.name}</span> {r.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {taglineVisible && (
                <p
                  className="text-center font-display font-bold text-lg mt-5"
                  style={{ color: "#34D399" }}
                >
                  ur personal cult, engineered 🌱
                </p>
              )}
            </div>
          )}
        </div>

        <p className="text-xs text-center mt-6 leading-relaxed" style={{ color: "#17352A" }}>
          Illustrative example. Account and figures shown are for demonstration purposes.
        </p>
      </div>
    </section>
  );
}

// ─── About

function About() {
  const { ref, inView } = useInView();
  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="glass-bright rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#17352A]">
              <p className="text-xs uppercase tracking-widest font-medium mb-5" style={{ color: "#20C66B" }}>About Maxi Labs</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-6" style={{ color: "#F2F7F3" }}>
                We&rsquo;re operators,
                <br />
                not marketers.
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#9AADA2" }}>
                Maxi Labs was built by people who grew up in Web3: early DeFi participants, NFT community builders, DAO contributors. We know what authentic engagement looks like because we lived it.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#9AADA2" }}>
                That fluency is our edge. We don&rsquo;t need to learn your audience. We are your audience. Every strategy we build is grounded in cultural accuracy and designed for long-term retention, not vanity metrics.
              </p>
            </div>

            {/* Right */}
            <div className="p-10 md:p-14 flex flex-col justify-between gap-10">
              <div>
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#17352A" }}>Core team background</p>
                <div className="space-y-5">
                  {[
                    { role: "Community strategy", note: "Background in building and operating large Web3 communities" },
                    { role: "Social and content", note: "Experience as Web3 creators and community voice" },
                    { role: "Growth and analytics", note: "Data-first approach from protocol and product backgrounds" },
                    { role: "Web3 culture", note: "Active participants in the space since its early days" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-px min-h-[18px] flex-shrink-0 mt-1.5" style={{ background: "#0B5D38", height: "100%" }} />
                      <div>
                        <p className="text-sm font-medium" style={{ color: "#F2F7F3" }}>{item.role}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#9AADA2" }}>{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["Web3 Native", "Community First", "Data Driven"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium rounded-full px-3 py-1 border"
                    style={{ color: "#9AADA2", borderColor: "#17352A" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Scroll-linked stack-to-grid hook (Phantom-style unstacking cards)

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const updateIsDesktop = () => setIsDesktop(mq.matches);
    updateIsDesktop();
    mq.addEventListener("change", updateIsDesktop);

    function onScroll() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.95;
      const end = vh * 0.4;
      let p = (start - rect.top) / (start - end);
      p = Math.min(1, Math.max(0, p));
      setProgress(p);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", updateIsDesktop);
    };
  }, []);

  return { ref, progress, isDesktop };
}

// ─── Why Us (three genuinely distinct cards — one inverted bright, playful stickers/blobs, Phantom-style contrast without breaking brand)

function WhyUs() {
  const { ref, inView } = useInView();
  const { ref: gridRef, progress, isDesktop } = useScrollReveal();

  // Stacking offsets — cards start fanned/overlapping, spread apart as you scroll
  const stackConfig = [
    { x: 106, rotate: -8, z: 1 },
    { x: 0, rotate: 0, z: 3 },
    { x: -106, rotate: 8, z: 1 },
  ];

  return (
    <section className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" ref={gridRef}>

          {/* Card 1 — Web3-native pedigree. Scattered organic blobs, tilted pills, centerpiece icon */}
          <div
            className="rounded-[28px] p-9 flex flex-col justify-between min-h-[460px] relative overflow-hidden"
            style={{
              background: "#0B1F16",
              transform: isDesktop ? `translateX(${(1 - progress) * stackConfig[0].x}%) rotate(${(1 - progress) * stackConfig[0].rotate}deg) scale(${1 - (1 - progress) * 0.12})` : "none",
              zIndex: stackConfig[0].z,
              willChange: "transform",
            }}
          >
            <h3 className="font-display font-bold text-[28px] leading-[1.15] tracking-tight max-w-[230px] relative z-10" style={{ color: "#F2F7F3" }}>
              Built by people who&rsquo;ve lived in Web3 since it began.
            </h3>

            {/* Scattered organic cluster */}
            <div className="relative flex-1 mt-4" style={{ minHeight: 230 }}>
              {/* Centerpiece icon, like Phantom's mascot square */}
              <div
                className="absolute left-1/2 top-8 w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: "#34D399", transform: "translateX(-50%) rotate(-3deg)", boxShadow: "0 12px 30px rgba(52,211,153,0.25)" }}
              >
                <LogoMark size={44} />
              </div>

              {/* DeFi OGs — coin icon */}
              <div className="absolute top-0 left-2 flex flex-col items-start gap-1.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "#20C66B", transform: "rotate(-6deg)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="#07110E" strokeWidth="1.8" />
                    <path d="M12 8v8M9.5 10a2 2 0 012-1.5h1a2 2 0 010 4h-1a2 2 0 000 4h1a2 2 0 002-1.5" stroke="#07110E" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <div
                  className="flex items-center gap-1.5 rounded-full px-3.5 py-2 bg-[#0F241A]"
                  style={{ transform: "rotate(-8deg)" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "#F2F7F3" }}>DeFi OGs</span>
                </div>
              </div>

              {/* NFT builders — frame/image icon */}
              <div className="absolute top-16 right-0 flex flex-col items-end gap-1.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "#34D399", transform: "rotate(5deg)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="5" width="16" height="14" rx="2" stroke="#07110E" strokeWidth="1.6" />
                    <circle cx="9" cy="10" r="1.4" fill="#07110E" />
                    <path d="M5 16l4.5-4.5L12 14l3-3 4 5" stroke="#07110E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div
                  className="flex items-center gap-1.5 rounded-full px-3.5 py-2 bg-[#0F241A]"
                  style={{ transform: "rotate(6deg)" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "#F2F7F3" }}>NFT builders</span>
                </div>
              </div>

              {/* DAO contributors — ballot/governance icon */}
              <div className="absolute bottom-0 left-4 flex flex-col items-start gap-1.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "#0B5D38", transform: "rotate(-4deg)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="4" width="14" height="16" rx="1.5" stroke="#F2F7F3" strokeWidth="1.6" />
                    <path d="M8.5 12l2 2 4-4.5" stroke="#F2F7F3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div
                  className="flex items-center gap-1.5 rounded-full px-3.5 py-2 bg-[#0F241A]"
                  style={{ transform: "rotate(4deg)" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "#F2F7F3" }}>DAO contributors</span>
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed relative z-10" style={{ color: "#7FA391" }}>
              We are the audience we&rsquo;re building for.
            </p>
          </div>

          {/* Card 2 — Seamless onboarding. INVERTED bright lime, dark text, scattered pill cluster */}
          <div
            className="rounded-[28px] p-9 flex flex-col justify-between min-h-[460px] relative overflow-hidden"
            style={{
              background: "#34D399",
              transform: isDesktop ? `translateX(${(1 - progress) * stackConfig[1].x}%) rotate(${(1 - progress) * stackConfig[1].rotate}deg) scale(${1 - (1 - progress) * 0.12})` : "none",
              zIndex: stackConfig[1].z,
              willChange: "transform",
            }}
          >
            <h3 className="font-display font-bold text-[28px] leading-[1.15] tracking-tight max-w-[220px] relative z-10" style={{ color: "#07110E" }}>
              Onboarding measured in days, not weeks.
            </h3>

            {/* Scattered sticker cluster, Phantom-style */}
            <div className="relative flex-1 mt-6" style={{ minHeight: 220 }}>
              <div
                className="absolute top-4 left-2 flex items-center gap-2 rounded-full px-4 py-2 bg-[#07110E]"
                style={{ transform: "rotate(-6deg)" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#20C66B]" />
                <span className="text-sm font-medium" style={{ color: "#F2F7F3" }}>Brief received</span>
              </div>

              <div
                className="absolute top-24 right-0 flex items-center gap-2 rounded-full px-4 py-2 bg-[#07110E]"
                style={{ transform: "rotate(4deg)" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#20C66B]" />
                <span className="text-sm font-medium" style={{ color: "#F2F7F3" }}>Team deployed</span>
              </div>

              <div
                className="absolute bottom-2 left-6 flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: "rgba(7,17,14,0.12)", border: "1.5px solid rgba(7,17,14,0.25)", transform: "rotate(3deg)" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#07110E] pulse-dot" />
                <span className="text-sm font-medium" style={{ color: "#07110E" }}>Campaign live</span>
              </div>
            </div>
          </div>

          {/* Card 3 — Flexible engagement. Near-black, tilted ticket pills echoing a yes/no toggle */}
          <div
            className="rounded-[28px] p-9 flex flex-col justify-between min-h-[460px] relative overflow-hidden"
            style={{
              background: "#050B08",
              transform: isDesktop ? `translateX(${(1 - progress) * stackConfig[2].x}%) rotate(${(1 - progress) * stackConfig[2].rotate}deg) scale(${1 - (1 - progress) * 0.12})` : "none",
              zIndex: stackConfig[2].z,
              willChange: "transform",
            }}
          >
            <h3 className="font-display font-bold text-[28px] leading-[1.15] tracking-tight max-w-[230px]" style={{ color: "#F2F7F3" }}>
              No long lock-ins. Stay because it works.
            </h3>

            <div className="relative flex-1 mt-6" style={{ minHeight: 220 }}>
              {/* Tilted "ticket" pills, Phantom-yes/no inspired but on-brand */}
              <div
                className="absolute top-4 left-0 flex items-center gap-2 rounded-2xl px-5 py-3"
                style={{ background: "#34D399", transform: "rotate(-7deg)", boxShadow: "0 10px 24px rgba(52,211,153,0.2)" }}
              >
                <span className="text-sm font-bold" style={{ color: "#07110E" }}>Month-to-month</span>
              </div>

              <div
                className="absolute top-24 right-0 flex items-center gap-2 rounded-2xl px-5 py-3"
                style={{ border: "1.5px solid #17352A", transform: "rotate(6deg)" }}
              >
                <span className="text-sm" style={{ color: "#5C7768" }}>Long lock-in</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 2.5l7 7M9.5 2.5l-7 7" stroke="#5C7768" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>

              {/* Checkmark badge, centered lower */}
              <div
                className="absolute bottom-2 left-1/2 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "#20C66B", transform: "translateX(-50%) rotate(-4deg)" }}
              >
                <svg width="24" height="24" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6.2l2.3 2.3 4.7-4.7" stroke="#07110E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <p className="text-xs leading-relaxed" style={{ color: "#5C7768" }}>
              Clients stay because of results, not contract terms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Contact

function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Banner */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-6">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 30% 50%, rgba(11,93,56,0.6) 0%, transparent 65%), radial-gradient(ellipse at 80% 30%, rgba(52,211,153,0.06) 0%, transparent 55%)",
            }}
          />
          <div className="absolute inset-0 border border-[#17352A] rounded-2xl md:rounded-3xl" style={{ borderColor: "#1e4235" }} />
          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            <p className="text-xs uppercase tracking-widest font-medium mb-5" style={{ color: "#20C66B" }}>Ready to grow?</p>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-tight mb-4" style={{ color: "#F2F7F3" }}>
              Let&rsquo;s build something
              <br />
              <span className="gradient-text">worth talking about.</span>
            </h2>
            <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "#9AADA2" }}>
              We work with a selective roster of Web3 projects. Reach out on Telegram or X to start the conversation.
            </p>
          </div>
        </div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Telegram */}
          <a
            href="https://t.me/maxilabs"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-bright rounded-2xl p-8 hover-lift flex items-center justify-between gap-6 group"
          >
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#9AADA2" }}>Preferred channel</p>
              <p className="font-display font-semibold text-xl mb-1 transition-colors group-hover:text-[#34D399]" style={{ color: "#F2F7F3" }}>
                Message us on Telegram
              </p>
              <p className="text-sm" style={{ color: "#9AADA2" }}>@maxilabs</p>
            </div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ background: "rgba(32,198,107,0.1)", border: "1px solid rgba(32,198,107,0.2)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M21.198 2.433a2.242 2.242 0 00-1.022.215l-16.5 6.637C2.165 9.74 2 10.35 2 10.8c0 .45.165.99.676 1.27l3.957 1.54 1.735 5.48c.207.65.814.91 1.378.91.565 0 .97-.26 1.168-.46l1.95-1.9 3.86 2.85c.38.28.79.44 1.21.44.87 0 1.6-.63 1.76-1.5L22 4.037c.13-.69-.06-1.31-.532-1.58a1.78 1.78 0 00-.27-.024zm-9.5 10.56l-1.97 3.37-.75-3.23 8.5-8.17-5.78 8.03z" fill="#20C66B" />
              </svg>
            </div>
          </a>

          {/* X */}
          <a
            href="https://x.com/maxilabs"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-bright rounded-2xl p-8 hover-lift flex items-center justify-between gap-6 group"
          >
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#9AADA2" }}>Follow our work</p>
              <p className="font-display font-semibold text-xl mb-1 transition-colors group-hover:text-[#34D399]" style={{ color: "#F2F7F3" }}>
                Follow us on X
              </p>
              <p className="text-sm" style={{ color: "#9AADA2" }}>@maxilabs</p>
            </div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ background: "rgba(242,247,243,0.05)", border: "1px solid #17352A" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#F2F7F3">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer

function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-[#17352A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <LogoMark size={24} />
          <span className="font-display font-semibold text-sm" style={{ color: "#9AADA2" }}>Maxi Labs</span>
        </div>
        <p className="text-xs" style={{ color: "#17352A" }}>© 2025 Maxi Labs. Web3 Growth, Engineered.</p>
        <div className="flex gap-6">
          <a href="https://x.com/maxilabs" target="_blank" rel="noopener noreferrer" className="text-xs transition-colors hover:text-[#F2F7F3]" style={{ color: "#9AADA2" }}>X</a>
          <a href="https://t.me/maxilabs" target="_blank" rel="noopener noreferrer" className="text-xs transition-colors hover:text-[#F2F7F3]" style={{ color: "#9AADA2" }}>Telegram</a>
        </div>
      </div>
    </footer>
  );
}

// ─── App

export default function App() {
  return (
    <div className="noise min-h-screen" style={{ backgroundColor: "#07110E" }}>
      <Nav />
      <main>
        <Hero />
        <ProofOfWork />
        <Services />
        <Process />
        <LiveDemo />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
