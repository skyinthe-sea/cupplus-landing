"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-coral-light flex items-center justify-center">
              <span className="text-white font-bold text-xs">c+</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              cup<span className="text-coral-light">+</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <Link
              href="/terms"
              onClick={() => sessionStorage.setItem("cupplus-from-home", "1")}
              className="hover:text-white transition-colors"
            >
              이용약관
            </Link>
            <Link
              href="/privacy"
              onClick={() => sessionStorage.setItem("cupplus-from-home", "1")}
              className="hover:text-white transition-colors"
            >
              개인정보처리방침
            </Link>
            <Link
              href="/account-deletion"
              onClick={() => sessionStorage.setItem("cupplus-from-home", "1")}
              className="hover:text-white transition-colors"
            >
              계정 삭제
            </Link>
            <a
              href="mailto:myclick90@gmail.com"
              className="hover:text-white transition-colors"
            >
              고객지원
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600 space-y-3">
          <div className="space-y-1 leading-relaxed">
            <p>상호: 지서지유 · 대표자: 임준섭 · 사업자등록번호: 660-72-00677</p>
            <p>통신판매업 신고: 제2026-의정부흥선-0301호</p>
            <p>주소: 경기도 의정부시 회룡로 111 한신아파트 1동 801호</p>
            <p>대표전화: 010-5402-7908 · 이메일: myclick90@gmail.com</p>
          </div>
          <p>&copy; {new Date().getFullYear()} cup+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
