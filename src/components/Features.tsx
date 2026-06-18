"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  MessageCircle,
  ShieldCheck,
  BarChart3,
  Search,
  FileSignature,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "프로필 마켓",
    desc: "타 매니저의 회원 프로필을 실시간으로 탐색하세요. 나이, 직업, 학력, 지역 등 상세 필터로 최적의 매칭 상대를 빠르게 찾을 수 있습니다.",
    gradient: "from-coral to-coral-light",
  },
  {
    icon: Users,
    title: "원클릭 매칭",
    desc: "마음에 드는 프로필을 발견하면 버튼 하나로 매칭을 요청하세요. 상대 매니저에게 즉시 알림이 전달되고, 수락 시 바로 대화가 시작됩니다.",
    gradient: "from-violet to-purple-400",
  },
  {
    icon: MessageCircle,
    title: "실시간 채팅",
    desc: "매칭이 성사되면 매니저끼리 바로 대화할 수 있어요. 이미지 공유, 읽음 확인까지 지원하여 빠르고 정확한 소통이 가능합니다.",
    gradient: "from-rose to-pink-400",
  },
  {
    icon: ShieldCheck,
    title: "매니저 자격 검증",
    desc: "재직증명서, 명함, 사업자등록증 등 문서 기반으로 매니저 자격을 검증해 신뢰할 수 있는 매니저 네트워크를 만듭니다. 검증 뱃지로 한눈에 확인할 수 있습니다.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: BarChart3,
    title: "CRM 대시보드",
    desc: "회원 등록부터 매칭 현황, 일정 관리까지 한 화면에서. 더 이상 엑셀이 필요 없습니다. 체계적인 회원 관리가 가능합니다.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: FileSignature,
    title: "전자 계약 & 서명",
    desc: "서비스 동의서를 앱 내에서 바로 작성하고, 디지털 서명으로 법적 효력까지. 종이 서류 없이 깔끔하게 처리하세요.",
    gradient: "from-blue-500 to-cyan-400",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-coral uppercase tracking-widest">
            Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            매칭 업무의 모든 것,<br />
            <span className="text-coral">cup+</span> 하나로
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            전화와 엑셀 대신, 스마트한 매칭 플랫폼으로 업무 효율을 극대화하세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coral/[0.03] to-violet/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
