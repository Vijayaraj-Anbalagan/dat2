'use client';

import { useState, useEffect } from 'react';

interface Announcement {
  label: string;
  message: React.ReactNode;
  link?: string;
}

const announcements: Announcement[] = [
  {
    label: 'MISSION UPDATE',
    message: (
      <>
        <strong>Pre-Seed Investment</strong> Secured &nbsp;•&nbsp; <strong>HAPS</strong> Ecosystem Expansion
      </>
    ),
    link: '#contact',
  },
  {
    label: 'INVESTOR UPDATE',
    message: (
      <>
        <strong>Dashagriv Aerospace</strong> enters next phase &nbsp;•&nbsp; India&rsquo;s first <strong>HAPS</strong> startup
      </>
    ),
    link: '#about',
  },
  {
    label: 'NEWS // 01',
    message: (
      <>
        <strong>Strategic partnerships</strong> established &nbsp;•&nbsp; Team expanding across <strong>engineering</strong>
      </>
    ),
    link: '/team',
  },
];

const AnnouncementTicker = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % announcements.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = announcements[currentIdx];

  return (
    <div
      className="ticker-bar"
      role="marquee"
      aria-label="Latest announcements"
      aria-live="polite"
    >
      {/* Left — Status + Label */}
      <div className="ticker-label-wrap">
        <span className="ticker-dot" aria-hidden="true" />
        <span className="ticker-label-text">{current.label}</span>
      </div>

      {/* Centre — Minimal rolling text */}
      <div className="ticker-marquee-wrap">
        <div className="ticker-fade-left" aria-hidden="true" />
        <div className="ticker-track" aria-hidden="true">
          <span className="ticker-text">{current.message}&nbsp;&nbsp;&mdash;&nbsp;&nbsp;</span>
          <span className="ticker-text">{current.message}&nbsp;&nbsp;&mdash;&nbsp;&nbsp;</span>
          <span className="ticker-text">{current.message}&nbsp;&nbsp;&mdash;&nbsp;&nbsp;</span>
          <span className="ticker-text">{current.message}&nbsp;&nbsp;&mdash;&nbsp;&nbsp;</span>
        </div>
        <div className="ticker-fade-right" aria-hidden="true" />
      </div>

      {/* Right — CTA */}
      {current.link && (
        <a href={current.link} className="ticker-cta" aria-label="Learn more">
          Learn More&nbsp;<span className="ticker-arrow">→</span>
        </a>
      )}
    </div>
  );
};

export default AnnouncementTicker;
