"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneOff, Clock, FolderOpen, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "끝없는 전화 & 카톡",
    desc: "프로필 확인 하나에도 매니저끼리 전화, 카톡 수십 통. 시간만 낭비됩니다.",
  },
  {
    icon: FolderOpen,
    title: "엑셀로 관리하는 회원 정보",
    desc: "수백 명의 회원 정보를 엑셀과 종이로 관리하며 실수가 반복됩니다.",
  },
  {
    icon: Clock,
    title: "느린 매칭 프로세스",
    desc: "프로필 확인부터 성사까지 며칠씩 걸리는 비효율적인 업무 흐름.",
  },
  {
    icon: TrendingDown,
    title: "제한된 매칭 풀",
    desc: "본인 회원끼리만 매칭하니 선택지가 좁고, 성사율이 떨어집니다.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-coral uppercase tracking-widest">
            Problem
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            기존 매칭 업무,<br />이대로 괜찮으신가요?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-coral/20 hover:shadow-lg hover:shadow-coral/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-coral/10 transition-colors">
                <item.icon size={22} className="text-red-400 group-hover:text-coral transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
