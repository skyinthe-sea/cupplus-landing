"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUp, List, X } from "lucide-react";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  effectiveDate: string;
  sections: LegalSection[];
};

export default function LegalShell({
  eyebrow,
  title,
  subtitle,
  effectiveDate,
  sections,
}: Props) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [tocOpen, setTocOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
    setTocOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-warm-bg">
      {/* Ambient gradient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-coral/20 to-rose/10 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-violet/15 to-coral-light/10 blur-3xl animate-float" />
      </div>

      {/* Top bar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-40 glass border-b border-white/40"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-coral"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            홈으로
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-coral to-coral-light">
              <span className="text-xs font-bold text-white">c+</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              cup<span className="text-coral">+</span>
            </span>
          </Link>
          <button
            onClick={() => setTocOpen(true)}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-coral/40 hover:text-coral lg:hidden"
          >
            <List size={14} /> 목차
          </button>
          <div className="hidden w-20 lg:block" />
        </div>
      </motion.header>

      <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-12 lg:pt-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-coral uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            {eyebrow}
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3 text-xs text-gray-500">
            <span className="rounded-full bg-white/60 px-3 py-1 backdrop-blur">
              시행일 · {effectiveDate}
            </span>
            <span className="rounded-full bg-white/60 px-3 py-1 backdrop-blur">
              지서지유
            </span>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* TOC — desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                목차
              </p>
              <nav className="relative border-l border-gray-200">
                {sections.map((s) => {
                  const active = activeId === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`relative block w-full border-l-2 -ml-px py-1.5 pl-4 text-left text-sm transition-all ${
                        active
                          ? "border-coral font-semibold text-coral"
                          : "border-transparent text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {s.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="min-w-0"
          >
            <div className="space-y-14">
              {sections.map((s, idx) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.03, 0.3) }}
                  className="scroll-mt-28"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-mono text-xs text-coral/70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-coral/30 to-transparent" />
                  </div>
                  <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {s.title}
                  </h2>
                  <div className="legal-content space-y-4 text-[15px] leading-[1.85] text-gray-700">
                    {s.content}
                  </div>
                </motion.section>
              ))}
            </div>

            <div className="mt-20 rounded-2xl border border-gray-200/80 bg-white/60 p-6 backdrop-blur">
              <p className="text-sm text-gray-600">
                문의 ·{" "}
                <a
                  href="mailto:myclick90@gmail.com"
                  className="font-medium text-coral hover:underline"
                >
                  myclick90@gmail.com
                </a>
              </p>
              <p className="mt-1 text-xs text-gray-400">
                공고일자 · {effectiveDate} · 시행일자 · {effectiveDate}
              </p>
            </div>
          </motion.article>
        </div>
      </div>

      {/* Mobile TOC drawer */}
      {tocOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 lg:hidden"
          onClick={() => setTocOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-warm-bg p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-900">목차</p>
              <button
                onClick={() => setTocOpen(false)}
                className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="space-y-1">
              {sections.map((s) => {
                const active = activeId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      active
                        ? "bg-coral/10 font-semibold text-coral"
                        : "text-gray-600 hover:bg-white"
                    }`}
                  >
                    {s.title}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        </motion.div>
      )}

      {/* Back to top */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-coral text-white shadow-xl shadow-coral/30 hover:bg-coral-dark"
          aria-label="맨 위로"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </div>
  );
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function OrderedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="ml-5 list-decimal space-y-2 marker:text-coral/60">
      {items.map((it, i) => (
        <li key={i} className="pl-1">
          {it}
        </li>
      ))}
    </ol>
  );
}

export function KoOrderedList({ items }: { items: ReactNode[] }) {
  const markers = ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하"];
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="shrink-0 font-mono text-xs font-semibold text-coral/70 pt-[5px]">
            {markers[i] ?? i + 1}.
          </span>
          <div className="flex-1">{it}</div>
        </li>
      ))}
    </ul>
  );
}

export function DashList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-gray-600">
          <span className="shrink-0 text-coral/50">—</span>
          <div className="flex-1">{it}</div>
        </li>
      ))}
    </ul>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-coral/20 bg-coral/5 p-4 text-sm text-gray-700">
      {children}
    </div>
  );
}

export function InfoGrid({
  rows,
}: {
  rows: { label: string; value: ReactNode }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white/60 backdrop-blur">
      <dl className="divide-y divide-gray-100">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[110px_1fr] gap-4 px-5 py-3 sm:grid-cols-[140px_1fr]">
            <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {row.label}
            </dt>
            <dd className="text-sm text-gray-800">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white/60 backdrop-blur">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/60">
              {headers.map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, ri) => (
              <tr key={ri} className="hover:bg-white/80">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-gray-700 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
