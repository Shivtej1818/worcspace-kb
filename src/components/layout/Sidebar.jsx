import React from "react";
import {
  Cpu, Bot, LayoutPanelLeft, Briefcase, Monitor,
  List, Zap, Square, SquarePlay, Shield, BookOpen,
  BarChart2, CreditCard, Settings2,
} from "lucide-react";
import { navItems } from "../../data/mockData";

const iconMap = {
  cpu: Cpu, bot: Bot, "layout-panel-left": LayoutPanelLeft,
  briefcase: Briefcase, monitor: Monitor, list: List,
  zap: Zap, square: Square, "square-play": SquarePlay,
  shield: Shield, "book-open": BookOpen, "bar-chart-2": BarChart2,
  "id-card": CreditCard, "settings-2": Settings2,
};

function NavItem({ item, active }) {
  const Icon = iconMap[item.icon];
  return (
    <li>
      <button
        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
          active
            ? "bg-primary/10 text-primary font-medium border-l-[3px] border-primary pl-[9px]"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        {Icon && <Icon size={16} className={active ? "text-primary" : "text-gray-400"} />}
        <span>{item.label}</span>
      </button>
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-100 flex flex-col overflow-y-auto shrink-0">
      <nav className="flex-1 px-3 py-4 space-y-5">
        <section>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-3 mb-2">
            My Projects
          </p>
          <ul className="space-y-0.5">
            {navItems.myProjects.map((item) => (
              <NavItem key={item.id} item={item} active={false} />
            ))}
          </ul>
        </section>

        <section>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-3 mb-2">
            Orchestrator
          </p>
          <ul className="space-y-0.5">
            {navItems.orchestrator.map((item) => (
              <NavItem key={item.id} item={item} active={item.id === "knowledge-base"} />
            ))}
          </ul>
        </section>

        <section>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-3 mb-2">
            Admin
          </p>
          <ul className="space-y-0.5">
            {navItems.admin.map((item) => (
              <NavItem key={item.id} item={item} active={false} />
            ))}
          </ul>
        </section>
      </nav>
    </aside>
  );
}