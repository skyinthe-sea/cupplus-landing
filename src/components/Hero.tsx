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

        {/* Floating phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 relative mx-auto max-w-sm"
        >
          <div className="animate-float">
            <div className="relative mx-auto w-64 h-[500px] rounded-[3rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden">
              {/* Phone screen content */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-warm-bg to-white">
                {/* Status bar */}
                <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-gray-500">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3.5 h-1.5 rounded-sm bg-gray-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  </div>
                </div>

                {/* App header */}
                <div className="px-5 pt-2 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-coral to-coral-light flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">c+</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">프로필 마켓</span>
                  </div>
                </div>

                {/* Search bar */}
                <div className="px-5 pb-3">
                  <div className="h-8 rounded-xl bg-gray-100 flex items-center px-3">
                    <div className="w-3 h-3 rounded-full border-2 border-gray-300" />
                    <span className="ml-2 text-[9px] text-gray-400">이름, 직업, 지역 검색</span>
                  </div>
                </div>

                {/* Tab bar */}
                <div className="px-5 pb-3 flex gap-2">
                  {["전체", "여성", "남성", "관심"].map((tab, i) => (
                    <div
                      key={tab}
                      className={`px-3 py-1 rounded-full text-[9px] font-medium ${
                        i === 0
                          ? "bg-coral text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {tab}
                    </div>
                  ))}
                </div>

                {/* Profile cards */}
                <div className="px-5 space-y-2.5">
                  {[
                    { name: "김O연", age: 28, job: "변호사", loc: "서울 강남", verified: true },
                    { name: "이O준", age: 32, job: "외과의", loc: "서울 서초", verified: true },
                    { name: "박O은", age: 29, job: "디자이너", loc: "경기 판교", verified: false },
                  ].map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center gap-3 p-2.5 rounded-2xl bg-white shadow-sm border border-gray-100"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral/30 to-violet/30 flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-semibold text-gray-600">
                          {p.name[0]}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-semibold text-gray-900">
                            {p.name}
                          </span>
                          {p.verified && (
                            <span className="text-[7px] text-coral">&#10003;</span>
                          )}
                          <span className="text-[9px] text-gray-400 ml-auto">
                            {p.age}세
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-[8px] text-gray-500">{p.job}</span>
                          <span className="text-[8px] text-gray-300">|</span>
                          <span className="text-[8px] text-gray-500">{p.loc}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black" />
            </div>
          </div>

          {/* Glow under phone */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-coral/20 rounded-full blur-3xl" />
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
