"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/screenshots/home.png",
    badge: "Dashboard",
    title: "한눈에 보는\n매칭 대시보드",
    desc: "새로운 인연이 기다리고 있어요.\n직관적인 대시보드로 오늘의 매칭 현황을 실시간으로 확인하세요.",
    gradient: "from-coral/30 to-rose/20",
    accent: "bg-coral",
    glowColor: "bg-coral/20",
  },
  {
    image: "/screenshots/members.png",
    badge: "CRM",
    title: "체계적인\n회원 관리",
    desc: "성과 분석부터 성비 현황까지.\n엑셀 없이도 데이터 기반의 스마트한 회원 관리가 가능합니다.",
    gradient: "from-violet/30 to-purple-400/20",
    accent: "bg-violet",
    glowColor: "bg-violet/20",
  },
  {
    image: "/screenshots/matching.png",
    badge: "Matching",
    title: "매칭 성과를\n실시간으로",
    desc: "응답률, 성공률, 평균 응답시간까지.\n매칭의 모든 과정을 놓치지 않고 추적합니다.",
    gradient: "from-amber-400/30 to-orange-300/20",
    accent: "bg-amber-500",
    glowColor: "bg-amber-400/20",
  },
  {
    image: "/screenshots/chat.png",
    badge: "Chat",
    title: "매끄러운 소통,\n빠른 성사",
    desc: "매칭부터 일정 조율까지 하나의 채팅방에서.\n만남의 순간까지 cup+가 함께합니다.",
    gradient: "from-blue-400/30 to-cyan-300/20",
    accent: "bg-blue-500",
    glowColor: "bg-blue-400/20",
  },
  {
    image: "/screenshots/schedule.png",
    badge: "Schedule",
    title: "만남 일정,\n깔끔하게",
    desc: "확정된 일정을 캘린더에서 한눈에.\n장소, 시간, 참여자 정보까지 한 번에 확인하세요.",
    gradient: "from-emerald-400/30 to-teal-300/20",
    accent: "bg-emerald-500",
    glowColor: "bg-emerald-400/20",
  },
];

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[260px] sm:w-[280px] md:w-[300px] h-[540px] sm:h-[580px] md:h-[620px]">
      <div className="absolute inset-0 rounded-[3rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-[22px] rounded-full bg-black z-20" />
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({
  slide,
  index,
}: {
  slide: (typeof slides)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isEven = index % 2 === 0;

  // Parallax for phone
  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [120, 0, -60]);
  const phoneRotate = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [isEven ? 8 : -8, 0, 0, isEven ? -4 : 4]
  );
  const phoneScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.85, 1, 1, 0.95]);

  // Text animation
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.3, 0.7, 0.95], [0, 1, 1, 0]);
  const textX = useTransform(
    scrollYProgress,
    [0.05, 0.3, 0.7, 0.95],
    [isEven ? -60 : 60, 0, 0, isEven ? -30 : 30]
  );

  // Background glow
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 0.6, 0.6, 0]);
  const glowScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.5, 1.2, 0.5]);

  return (
    <div ref={ref} className="relative py-16 md:py-32">
      {/* Background glow */}
      <motion.div
        style={{ opacity: glowOpacity, scale: glowScale }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${slide.glowColor} rounded-full blur-[100px] pointer-events-none`}
      />

      <div
        className={`relative z-10 mx-auto max-w-6xl px-6 flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-12 md:gap-20`}
      >
        {/* Text */}
        <motion.div
          style={{ opacity: textOpacity, x: textX }}
          className="flex-1 text-center md:text-left"
        >
          <motion.span
            className={`inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-white px-4 py-1.5 rounded-full ${slide.accent} mb-6 shadow-lg`}
          >
            {slide.badge}
          </motion.span>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight whitespace-pre-line">
            {slide.title}
          </h3>

          <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed whitespace-pre-line max-w-md mx-auto md:mx-0">
            {slide.desc}
          </p>

          <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
            <span className="text-6xl font-black text-coral/10">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-gray-300 font-medium">
              / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          style={{
            y: phoneY,
            rotateZ: phoneRotate,
            scale: phoneScale,
          }}
          className="flex-shrink-0 relative"
        >
          {/* Glow ring behind phone */}
          <div
            className={`absolute -inset-8 bg-gradient-to-br ${slide.gradient} rounded-[4rem] blur-2xl opacity-50`}
          />

          <PhoneFrame>
            <Image
              src={slide.image}
              alt={slide.badge}
              fill
              className="object-cover object-top"
              sizes="300px"
            />
          </PhoneFrame>

          {/* Reflection */}
          <div
            className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 ${slide.glowColor} rounded-full blur-2xl`}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section id="app-showcase" className="relative overflow-hidden">
      {/* Section header */}
      <div className="text-center pt-24 sm:pt-32 pb-4 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-coral uppercase tracking-widest">
            App Preview
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            이런 화면을 만나게 됩니다
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            cup+의 핵심 기능을 직접 확인하세요.
          </p>
        </motion.div>
      </div>

      {/* Cards */}
      {slides.map((slide, i) => (
        <ShowcaseCard key={i} slide={slide} index={i} />
      ))}
    </section>
  );
}
