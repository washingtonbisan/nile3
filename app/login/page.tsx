"use client";
// app/login/page.tsx
// ══════════════════════════════════════════════════════════════
// LOGIN PAGE
// - Checks username + password against loginCredentials in lib/data.ts
// - Username is case-insensitive (sharon madami = Sharon Madami)
// - Password IS case-sensitive
// - On success: saves session flag to localStorage, redirects to /dashboard
// - On failure: shows error, stays on login — cannot access portal
// - If session already exists (already logged in), auto-redirects to dashboard
// ══════════════════════════════════════════════════════════════

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NileLogo from "@/components/NileLogo";
import { loginCredentials, university } from "@/lib/data";
import { Home, Monitor, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Auto-redirect if already logged in
  useEffect(() => {
    try {
      if (localStorage.getItem("nun_session") === "active") {
        router.replace("/dashboard");
      }
    } catch (_) {}
  }, [router]);

  const handleLogin = () => {
    setError("");
    if (!username.trim() || !password.trim()) {
      setError("Please enter your username/ID and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      // Check credentials — username is case-insensitive, password is case-sensitive
      const match = loginCredentials.find(
        (c) =>
          c.username.toLowerCase() === username.trim().toLowerCase() &&
          c.password === password,
      );
      if (match) {
        try {
          localStorage.setItem("nun_session", "active");
        } catch (_) {}
        router.push("/dashboard");
      } else {
        setError(
          "Invalid username or password. Please check your details and try again.",
        );
        setLoading(false);
      }
    }, 700);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-screen dotted-bg flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* ── LEFT: Login form ── */}
        <div className="flex-1 p-8 md:p-10">
          <div className="mb-8">
            <NileLogo size="md" />
          </div>

          <div className="mb-6">
            <h1 className="text-xl font-bold text-[#1a237e]">LOGIN</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Student Information System (SIS)
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded px-4 py-3">
              <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
              <span>{error}</span>
            </div>
          )}

          {/* Username */}
          <div className="mb-5">
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type your name or ID."
              autoComplete="username"
              className="w-full border-0 border-b-2 border-gray-300 focus:border-[#1a237e] outline-none py-2 text-sm text-gray-700 placeholder-gray-300 bg-transparent transition-colors"
            />
          </div>

          {/* Password */}
          <div className="mb-8 relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type your password."
              autoComplete="current-password"
              className="w-full border-0 border-b-2 border-gray-300 focus:border-[#1a237e] outline-none py-2 text-sm text-gray-700 placeholder-gray-300 bg-transparent transition-colors pr-8"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 bottom-2 text-gray-400 hover:text-[#1a237e] transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Submit */}
          <div className="flex items-center gap-5 mb-10">
            <button
              onClick={handleLogin}
              disabled={loading}
              className="px-8 py-2.5 bg-[#1a237e] text-white text-sm font-bold tracking-widest hover:bg-[#283593] disabled:opacity-50 disabled:cursor-not-allowed transition-colors uppercase"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                  Verifying...
                </span>
              ) : (
                "LOGIN"
              )}
            </button>
            <span className="text-sm text-gray-500">
              Forget?{" "}
              <button className="text-[#1a237e] font-medium hover:underline">
                Reset password.
              </button>
            </span>
          </div>

          {/* Bottom links */}
          <div className="flex items-center gap-8 mb-6">
            <a
              href="https://nileuniversity.edu.ng"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1a237e]"
            >
              <Home size={16} />
              <div>
                <p className="text-xs font-medium">Go to Home</p>
                <p className="text-xs text-gray-400">NUN Main</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1a237e]"
            >
              <Monitor size={16} />
              <div>
                <p className="text-xs font-medium">Go to PMS</p>
                <p className="text-xs text-gray-400">PMS Main</p>
              </div>
            </a>
          </div>

          <p className="text-xs text-center text-[#1a237e]/40">
            Nile University © {new Date().getFullYear()}
          </p>
        </div>

        {/* ── RIGHT: Inquiry channels (navy) ── */}
        <div className="md:w-[370px] bg-[#1a237e] text-white p-8 md:p-10">
          <h2 className="text-lg font-bold mb-1">INQUIRY CHANNELS</h2>
          <div className="h-px bg-white/30 mb-4" />
          <div className="space-y-3 text-sm">
            {[
              {
                label: "Portal Login Issues/Enquiries",
                contact: university.portalEmail,
              },
              {
                label: "Transcript, Certificate & Card Issues",
                contact: university.registrarEmail,
              },
              {
                label: "Payment Issues/Enquiries",
                contact: university.bursaryEmail,
              },
              {
                label: "LVS Issues/Enquiries",
                contact: university.registrarEmail,
              },
              {
                label: "University Email Issues/Enquiries",
                contact: university.itsupportEmail,
              },
              {
                label: "Library Issues/Enquiries",
                contact: university.libraryEmail,
              },
              {
                label: "Hostel Issues/Enquiries",
                contact: university.femaleHostelEmail,
              },
              {
                label: "Biodata & Admission Issues/Enquiries",
                contact: university.admissionEmail,
              },
              {
                label: "Curriculum, Grades & Deferment",
                contact: "Respective Departments",
              },
            ].map(({ label, contact }) => (
              <p key={label} className="leading-snug">
                <span className="text-white/40">* </span>
                <span className="text-white/85">{label}</span>
                {" — "}
                <span className="text-white/50 text-xs break-all">
                  {contact}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
