"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Search, Handshake, MessageCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "회원 등록",
    desc: "5단계 간편 폼으로 회원 프로필을 등록하세요. 자동 임시저장으로 중간에 멈춰도 안심.",
  },
  {
    num: "02",
    icon: Search,
    title: "프로필 탐색",
    desc: "프로필 마켓에서 타 매니저의 회원을 탐색하고, 관심 표시로 후보를 모아두세요.",
  },
  {
    num: "03",
    icon: Handshake,
    title: "매칭 요청",
    desc: "적합한 상대를 찾으면 원클릭 매칭 요청. 상대 매니저에게 즉시 알림이 전송됩니다.",
  },
  {
    num: "04",
    icon: MessageCircle,
    title: "소통 & 성사",
    desc: "매칭 수락 후 실시간 채팅으로 세부 조율. 미팅 일정을 잡고 매칭을 완성하세요.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-gradient-to-b from-warm-bg via-white to-warm-bg relative">
      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-coral uppercase tracking-widest">
            How it works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            4단계로 완성되는 매칭
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-coral/20 via-coral/40 to-coral/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 rounded-full bg-coral/10 animate-pulse-glow" style={{ animationDelay: `${i * 0.5}s` }} />
                  <div className="relative w-full h-full rounded-full bg-white border-2 border-coral/30 flex items-center justify-center shadow-lg">
                    <step.icon size={28} className="text-coral" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-coral text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.num}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
