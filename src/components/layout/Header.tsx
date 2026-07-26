"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site";

const SCROLL_THRESHOLD = 72;

function NavLinks({
  pathname,
  onNavigate,
  className = "",
}: {
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <>
      {siteConfig.nav.map((item) => {
        const external = "external" in item && item.external;
        const active =
          !external &&
          (pathname === item.href || pathname.startsWith(`${item.href}/`));
        const classes = `${className} ${
          active
            ? "text-canopux-white"
            : "text-canopux-white/75 hover:text-canopux-white"
        }`;

        if (external) {
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={classes}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={classes}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

function MenuButton({
  open,
  onClick,
  controls,
}: {
  open: boolean;
  onClick: () => void;
  controls: string;
}) {
  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-canopux-white transition-colors hover:bg-white/10"
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <span className="sr-only">Menu</span>
      <span aria-hidden className="flex flex-col gap-1.5">
        <span
          className={`block h-px w-4 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
        />
        <span
          className={`block h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-px w-4 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
        />
      </span>
    </button>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const topHeaderRef = useRef<HTMLElement>(null);
  const floatingHeaderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const top = topHeaderRef.current;
    const floating = floatingHeaderRef.current;
    if (top) {
      if (scrolled) top.setAttribute("inert", "");
      else top.removeAttribute("inert");
    }
    if (floating) {
      if (!scrolled) floating.setAttribute("inert", "");
      else floating.removeAttribute("inert");
    }
  }, [scrolled]);

  return (
    <>
      {/* Hero / top-of-page nav, transparent; pages live in a right-side panel */}
      <header
        ref={topHeaderRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "pointer-events-none -translate-y-2 opacity-0"
            : "pointer-events-auto translate-y-0 opacity-100"
        }`}
      >
        <div className="relative mx-auto flex h-14 max-w-[90rem] items-center justify-between gap-4 px-5 mt-[max(0.75rem,env(safe-area-inset-top))] sm:mt-[max(1.75rem,env(safe-area-inset-top))] sm:h-16 sm:px-8 lg:mt-[max(2rem,env(safe-area-inset-top))] lg:px-10">
          <Logo variant="dark" priority className="shrink-0" />

          <div className="relative flex shrink-0 items-center gap-3 sm:gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden font-sans text-[13px] font-medium tracking-wide text-canopux-white/80 transition-colors hover:text-canopux-white xl:inline"
            >
              {siteConfig.email}
            </a>
            <MenuButton
              open={open && !scrolled}
              onClick={() => setOpen((value) => !value)}
              controls="hero-mobile-nav"
            />

            <div
              id="hero-mobile-nav"
              className={`absolute right-0 top-[calc(100%+0.75rem)] w-[min(18rem,calc(100vw-2.5rem))] overflow-hidden rounded-xl border border-white/10 bg-[#141414]/95 shadow-[0_16px_48px_rgba(0,0,0,0.55)] backdrop-blur-xl ${
                open && !scrolled ? "block" : "hidden"
              }`}
            >
              <nav aria-label="Primary" className="flex flex-col p-2">
                <NavLinks
                  pathname={pathname}
                  onNavigate={closeMenu}
                  className="rounded-lg px-3 py-3 font-sans text-[14px] font-medium tracking-wide transition-colors hover:bg-white/5"
                />
                <div className="mt-1 border-t border-white/10 p-2 pt-3">
                  <a
                    href={siteConfig.whatsappUrl}
                    onClick={closeMenu}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-canopux-white px-4 py-2.5 text-[13px] font-semibold text-canopux-black"
                  >
                    Let&apos;s build
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Floating glass island, appears after scroll */}
      <header
        ref={floatingHeaderRef}
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
        aria-hidden={!scrolled}
      >
        <div className="pointer-events-auto mx-auto w-full max-w-[56rem] px-4 pt-[max(1rem,calc(env(safe-area-inset-top)+0.35rem))] sm:max-w-[60rem] sm:px-5 sm:pt-[max(1.25rem,calc(env(safe-area-inset-top)+0.5rem))] lg:max-w-[64rem] lg:px-6">
          <div className="rounded-xl border border-white/10 bg-[#1a1a1a]/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="flex h-14 items-center justify-between gap-3 px-3.5 sm:h-[3.5rem] sm:px-4">
              <Logo variant="dark" className="shrink-0" />

              <nav
                aria-label="Primary floating"
                className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8"
              >
                <NavLinks
                  pathname={pathname}
                  className="font-mono text-[10px] uppercase tracking-[0.18em] transition-opacity hover:opacity-100"
                />
              </nav>

              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={siteConfig.whatsappUrl}
                  tabIndex={scrolled ? 0 : -1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden min-h-10 items-center rounded-md bg-canopux-white px-3.5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-canopux-black transition-opacity hover:opacity-90 sm:inline-flex"
                >
                  Let&apos;s build
                </a>
                <div className="lg:hidden">
                  <MenuButton
                    open={open && scrolled}
                    onClick={() => setOpen((value) => !value)}
                    controls="float-mobile-nav"
                  />
                </div>
              </div>
            </div>

            <div
              id="float-mobile-nav"
              className={`overflow-hidden rounded-b-xl border-t border-white/10 lg:hidden ${
                open && scrolled ? "block" : "hidden"
              }`}
            >
              <nav aria-label="Mobile floating" className="flex flex-col px-3 py-3">
                <NavLinks
                  pathname={pathname}
                  onNavigate={closeMenu}
                  className="rounded-md px-2 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-white/85 hover:bg-white/5 hover:text-canopux-white"
                />
                <a
                  href={siteConfig.whatsappUrl}
                  onClick={closeMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-canopux-white px-3.5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-canopux-black"
                >
                  Let&apos;s build
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
