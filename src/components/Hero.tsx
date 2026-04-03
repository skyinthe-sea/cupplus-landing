"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-rose/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #c8523a 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-coral/20 bg-coral/5 px-4 py-2 mb-8">
            <Sparkles size={14} className="text-coral" />
            <span className="text-sm font-medium text-coral">
              전문 매칭 매니저를 위한 플랫폼
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]"
        >
          매칭의{" "}
          <span className="bg-gradient-to-r from-coral via-rose to-violet bg-clip-text text-transparent animate-gradient">
            새로운 기준
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          커플매니저끼리 회원 프로필을 공유하고, 실시간으로 최적의 매칭을
          성사시키세요. <strong className="text-gray-700">cup+</strong>가
          매니저님의 매칭 업무를 혁신합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#download"
            className="group relative rounded-full bg-coral px-8 py-4 text-base font-semibold text-white shadow-xl shadow-coral/25 hover:shadow-2xl hover:shadow-coral/30 transition-all hover:-translate-y-0.5"
          >
            <span className="relative z-10">무료로 시작하기</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-coral to-coral-light opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#features"
            className="rounded-full border border-gray-200 bg-white/60 px-8 py-4 text-base font-semibold text-gray-700 hover:border-coral/30 hover:text-coral transition-all"
          >
            기능 살펴보기
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <a href="#problem" className="inline-flex flex-col items-center text-gray-400 hover:text-coral transition-colors">
            <span className="text-xs mb-2">더 알아보기</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
