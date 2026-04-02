"use client";

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
            <a href="#" className="hover:text-white transition-colors">
              이용약관
            </a>
            <a href="#" className="hover:text-white transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-white transition-colors">
              고객지원
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} cup+. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
