'use client'
// components/PortalLayout.tsx
// ══════════════════════════════════════════════════════════════
// AUTH GUARD + LAYOUT
// On every portal page, this component checks localStorage for
// a valid session. If there is no session, the user is sent back
// to /login immediately. This means NOBODY can access /dashboard,
// /results, /payments, or /profile without logging in first.
// ══════════════════════════════════════════════════════════════

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from './Sidebar'
import { Bell } from 'lucide-react'
import { student, university } from '@/lib/data'

function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="bg-[#1a237e] text-white px-6 py-3 flex items-center justify-between shadow-md shrink-0">
      <div className="pl-10 md:pl-0">
        <p className="text-xs text-white/40 uppercase tracking-widest">{university.semesterShort}</p>
        <h1 className="text-base font-bold leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-white/50 mt-0.5">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden sm:block text-xs text-white/40 bg-white/10 px-3 py-1 rounded-full">
          {student.studentId}
        </span>
        <button className="relative w-8 h-8 flex items-center justify-center text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors">
          <Bell size={17} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-400 rounded-full" />
        </button>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold border border-white/20">
          {student.firstName[0]}{student.lastName[0]}
        </div>
      </div>
    </header>
  )
}

export default function PortalLayout({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    // Check for a valid session in localStorage
    try {
      const session = localStorage.getItem('nun_session')
      if (session === 'active') {
        setAuthorized(true)
      } else {
        // No session — redirect to login
        router.replace('/login')
      }
    } catch (_) {
      router.replace('/login')
    }
  }, [router])

  // Show nothing while checking auth (prevents flash of portal content)
  if (!authorized) {
    return (
      <div className="min-h-screen dotted-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#1a237e]/30 border-t-[#1a237e] rounded-full animate-spin" />
          <p className="text-xs text-gray-400">Loading portal...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-y-auto p-5">
          {children}
        </main>
      </div>
    </div>
  )
}
