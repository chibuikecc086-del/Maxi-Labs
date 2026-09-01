import { useState, useEffect, useRef } from "react";
import logoSrc from "./imports/Gemini_Generated_Image_qmauhcqmauhcqmau.jpg";

// ─── Data

const capabilities = [
  {
    n: "01",
    title: "Community Architecture",
    desc: "We design community infrastructure from the ground up — Discord and Telegram structure, role systems, engagement loops, moderation frameworks, and ambassador programs built to sustain themselves over time.",
    tags: ["Discord buildout", "Role architecture", "Ambassador programs", "Moderation systems"],
  },
  {
    n: "02",
    title: "Social Strategy and Content Systems",
    desc: "We build the content engine behind your social presence — thread frameworks, posting cadence, platform-specific narrative strategy, and content systems your team can operate consistently.",
    tags: ["Twitter/X strategy", "Thread frameworks", "Content cadence", "Narrative positioning"],
  },
  {
    n: "03",
    title: "Creator and KOL Operations",
    desc: "We source, brief, and coordinate Web3-native creators and key opinion leaders aligned to your audience. Every activation is planned, tracked, and evaluated against clear criteria.",
    tags: ["Creator sourcing", "Campaign briefs", "Coordination", "Performance tracking"],
  },
  {
    n: "04",
    title: "Launch Planning and Execution",
    desc: "We plan and run the social and community side of your launch — whether a token generation event, collection mint, or protocol debut — with a structured pre-launch runway and day-of operations.",
    tags: ["Pre-launch runway", "Launch day ops", "Community momentum", "Cross-channel coordination"],
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
  { value: "10", label: "Campaigns documented" },
  { value: "5–20", label: "Team members per campaign" },
  { value: "300–4K+", label: "Average views per post" },
  { value: "55K+", label: "Peak reach, single pinned post" },
  { value: "1mo–1yr", label: "Campaign durations" },
  { value: "5", label: "Platforms supported" },
];

const campaignCards = [
  {
    label: "Campaign A — Web3 Project",
    team: "20-person team",
    metric: "1K+ avg. views/post",
    duration: "2 months",
    focus: "Early-stage social proof, cross-community outreach on X, and support building launch traction.",
  },
  {
    label: "Campaign B — Web3 KOL",
    team: "12-person team",
    metric: "300+ avg. views/post",
    duration: "1 year, ongoing",
    focus: "X social proof, Telegram community engagement to reinforce confidence in calls, plus TikTok, Instagram, and Kick support.",
  },
  {
    label: "Campaign C — Web3 Creator",
    team: "12-person verified team",
    metric: "1K+ avg. views/post",
    duration: "3 months",
    focus: "X social proof combined with regional-language Instagram growth and full account management.",
  },
  {
    label: "Campaign D — Web3 KOL",
    team: "10-person team",
    metric: "1K+ avg. views/post",
    duration: "6 months",
    focus: "X interaction management and dedicated Telegram engagement to build community confidence around calls.",
  },
  {
    label: "Campaign E — Web3 KOL",
    team: "5-person team",
    metric: "2K+ avg. views/post",
    duration: "1 month",
    focus: "Social proof and coordinated X interaction management.",
  },
  {
    label: "Campaign F — Web3 KOL",
    team: "10-person team",
    metric: "4K+ avg. views/post",
    duration: "2 months, ongoing",
    focus: "Social proof and coordinated X interaction management at higher engagement volume.",
  },
];

const platformCapabilities = [
  {
    platform: "X",
    items: ["Social proof", "Replies", "Quotes", "Post interaction"],
  },
  {
    platform: "Telegram",
    items: ["Community engagement", "Conversation stimulation", "Positive reinforcement around calls", "Community confidence"],
  },
  {
    platform: "Instagram / TikTok / Kick",
    items: ["Social support", "Account growth and traction", "Content and community support"],
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
          fill={n.glow ? "#B6FF20" : "#20C66B"}
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
            background: "radial-gradient(circle, #B6FF20 0%, #20C66B 50%, transparent 70%)",
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
            className="animate-fade-up animate-delay-4 flex items-center gap-6 pt-2"
            style={{ borderTop: "1px solid #17352A", marginTop: "0.5rem", paddingTop: "1.5rem", width: "100%" }}
          >
            <div>
              <p className="font-display font-bold text-2xl" style={{ color: "#F2F7F3" }}>Web3</p>
              <p className="text-xs mt-0.5" style={{ color: "#9AADA2" }}>Native operators</p>
            </div>
            <div className="w-px h-8" style={{ background: "#17352A" }} />
            <div>
              <p className="font-display font-bold text-2xl" style={{ color: "#F2F7F3" }}>Full-cycle</p>
              <p className="text-xs mt-0.5" style={{ color: "#9AADA2" }}>Launch to retention</p>
            </div>
            <div className="w-px h-8" style={{ background: "#17352A" }} />
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

// ─── Proof of Work (replaces old Selected Work / WorkCard section)

function ProofOfWork() {
  const { ref, inView } = useInView();

  return (
    <section id="selected-work" className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "#B6FF20" }}>
              Proof of work
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight" style={{ color: "#F2F7F3" }}>
              A track record built
              <br />
              <span className="gradient-text">on real execution.</span>
            </h2>
          </div>
          <p className="text-sm max-w-sm leading-relaxed" style={{ color: "#9AADA2" }}>
            A selection of campaigns we&rsquo;ve supported across Web3 — spanning social proof, X engagement, community activation, and cross-platform support. What follows is the infrastructure and team behind those results, not a service you run yourself.
          </p>
        </div>

        {/* 1. Aggregate dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {dashboardStats.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-5 flex flex-col gap-1.5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(10px)",
                transition: `opacity 0.5s ${i * 0.06}s, transform 0.5s ${i * 0.06}s`,
              }}
            >
              <p className="font-display font-extrabold text-2xl md:text-3xl tracking-tight" style={{ color: "#B6FF20" }}>
                {stat.value}
              </p>
              <p className="text-xs leading-snug" style={{ color: "#9AADA2" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 2. Campaign cards (anonymized) */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest font-medium mb-6" style={{ color: "#20C66B" }}>
            Campaign snapshots
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {campaignCards.map((c, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-7 flex flex-col gap-4"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(10px)",
                  transition: `opacity 0.5s ${0.2 + i * 0.1}s, transform 0.5s ${0.2 + i * 0.1}s`,
                }}
              >
                <p className="font-display font-semibold text-lg tracking-tight" style={{ color: "#F2F7F3" }}>
                  {c.label}
                </p>
                <div className="flex flex-col gap-1.5">
                  <p className="text-sm" style={{ color: "#9AADA2" }}>{c.team}</p>
                  <p className="text-sm" style={{ color: "#9AADA2" }}>{c.metric}</p>
                  <p className="text-sm" style={{ color: "#9AADA2" }}>{c.duration}</p>
                </div>
                <div style={{ borderTop: "1px solid #17352A", paddingTop: "1rem" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "#9AADA2" }}>{c.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Cross-platform capability */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest font-medium mb-6" style={{ color: "#20C66B" }}>
            Cross-platform capability
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {platformCapabilities.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl p-7"
                style={{
                  border: "1px solid #17352A",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(10px)",
                  transition: `opacity 0.5s ${0.4 + i * 0.1}s, transform 0.5s ${0.4 + i * 0.1}s`,
                }}
              >
                <p className="font-display font-semibold text-base mb-4" style={{ color: "#B6FF20" }}>{p.platform}</p>
                <ul className="flex flex-col gap-2">
                  {p.items.map((item) => (
                    <li key={item} className="text-sm flex items-start gap-2" style={{ color: "#9AADA2" }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: "#20C66B" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Mini case study (anonymized) */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest font-medium mb-6" style={{ color: "#20C66B" }}>
            Case snapshot
          </p>
          <div className="glass-bright rounded-2xl md:rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
              <div className="flex flex-col gap-5">
                <h3 className="font-display font-semibold text-2xl tracking-tight" style={{ color: "#F2F7F3" }}>
                  Building early social proof for a Web3 launch
                </h3>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#17352A" }}>Objective</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#9AADA2" }}>
                      Build social proof during the early launch stage of a Web3 project.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#17352A" }}>Execution</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#9AADA2" }}>
                      Coordinated X engagement, structured community outreach, and consistent quote activity around key posts.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#17352A" }}>Outcome</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#9AADA2" }}>
                      Established early traction and generated significant visibility around the project&rsquo;s content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5" style={{ borderLeft: "1px solid #17352A", paddingLeft: "2rem" }}>
                <div>
                  <p className="font-display font-extrabold text-3xl" style={{ color: "#B6FF20" }}>10-person</p>
                  <p className="text-xs mt-1" style={{ color: "#9AADA2" }}>Team deployed</p>
                </div>
                <div>
                  <p className="font-display font-extrabold text-3xl" style={{ color: "#B6FF20" }}>1K+</p>
                  <p className="text-xs mt-1" style={{ color: "#9AADA2" }}>Average views per post</p>
                </div>
                <div>
                  <p className="font-display font-extrabold text-3xl" style={{ color: "#B6FF20" }}>55K+</p>
                  <p className="text-xs mt-1" style={{ color: "#9AADA2" }}>Views on a single pinned post</p>
                </div>
                <div>
                  <p className="font-display font-extrabold text-3xl" style={{ color: "#B6FF20" }}>1 month</p>
                  <p className="text-xs mt-1" style={{ color: "#9AADA2" }}>Campaign duration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confidentiality note */}
        <p className="text-xs leading-relaxed max-w-2xl mb-14" style={{ color: "#17352A" }}>
          Client information anonymized for confidentiality. Figures shown reflect documented campaign performance and are not attributed to specific individuals or projects.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="btn-primary px-8 py-3.5 rounded-xl text-[15px] inline-flex items-center gap-2.5 font-semibold"
          >
            Start a conversation
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
              background: "linear-gradient(90deg, #20C66B, #B6FF20)",
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
                    border: `1.5px solid ${i === 0 ? "#B6FF20" : "#17352A"}`,
                  }}
                >
                  <span
                    className="text-[10px] font-bold tabular-nums"
                    style={{ color: i === 0 ? "#B6FF20" : "#9AADA2" }}
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
              background: "radial-gradient(ellipse at 30% 50%, rgba(11,93,56,0.6) 0%, transparent 65%), radial-gradient(ellipse at 80% 30%, rgba(182,255,32,0.06) 0%, transparent 55%)",
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
              <p className="font-display font-semibold text-xl mb-1 transition-colors group-hover:text-[#B6FF20]" style={{ color: "#F2F7F3" }}>
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
              <p className="font-display font-semibold text-xl mb-1 transition-colors group-hover:text-[#B6FF20]" style={{ color: "#F2F7F3" }}>
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
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
