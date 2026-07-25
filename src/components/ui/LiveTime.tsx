"use client";

import { useEffect, useState } from "react";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function LiveTime({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!now) {
    return (
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.18em] text-canopux-silver ${className}`}
        aria-hidden
      >
        —:—:— IST
      </p>
    );
  }

  return (
    <p
      className={`font-mono text-[10px] uppercase tracking-[0.18em] text-canopux-silver ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="text-canopux-white/90">{formatTime(now)}</span>
      <span className="mx-2 text-canopux-line">·</span>
      <span>IST</span>
    </p>
  );
}
