'use client'
// app/dashboard/page.tsx

import PortalLayout from '@/components/PortalLayout'
import Link from 'next/link'
import { GraduationCap, CreditCard, User, ChevronRight, AlertCircle, CheckCircle2, Info } from 'lucide-react'
import { student, university, courses, announcements, fees } from '@/lib/data'

export default function DashboardPage() {
  const totalCredits = courses.reduce((s, c) => s + c.credit, 0)
  const totalScore = courses.reduce((s, c) => s + c.grade, 0)
  const avgScore = (totalScore / courses.length).toFixed(1)
  const distinctions = courses.filter(c => c.letter === 'A').length

  return (
    <PortalLayout title="Student Dashboard" subtitle={`${student.name} — ${student.department}`}>

      {/* Welcome banner */}
      <div className="bg-[#1a237e] text-white rounded-lg p-5 mb-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Welcome back</p>
            <h2 className="text-xl font-bold">{student.name}</h2>
            <p className="text-white/60 text-sm mt-0.5">{student.studentId} · {student.faculty}</p>
            <p className="text-white/40 text-xs mt-0.5">{student.level} · {student.semester} · {student.academicYear}</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 text-center">
              <p className="text-2xl font-bold text-yellow-300">{student.cgpa}</p>
              <p className="text-xs text-white/50 mt-0.5">CGPA / 5.0</p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 text-center">
              <p className="text-2xl font-bold text-white">{totalCredits}</p>
              <p className="text-xs text-white/50 mt-0.5">Credits</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        {[
          { label: 'Courses Registered', value: courses.length, href: '/results', color: 'border-t-4 border-[#1a237e]' },
          { label: 'Distinctions (A)', value: distinctions, href: '/results', color: 'border-t-4 border-green-600' },
          { label: 'Avg Score', value: `${avgScore}%`, href: '/results', color: 'border-t-4 border-blue-500' },
          { label: 'Fees Balance', value: fees.balance === 0 ? 'CLEAR' : `₦${fees.balance.toLocaleString()}`, href: '/payments', color: `border-t-4 ${fees.balance === 0 ? 'border-green-500' : 'border-red-500'}` },
        ].map(({ label, value, href, color }) => (
          <Link key={label} href={href}>
            <div className={`bg-white rounded-lg p-4 shadow-sm ${color} hover:shadow-md transition-shadow cursor-pointer`}>
              <p className="text-xl font-bold text-[#1a237e]">{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Recent results preview */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#1a237e] text-white px-5 py-3 flex items-center justify-between">
            <h3 className="font-bold text-sm flex items-center gap-2">
              <GraduationCap size={16} />
              Recent Results
            </h3>
            <Link href="/results" className="text-xs text-white/70 hover:text-white flex items-center gap-1">
              View all <ChevronRight size={13} />
            </Link>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-2 text-xs text-gray-500 font-semibold">Course</th>
                <th className="text-center px-3 py-2 text-xs text-gray-500 font-semibold">Grade</th>
                <th className="text-center px-3 py-2 text-xs text-gray-500 font-semibold">Letter</th>
              </tr>
            </thead>
            <tbody>
              {courses.slice(0, 6).map((c, i) => (
                <tr key={c.code} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-blue-50/40'}`}>
                  <td className="px-4 py-2">
                    <p className="font-medium text-xs text-gray-800">{c.name}</p>
                    <p className="text-xs text-gray-400">{c.code}</p>
                  </td>
                  <td className="text-center px-3 py-2 text-xs font-semibold text-gray-700">{c.grade}</td>
                  <td className="text-center px-3 py-2">
                    <span className={`text-xs font-bold ${c.letter === 'A' ? 'text-green-700' : c.letter === 'B' ? 'text-blue-700' : 'text-amber-700'}`}>
                      {c.letter}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#1a237e] text-white px-5 py-3 flex items-center justify-between">
            <h3 className="font-bold text-sm">Announcements</h3>
            <span className="text-xs bg-red-500 px-2 py-0.5 rounded-full">{announcements.length} New</span>
          </div>
          <div className="divide-y divide-gray-100">
            {announcements.map(a => (
              <div key={a.id} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-2">
                  {a.priority === 'high'
                    ? <AlertCircle size={14} className="text-red-500 mt-0.5 shrink-0" />
                    : a.priority === 'medium'
                    ? <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" />
                    : <Info size={14} className="text-gray-400 mt-0.5 shrink-0" />
                  }
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{a.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{a.body}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-400">{a.date}</span>
                      <span className="text-xs px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded">{a.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic info row */}
      <div className="mt-5 bg-white rounded-lg shadow-sm px-5 py-4 flex flex-wrap gap-6 text-sm">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Academic Advisor</p>
          <p className="font-medium text-[#1a237e] mt-0.5">{student.advisor}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Entry Date</p>
          <p className="font-medium text-[#1a237e] mt-0.5">{student.entryDate}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Expected Graduation</p>
          <p className="font-medium text-[#1a237e] mt-0.5">{student.expectedGraduation}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Academic Status</p>
          <span className="inline-block mt-0.5 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">Good Standing</span>
        </div>
      </div>
    </PortalLayout>
  )
}
