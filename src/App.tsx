import { useState, useEffect, useRef } from "react";
import logoSrc from "./imports/Gemini_Generated_Image_qmauhcqmauhcqmau.jpg";
import imgCommunity from "./imports/image.png";
import imgLaunch from "./imports/image-1.png";
import imgFeedback from "./imports/image-2.png";

// ─── Data

const services = [
  {
    title: "Community Architecture",
    desc: "We design Discord and Telegram ecosystems from first principles: roles, engagement loops, moderation systems, and ambassador programs that sustain themselves.",
  },
  {
    title: "Social Presence Engineering",
    desc: "Thread strategy, content cadence, Twitter/X growth systems, and narrative frameworks that make your project the one worth paying attention to.",
  },
  {
    title: "KOL & Influencer Ops",
    desc: "A curated network of authentic Web3 creators. We handle sourcing, briefing, coordination, and performance tracking. No spray and pray.",
  },
  {
    title: "Launch Runway Strategy",
    desc: "End-to-end pre-TGE or mint momentum building. 6 to 12 week campaign architecture designed to create organic demand on day one.",
  },
];

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

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-24 pb-20">
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full"
          style={{
            background: "radial-gradient(circle, #20C66B 0%, #0B5D38 45%, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.13,
          }}
        />
        <div
          className="orb-2 absolute top-1/4 right-1/4 w-[360px] h-[360px] rounded-full"
          style={{
            background: "radial-gradient(circle, #B6FF20 0%, #20C66B 50%, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.08,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Status badge */}
        <div className="animate-fade-up animate-delay-1">
          <span
            className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-4 py-1.5 border"
            style={{ color: "#9AADA2", borderColor: "#17352A", background: "rgba(23,53,42,0.5)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#20C66B] pulse-dot" />
            Accepting new clients
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up animate-delay-2 font-display font-extrabold text-5xl md:text-7xl lg:text-[88px] leading-[1.0] tracking-[-0.03em] max-w-4xl" style={{ color: "#F2F7F3" }}>
          Maxi Labs
          <br />
          <span className="gradient-text">Web3 Growth,</span>
          <br />
          <span style={{ color: "rgba(242,247,243,0.85)" }}>Engineered.</span>
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up animate-delay-3 text-lg md:text-xl max-w-xl leading-relaxed font-light"
          style={{ color: "#9AADA2" }}
        >
          We help Web3 creators and protocols build communities that last through authentic engagement, precise social strategy, and deep culture fluency.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up animate-delay-4 flex flex-col sm:flex-row gap-3 items-center">
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

// ─── Services

function Services() {
  const { ref, inView } = useInView();
  return (
    <section id="services" className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-8 hover-lift cursor-default group">
              <p className="text-xs font-medium mb-5 tabular-nums" style={{ color: "#17352A" }}>0{i + 1}</p>
              <h3 className="font-display font-semibold text-xl mb-3 tracking-tight transition-colors group-hover:text-[#B6FF20]" style={{ color: "#F2F7F3" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9AADA2" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Selected Work

const workCards = [
  {
    title: "Community activation",
    body: "Clear direction and structured support for active communities.",
    tags: ["Community", "Strategy", "Coordination"],
    label: "Details protected",
    img: imgCommunity,
    large: true,
  },
  {
    title: "Live launch support",
    body: "Timely support for announcements, live moments, and launch activity.",
    tags: ["Launches", "Social", "Support"],
    label: "Details protected",
    img: imgLaunch,
    large: false,
  },
  {
    title: "Client feedback",
    body: "Support built to keep conversation and content moving.",
    tags: ["Content", "X", "Instagram"],
    label: "Confidential work",
    img: imgFeedback,
    large: false,
  },
];

function WorkCard({
  card,
  className = "",
}: {
  card: (typeof workCards)[number];
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden flex flex-col cursor-default ${className}`}
      style={{ border: "1px solid #17352A", background: "#0a1912" }}
    >
      {/* Lime line — expands on hover */}
      <div
        className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full z-20"
        style={{
          background: "#B6FF20",
          transition: "width 0.55s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      {/* Image area */}
      <div className="relative overflow-hidden" style={{ flex: "1 1 0" }}>
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover object-top"
          style={{
            minHeight: card.large ? 340 : 220,
            maxHeight: card.large ? 420 : 280,
            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
        />

        {/* Dark green glass overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(7,17,14,0.82) 0%, rgba(7,17,14,0.18) 60%, transparent 100%)",
          }}
        />

        {/* Subtle lime glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(182,255,32,0.07) 0%, transparent 65%)",
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Image label */}
        <span
          className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full"
          style={{
            color: "#B6FF20",
            background: "rgba(7,17,14,0.75)",
            border: "1px solid rgba(182,255,32,0.2)",
            backdropFilter: "blur(8px)",
          }}
        >
          {card.label}
        </span>
      </div>

      {/* Text area */}
      <div className="p-6 flex flex-col gap-3" style={{ borderTop: "1px solid #17352A" }}>
        <h3
          className="font-display font-semibold tracking-tight"
          style={{ color: "#F2F7F3", fontSize: card.large ? "1.25rem" : "1.05rem" }}
        >
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#9AADA2" }}>{card.body}</p>

        {/* Tags + lime arrow */}
        <div className="flex items-center justify-between gap-3 mt-1">
          <div className="flex flex-wrap gap-1.5">
            {card.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full"
                style={{ color: "#9AADA2", border: "1px solid #17352A" }}
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Arrow — lights up on hover */}
          <div
            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
            style={{
              border: "1px solid #17352A",
              transition: "border-color 0.25s, background 0.25s",
            }}
          >
            <svg
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 12 12"
              className="group-hover:[&_path]:stroke-[#B6FF20]"
            >
              <path
                d="M2 10L10 2M10 2H5M10 2v5"
                stroke="#9AADA2"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.25s" }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectedWork() {
  const { ref, inView } = useInView();

  return (
    <section id="selected-work" className="py-28 px-6" ref={ref}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-4"
              style={{ color: "#B6FF20" }}
            >
              Selected work
            </p>
            <h2
              className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight"
              style={{ color: "#F2F7F3" }}
            >
              Work that moves
              <br />
              <span className="gradient-text">communities.</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#9AADA2" }}>
            A selection of community support, launch activity, and social coordination. Client details are protected.
          </p>
        </div>

        {/* Staggered editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Card 1 — large, spans 2 rows on the left */}
          <div
            className="lg:col-span-2 lg:row-span-2"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(16px)",
              transition: "opacity 0.6s 0.05s, transform 0.6s 0.05s",
            }}
          >
            <WorkCard card={workCards[0]} className="h-full" />
          </div>

          {/* Card 2 */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(16px)",
              transition: "opacity 0.6s 0.18s, transform 0.6s 0.18s",
            }}
          >
            <WorkCard card={workCards[1]} className="h-full" />
          </div>

          {/* Card 3 */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(16px)",
              transition: "opacity 0.6s 0.3s, transform 0.6s 0.3s",
            }}
          >
            <WorkCard card={workCards[2]} className="h-full" />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
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

// ─── What We Build

function WhatWeBuild() {
  const { ref, inView } = useInView();

  return (
    <section id="work" className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: "#20C66B" }}>Capabilities</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight" style={{ color: "#F2F7F3" }}>
              What we
              <br />
              <span className="gradient-text">build.</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#9AADA2" }}>
            Four core practice areas. Each one delivered as a system, not a one-time service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((c, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 hover-lift flex flex-col gap-6"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(12px)",
                transition: `opacity 0.5s ${i * 0.08}s, transform 0.5s ${i * 0.08}s`,
              }}
            >
              <div>
                <p className="text-xs font-medium tabular-nums mb-3" style={{ color: "#17352A" }}>{c.n}</p>
                <h3 className="font-display font-semibold text-xl mb-3 tracking-tight" style={{ color: "#F2F7F3" }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9AADA2" }}>{c.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
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
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process

function Process() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: "#20C66B" }}>How we work</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight" style={{ color: "#F2F7F3" }}>
            A process built
            <br />
            <span className="gradient-text">for real results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 flex flex-col gap-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(12px)",
                transition: `opacity 0.6s ${i * 0.1}s, transform 0.6s ${i * 0.1}s`,
              }}
            >
              <p className="text-xs tabular-nums font-medium" style={{ color: "#17352A" }}>{step.n}</p>
              <h3 className="font-display font-semibold text-lg tracking-tight" style={{ color: "#F2F7F3" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9AADA2" }}>{step.desc}</p>
            </div>
          ))}
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
        <SelectedWork />
        <Services />
        <WhatWeBuild />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
