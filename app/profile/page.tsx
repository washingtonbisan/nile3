'use client'
// app/profile/page.tsx

import PortalLayout from '@/components/PortalLayout'
import { student, university, courses } from '@/lib/data'
import { User2, Mail, Phone, MapPin, GraduationCap, Award } from 'lucide-react'

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-xs text-gray-400 uppercase tracking-wide w-36 shrink-0 pt-0.5">{label}</span>
      <span className="text-sm text-gray-800 font-medium">{value}</span>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-[#1a237e] text-white px-5 py-2.5">
        <h3 className="font-bold text-sm">{title}</h3>
      </div>
      <div className="px-5 py-1">{children}</div>
    </div>
  )
}

export default function ProfilePage() {
  const totalCredits = courses.reduce((s, c) => s + c.credit, 0)
  const distinctions = courses.filter(c => c.letter === 'A').length

  return (
    <PortalLayout title="My Biodata" subtitle="Student Information Record">
      <div className="grid md:grid-cols-3 gap-5">

        {/* Left: ID card */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Navy cover */}
            <div className="h-16 bg-gradient-to-r from-[#1a237e] to-[#283593]" />
            <div className="px-5 pb-5">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[#1a237e] flex items-center justify-center text-white text-2xl font-bold shadow-lg -mt-8 border-3 border-white mb-3" style={{border:'3px solid white'}}>
                {student.firstName[0]}{student.lastName[0]}
              </div>
              <h2 className="font-bold text-[#1a237e] text-lg">{student.name}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{student.department}</p>
              <p className="text-xs text-gray-400">{student.faculty}</p>
              <p className="font-mono text-xs text-gray-400 mt-1">{student.studentId}</p>
              <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200 font-medium">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {student.enrollmentStatus}
              </span>
            </div>
          </div>

          {/* Academic stats */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#1a237e] text-white px-5 py-2.5">
              <h3 className="font-bold text-sm">Academic Summary</h3>
            </div>
            <div className="px-5 py-3 space-y-3">
              {[
                { label: 'CGPA (5.0)', value: student.cgpa },
                { label: 'Credits Earned', value: `${totalCredits}` },
                { label: 'Courses Taken', value: `${courses.length}` },
                { label: 'Distinctions', value: `${distinctions}` },
                { label: 'Academic Year', value: student.academicYear },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 text-xs">{label}</span>
                  <span className="font-bold text-[#1a237e]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Detailed info */}
        <div className="md:col-span-2 space-y-4">
          <Section title="Personal Information">
            <InfoRow label="Full Name" value={student.name} />
            <InfoRow label="Date of Birth" value={student.dateOfBirth} />
            <InfoRow label="Nationality" value={student.nationality} />
            <InfoRow label="State of Origin" value={student.stateOfOrigin} />
            <InfoRow label="Phone" value={student.phone} />
            <InfoRow label="Email" value={student.email} />
            <InfoRow label="Campus Address" value={student.address} />
          </Section>

          <Section title="Academic Information">
            <InfoRow label="Student ID" value={student.studentId} />
            <InfoRow label="Department" value={student.department} />
            <InfoRow label="Faculty" value={student.faculty} />
            <InfoRow label="Level" value={student.level} />
            <InfoRow label="Semester" value={student.semester} />
            <InfoRow label="Academic Year" value={student.academicYear} />
            <InfoRow label="Entry" value={student.entryDate} />
            <InfoRow label="Graduation" value={student.expectedGraduation} />
            <InfoRow label="Advisor" value={student.advisor} />
            <InfoRow label="Status" value={student.enrollmentStatus} />
          </Section>

          <Section title="University Information">
            <InfoRow label="University" value={university.name} />
            <InfoRow label="Network" value={university.tagline} />
            <InfoRow label="Website" value={university.website} />
            <InfoRow label="Address" value={university.address} />
            <InfoRow label="Portal" value={university.portalVersion} />
          </Section>
        </div>
      </div>
    </PortalLayout>
  )
}
