"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "무료",
    period: "",
    desc: "cup+를 처음 시작하는 매니저",
    features: [
      "일 3회 매칭 요청",
      "최대 3명 회원 관리",
      "프로필 마켓 탐색",
      "기본 필터링",
      "실시간 채팅",
    ],
    cta: "무료로 시작",
    popular: false,
    gradient: "",
  },
  {
    name: "Standard",
    price: "₩29,900",
    period: "/월",
    desc: "본격적으로 매칭하는 매니저",
    icon: Zap,
    features: [
      "일 30회 매칭 요청",
      "최대 5명 회원 관리",
      "고급 필터 프리셋",
      "검증 뱃지 우선 노출",
      "매칭 통계 대시보드",
      "우선 고객 지원",
    ],
    cta: "Standard 시작",
    popular: true,
    gradient: "from-coral to-coral-light",
  },
  {
    name: "Gold",
    price: "₩59,900",
    period: "/월",
    desc: "대량 매칭을 진행하는 매니저",
    icon: Crown,
    features: [
      "무제한 매칭 요청",
      "최대 10명 회원 관리",
      "모든 Standard 기능",
      "AI 추천 매칭 (예정)",
      "전용 매니저 지원",
      "맞춤 리포트",
    ],
    cta: "Gold 시작",
    popular: false,
    gradient: "from-amber-500 to-yellow-400",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-coral uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            매니저님에게 맞는 요금제
          </h2>
          <p className="mt-4 text-gray-500">
            무료로 시작하고, 필요에 따라 업그레이드하세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-gray-900 text-white shadow-2xl shadow-gray-900/20 scale-[1.02] lg:scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-coral to-coral-light px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                  가장 인기
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  {plan.icon && (
                    <plan.icon
                      size={18}
                      className={plan.popular ? "text-coral-light" : "text-coral"}
                    />
                  )}
                  <h3
                    className={`text-lg font-semibold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={
                        plan.popular ? "text-gray-400" : "text-gray-500"
                      }
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    plan.popular ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.popular
                          ? "bg-coral/20"
                          : "bg-coral/10"
                      }`}
                    >
                      <Check
                        size={12}
                        className={
                          plan.popular ? "text-coral-light" : "text-coral"
                        }
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`block text-center rounded-full py-3.5 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-coral text-white hover:bg-coral-light shadow-lg shadow-coral/30"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
