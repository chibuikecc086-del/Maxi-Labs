// ─── Why Us (three genuinely distinct cards — one inverted bright, playful stickers/blobs, Phantom-style contrast without breaking brand)

function WhyUs() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Card 1 — Web3-native pedigree. Scattered organic blobs, tilted pills, centerpiece icon */}
          <div
            className="rounded-[28px] p-9 flex flex-col justify-between min-h-[460px] relative overflow-hidden"
            style={{
              background: "#0B1F16",
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(14px)",
              transition: "opacity 0.55s 0.05s, transform 0.55s 0.05s",
            }}
          >
            <h3 className="font-display font-bold text-[28px] leading-[1.15] tracking-tight max-w-[230px] relative z-10" style={{ color: "#F2F7F3" }}>
              Built by people who&rsquo;ve lived in Web3 since it began.
            </h3>

            {/* Scattered organic cluster */}
            <div className="relative flex-1 mt-4" style={{ minHeight: 230 }}>
              {/* Organic color blobs */}
              <div className="absolute top-2 left-6 w-5 h-5 rounded-full" style={{ background: "#20C66B" }} />
              <div className="absolute top-0 right-16 w-10 h-14 rounded-full" style={{ background: "rgba(182,255,32,0.35)", transform: "rotate(20deg)" }} />
              <div className="absolute bottom-8 left-0 w-16 h-16 rounded-full" style={{ background: "rgba(32,198,107,0.3)" }} />
              <div className="absolute bottom-2 right-4 w-8 h-8 rounded-full" style={{ background: "#0B5D38" }} />

              {/* Centerpiece icon, like Phantom's mascot square */}
              <div
                className="absolute left-1/2 top-8 w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: "#B6FF20", transform: "translateX(-50%) rotate(-3deg)", boxShadow: "0 12px 30px rgba(182,255,32,0.25)" }}
              >
                <LogoMark size={44} />
              </div>

              {/* Tilted pill labels, real background — not invented */}
              <div
                className="absolute top-6 left-0 flex items-center gap-1.5 rounded-full px-3.5 py-2 bg-[#0F241A]"
                style={{ transform: "rotate(-8deg)" }}
              >
                <span className="text-xs font-semibold" style={{ color: "#F2F7F3" }}>DeFi OGs</span>
              </div>

              <div
                className="absolute top-24 right-0 flex items-center gap-1.5 rounded-full px-3.5 py-2 bg-[#0F241A]"
                style={{ transform: "rotate(6deg)" }}
              >
                <span className="text-xs font-semibold" style={{ color: "#F2F7F3" }}>NFT builders</span>
              </div>

              <div
                className="absolute bottom-0 left-4 flex items-center gap-1.5 rounded-full px-3.5 py-2 bg-[#0F241A]"
                style={{ transform: "rotate(4deg)" }}
              >
                <span className="text-xs font-semibold" style={{ color: "#F2F7F3" }}>DAO contributors</span>
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
              background: "#B6FF20",
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(14px)",
              transition: "opacity 0.55s 0.15s, transform 0.55s 0.15s",
            }}
          >
            <h3 className="font-display font-bold text-[28px] leading-[1.15] tracking-tight max-w-[220px] relative z-10" style={{ color: "#07110E" }}>
              Onboarding measured in days, not weeks.
            </h3>

            {/* Scattered sticker cluster, Phantom-style */}
            <div className="relative flex-1 mt-6" style={{ minHeight: 220 }}>
              <div
                className="absolute top-2 left-2 flex items-center gap-2 rounded-full px-4 py-2 bg-[#07110E]"
                style={{ transform: "rotate(-6deg)" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#20C66B]" />
                <span className="text-sm font-medium" style={{ color: "#F2F7F3" }}>Brief received</span>
              </div>

              <div
                className="absolute top-16 right-0 flex items-center gap-2 rounded-full px-4 py-2 bg-[#07110E]"
                style={{ transform: "rotate(4deg)" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#20C66B]" />
                <span className="text-sm font-medium" style={{ color: "#F2F7F3" }}>Team deployed</span>
              </div>

              {/* Central icon circle */}
              <div
                className="absolute left-1/2 top-1/2 w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "#07110E", transform: "translate(-50%, -50%) rotate(-3deg)" }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h14M12 6l6 6-6 6" stroke="#B6FF20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div
                className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-4 py-2"
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
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(14px)",
              transition: "opacity 0.55s 0.25s, transform 0.55s 0.25s",
            }}
          >
            <h3 className="font-display font-bold text-[28px] leading-[1.15] tracking-tight max-w-[230px]" style={{ color: "#F2F7F3" }}>
              No long lock-ins. Stay because it works.
            </h3>

            <div className="relative flex-1 mt-6" style={{ minHeight: 220 }}>
              {/* Tilted "ticket" pills, Phantom-yes/no inspired but on-brand */}
              <div
                className="absolute top-4 left-0 flex items-center gap-2 rounded-2xl px-5 py-3"
                style={{ background: "#B6FF20", transform: "rotate(-7deg)", boxShadow: "0 10px 24px rgba(182,255,32,0.2)" }}
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
