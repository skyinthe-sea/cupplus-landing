"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-8">
            <Smartphone size={14} className="text-coral-light" />
            <span className="text-sm text-gray-300">iOS & Android 지원</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            지금 바로{" "}
            <span className="bg-gradient-to-r from-coral-light to-rose bg-clip-text text-transparent">
              cup+
            </span>
            를<br />시작하세요
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
            무료로 가입하고, 프로필 마켓에서 새로운 매칭 기회를 발견하세요.
            매니저님의 매칭 업무가 달라집니다.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="#"
              className="group flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-6 py-4 hover:bg-white/15 transition-all"
            >
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-gray-400 leading-none">
                  Download on the
                </div>
                <div className="text-base font-semibold text-white leading-tight">
                  App Store
                </div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="group flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-6 py-4 hover:bg-white/15 transition-all"
            >
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.2 12.695l2.498-3.187zM5.864 2.658L16.8 9.59l-2.498 2.498L5.864 2.658z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-gray-400 leading-none">
                  GET IT ON
                </div>
                <div className="text-base font-semibold text-white leading-tight">
                  Google Play
                </div>
              </div>
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            출시 준비 중입니다. 곧 만나보실 수 있어요!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
