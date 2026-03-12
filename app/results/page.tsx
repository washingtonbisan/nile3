'use client'
// app/results/page.tsx
// Matches the exact Result Slip format from the screenshot:
// - Nile logo centered at top
// - "Result Slip" heading
// - Dark blue semester header band
// - Student info grid (left: ID/Name/Dept/Faculty | right: Credits/Score/GPA/CGPA)
// - Table: Course Code | Course Name | Credit | Midterm | Final | Grade | Letter
// - Alternating blue rows
// - Disclaimer at bottom
// - University address footer
// PLUS: Download as PDF button

import { useState } from 'react'
import PortalLayout from '@/components/PortalLayout'
import NileLogo from '@/components/NileLogo'
import { student, university, courses, gradeScale } from '@/lib/data'
import { Download, Printer } from 'lucide-react'

export default function ResultsPage() {
  const [downloading, setDownloading] = useState(false)

  const totalCredits = courses.reduce((s, c) => s + c.credit, 0)
  const totalScore = courses.reduce((s, c) => s + c.grade, 0)
  const avgScore = Math.round(totalScore / courses.length)
  const totalPoints = courses.reduce((s, c) => s + c.points * c.credit, 0)
  const gpa = (totalPoints / totalCredits).toFixed(2)

  const handleDownload = async () => {
    setDownloading(true)
    // Use browser print-to-PDF for download
    window.print()
    setTimeout(() => setDownloading(false), 1000)
  }

  return (
    <PortalLayout title="Result Slip" subtitle={university.semester}>

      {/* Action bar */}
      <div className="flex gap-3 mb-5 no-print">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-2 px-4 py-2 bg-[#1a237e] text-white text-sm rounded hover:bg-[#283593] transition-colors disabled:opacity-60"
        >
          <Download size={16} />
          {downloading ? 'Preparing...' : 'Download Result Slip (PDF)'}
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white text-sm rounded hover:bg-gray-50 transition-colors"
        >
          <Printer size={16} />
          Print
        </button>
      </div>

      {/* ══ RESULT SLIP DOCUMENT ══ */}
      <div id="result-slip" className="bg-white shadow-sm rounded-lg overflow-hidden max-w-4xl mx-auto">

        {/* Header: Logo centered */}
        <div className="px-10 pt-8 pb-4 text-center border-b border-gray-200">
          <div className="flex justify-center mb-4">
            <NileLogo size="lg" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Result Slip</h2>
        </div>

        {/* Semester header band */}
        <div className="bg-[#1a237e] text-white px-6 py-2.5">
          <p className="text-sm font-semibold">Semester: {university.semester}</p>
        </div>

        {/* Student info grid */}
        <div className="px-6 py-4 grid grid-cols-2 gap-x-10 border-b border-gray-200">
          {/* Left column */}
          <div className="space-y-2.5">
            {[
              { label: 'Student ID',  value: student.studentId },
              { label: 'Full Name',   value: student.name },
              { label: 'Department',  value: student.department },
              { label: 'Faculty',     value: student.faculty },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-3 text-sm">
                <span className="font-bold text-gray-700 w-28 shrink-0">{label}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div className="space-y-2.5">
            {[
              { label: 'Total Credits', value: `${totalCredits}` },
              { label: 'Total Score',   value: `${avgScore}` },
              { label: 'GPA',           value: gpa },
              { label: 'Current CGPA',  value: student.cgpa },
              { label: 'Previous CGPA', value: student.previousCgpa },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-3 text-sm">
                <span className="font-bold text-gray-700 w-32 shrink-0">{label}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results table — exact format from screenshot */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a237e] text-white">
                <th className="text-left px-4 py-2.5 font-semibold text-xs">Course Code</th>
                <th className="text-left px-4 py-2.5 font-semibold text-xs">Course Name</th>
                <th className="text-center px-3 py-2.5 font-semibold text-xs">Credit</th>
                <th className="text-center px-3 py-2.5 font-semibold text-xs">Midterm</th>
                <th className="text-center px-3 py-2.5 font-semibold text-xs">Final</th>
                <th className="text-center px-3 py-2.5 font-semibold text-xs">Grade</th>
                <th className="text-center px-3 py-2.5 font-semibold text-xs">Letter</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr key={c.code} className={i % 2 === 0 ? 'bg-white' : 'bg-[#dbeafe]'}>
                  <td className="px-4 py-2.5 font-mono text-xs font-semibold text-gray-600">{c.code}</td>
                  <td className="px-4 py-2.5 text-xs text-gray-800">{c.name}</td>
                  <td className="text-center px-3 py-2.5 text-xs font-semibold text-gray-700">{c.credit}</td>
                  <td className="text-center px-3 py-2.5 text-xs text-gray-600">{c.midterm}</td>
                  <td className="text-center px-3 py-2.5 text-xs text-gray-600">{c.final}</td>
                  <td className="text-center px-3 py-2.5 text-xs font-bold text-gray-800">{c.grade}</td>
                  <td className="text-center px-3 py-2.5">
                    <span className={`text-xs font-bold ${
                      c.letter === 'A' ? 'text-green-700'
                      : c.letter === 'B' ? 'text-blue-700'
                      : c.letter === 'C' ? 'text-amber-700'
                      : 'text-red-700'
                    }`}>
                      {c.letter}
                    </span>
                  </td>
                </tr>
              ))}

              {/* Totals row */}
              <tr className="bg-[#1a237e]/10 border-t-2 border-[#1a237e]/30">
                <td colSpan={2} className="px-4 py-2.5 font-bold text-xs text-[#1a237e]">TOTALS / SUMMARY</td>
                <td className="text-center px-3 py-2.5 font-bold text-xs text-[#1a237e]">{totalCredits}</td>
                <td className="text-center px-3 py-2.5 font-bold text-xs text-[#1a237e]">
                  {courses.reduce((s,c)=>s+c.midterm,0)}
                </td>
                <td className="text-center px-3 py-2.5 font-bold text-xs text-[#1a237e]">
                  {courses.reduce((s,c)=>s+c.final,0)}
                </td>
                <td className="text-center px-3 py-2.5 font-bold text-xs text-amber-700">{avgScore} avg</td>
                <td className="text-center px-3 py-2.5 font-bold text-xs text-[#1a237e]">{gpa}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Empty alternating rows for visual (like in screenshot) */}
        <div className="px-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-6 ${i % 2 === 0 ? 'bg-white' : 'bg-[#dbeafe]/40'}`} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="px-8 py-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 italic leading-relaxed">
            <strong>Disclaimer:</strong> This Result Slip is only a notification of results to students and not a replacement for the official academic transcript. For any inquiry on grades, kindly contact your academic advisor or the Head of your Department within 14 days of publication.
          </p>
        </div>

        {/* Footer address */}
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-xs text-[#1a237e]">{university.address}</p>
          <p className="text-xs text-[#1a237e] mt-0.5">
            www.nileuniversity.edu.ng | {university.registrarEmail}
          </p>
        </div>
      </div>

      {/* Grade Scale reference */}
      <div className="mt-5 bg-white rounded-lg shadow-sm overflow-hidden max-w-4xl mx-auto no-print">
        <div className="bg-[#1a237e] text-white px-5 py-2.5">
          <h3 className="font-bold text-sm">Nile University Grading Scale (5.0 System)</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {['Score Range', 'Letter Grade', 'Grade Points', 'Remark'].map(h => (
                <th key={h} className="text-left px-5 py-2 text-xs text-gray-500 font-semibold uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gradeScale.map((row, i) => (
              <tr key={row.letter} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-[#dbeafe]/30'}`}>
                <td className="px-5 py-2 font-mono text-xs text-gray-600">{row.range}</td>
                <td className="px-5 py-2">
                  <span className={`font-bold text-xs ${row.letter === 'A' ? 'text-green-700' : row.letter === 'B' ? 'text-blue-700' : row.letter === 'C' ? 'text-amber-700' : 'text-red-700'}`}>
                    {row.letter}
                  </span>
                </td>
                <td className="px-5 py-2 text-xs font-medium text-gray-700">{row.points.toFixed(1)}</td>
                <td className="px-5 py-2 text-xs text-gray-500">{row.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PortalLayout>
  )
}
