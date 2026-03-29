import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-14 bg-[#1E1B4B] flex items-center px-4 gap-4 shrink-0">
      {/* Logo + workspace selector */}
      <div className="flex items-center gap-3 min-w-[220px]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth={2.5}>
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-white font-semibold text-[15px]">Worcspace</span>
        </div>

        <button className="flex items-center gap-1 bg-white/10 hover:bg-white/15 transition-colors rounded-md px-3 py-1.5">
          <span className="text-white text-sm">Worcspace 1</span>
          <ChevronDown size={14} className="text-white/70" />
        </button>
      </div>

      {/* Search */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 w-full max-w-md">
          <Search size={15} className="text-white/50 shrink-0" />
          <span className="text-white/40 text-sm flex-1">Search...</span>
          <span className="text-white/30 text-xs border border-white/20 rounded px-1.5 py-0.5">⌘K</span>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 ml-auto">
        <button className="p-1.5 rounded-md hover:bg-white/10 transition-colors">
          <Bell size={18} className="text-white/70" />
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-semibold">
          GK
        </div>
      </div>
    </header>
  );
}
