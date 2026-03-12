"use client";
// components/Sidebar.tsx

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  GraduationCap,
  CreditCard,
  User,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { student } from "@/lib/data";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/results", label: "Result Slip", icon: GraduationCap },
  { href: "/payments", label: "Tuition & Payments", icon: CreditCard },
  { href: "/profile", label: "My Biodata", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    // Clear the session so the user must log in again
    try {
      localStorage.removeItem("nun_session");
    } catch (_) {}
    router.push("/login");
  };

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-[#1a237e] text-white p-2 rounded shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
        fixed top-0 left-0 h-screen w-60 z-40 flex flex-col
        bg-[#0d1b6e] text-white shadow-2xl
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:h-screen
      `}
      >
        {/* Branding */}
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <img
              src="/Logo-Nile-University-of-Nigeria.svg"
              alt="Nile University"
              className="h-9 w-auto object-contain"
            />
            {/* <div>
              <p className="text-xs font-bold leading-tight">NILE UNIVERSITY</p>
              <p className="text-[9px] text-white/40 leading-tight">Student Portal SIS</p>
            </div> */}
          </div>
        </div>

        {/* Student card */}
        <div className="px-5 py-4 border-b border-white/10">
          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-base mb-2 border border-white/20">
            {student.firstName[0]}
            {student.lastName[0]}
          </div>
          <p className="font-semibold text-sm leading-tight">{student.name}</p>
          <p className="text-xs text-white/50 mt-0.5">{student.studentId}</p>
          <p className="text-xs text-white/35 mt-0.5">{student.department}</p>
          <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-400/20">
            ● Active
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-all
                  ${
                    active
                      ? "bg-white/15 text-white border-l-[3px] border-green-400 pl-2.5"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon
                  size={16}
                  className={active ? "text-green-400" : "text-white/35"}
                />
                {label}
                {active && (
                  <ChevronRight size={13} className="ml-auto text-green-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-white/50 hover:text-red-300 hover:bg-red-500/10 rounded transition-all"
          >
            <LogOut size={16} />
            Sign Out
          </button>
          <p className="text-center text-xs text-white/20 mt-3">
            Nile University © {new Date().getFullYear()}
          </p>
        </div>
      </aside>
    </>
  );
}
