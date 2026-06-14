"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const announcements = [
  {
    label: "Milestone",
    text: (
      <>
        Mid-sea stratospheric trials off Nagapattinam coast — supported by
        Indian Coast Guard &amp; Navy
      </>
    ),
    link: {
      href: "https://www.linkedin.com/posts/dashagriv-aerospace_dashagrivaerospace-haps-nearspace-activity-7455941013778386944--KAw",
      text: "View on LinkedIn",
    },
  },
  {
    label: "Breaking",
    text: <>Dashagriv secured its Pre-Seed fund from InnoSphere Ventures</>,
    link: {
      href: "https://www.linkedin.com/posts/dashagriv-aerospace_dashagrivaerospace-haps-india-activity-7462489311913922560-N28Z",
      text: "View on LinkedIn",
    },
  },
];

export default function AnnouncementTicker() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    document.documentElement.classList.add("ticker-gone");
    setVisible(false);
  };

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % announcements.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  const ann = announcements[current];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="ticker-bar"
          initial={{ height: 44, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          {/*
           * ── LEFT BLOCK ──────────────────────────────────────────────────────
           * Keeps the same `.ticker-label-wrap` structure (border-right, padding).
           * Inside: circle-X dismiss button  +  label text ("Milestone" / "Breaking")
           *
           * The dot (.ticker-dot) is REMOVED — replaced by the circle-X button.
           */}
          <div className="ticker-label-wrap" style={{ gap: 8 }}>
            {/* Circle-X close button */}
            <button
              onClick={handleClose}
              aria-label="Dismiss announcement"
              style={{
                cursor: "pointer",
                background: "none",
                padding: 0,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.25)",
                flexShrink: 0,
                opacity: 0.5,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.opacity = "1")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.opacity = "0.5")
              }
            >
              <X
                style={{ width: 9, height: 9, color: "rgba(255,255,255,0.9)" }}
              />
            </button>

            {/* Label text — animates with each announcement */}
            <AnimatePresence mode="wait">
              <motion.span
                key={`label-${current}`}
                className="ticker-label-text hidden sm:inline"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {ann.label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* ── CENTRE: message ──────────────────────────────────────────────── */}
          <div className="flex-1 overflow-hidden px-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={`text-${current}`}
                className="ticker-text text-center"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {ann.text}
              </motion.p>
            </AnimatePresence>
          </div>

          {/*
           * ── RIGHT CTA ───────────────────────────────────────────────────────
           * Desktop (md+):  full text link  +  → arrow   (ticker-cta class)
           * Mobile (< md):  just the ArrowUpRight icon, no text
           *
           * Both are links to the same href.
           */}
          <AnimatePresence mode="wait">
            <motion.a
              key={`cta-${current}`}
              href={ann.link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ textDecoration: "none" }}
            >
              {/* Desktop: full CTA label + arrow */}
              <span className="ticker-cta hidden md:flex">
                {ann.link.text}
                <span className="ticker-arrow">→</span>
              </span>

              {/* Mobile: arrow icon only */}
              <span
                className="md:hidden flex items-center justify-center"
                style={{
                  height: "100%",
                  padding: "0 14px",
                  borderLeft: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <ArrowUpRight style={{ width: 14, height: 14 }} />
              </span>
            </motion.a>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
