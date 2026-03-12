'use client'
// app/payments/page.tsx

import PortalLayout from '@/components/PortalLayout'
import { student, university, fees, paymentHistory, bankDetails } from '@/lib/data'
import { CheckCircle2, Download, Printer } from 'lucide-react'

export default function PaymentsPage() {
  return (
    <PortalLayout title="Tuition & Payments" subtitle={`${fees.academicYear} Fee Account`}>

      {/* Paid status banner */}
      {fees.balance === 0 && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-5 py-3.5 mb-5">
          <CheckCircle2 size={20} className="text-green-600 shrink-0" />
          <div>
            <p className="font-semibold text-green-800 text-sm">Account is clear — All fees paid</p>
            <p className="text-xs text-green-600 mt-0.5">
              Full payment of ₦{fees.totalPaid.toLocaleString()} confirmed for {fees.academicYear} academic session.
            </p>
          </div>
        </div>
      )}

      {/* Summary chips */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        {[
          { label: 'Total Billed', value: `₦${fees.totalBilled.toLocaleString()}`, bg: 'bg-[#1a237e] text-white' },
          { label: 'Total Paid', value: `₦${fees.totalPaid.toLocaleString()}`, bg: 'bg-green-600 text-white' },
          { label: 'Balance', value: fees.balance === 0 ? 'NIL' : `₦${fees.balance.toLocaleString()}`, bg: fees.balance === 0 ? 'bg-gray-100 text-gray-700' : 'bg-red-500 text-white' },
          { label: 'Transactions', value: `${paymentHistory.length}`, bg: 'bg-white text-[#1a237e] border border-gray-200' },
        ].map(({ label, value, bg }) => (
          <div key={label} className={`rounded-lg px-4 py-3 ${bg}`}>
            <p className="text-lg font-bold">{value}</p>
            <p className="text-xs opacity-70 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Fee Statement */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#1a237e] text-white px-5 py-3 flex items-center justify-between">
            <h3 className="font-bold text-sm">Fee Statement — {fees.academicYear}</h3>
            <div className="flex gap-2">
              <button onClick={() => window.print()} className="no-print p-1.5 text-white/60 hover:text-white rounded hover:bg-white/10">
                <Printer size={15} />
              </button>
            </div>
          </div>

          {/* Student info row */}
          <div className="px-5 py-2.5 bg-gray-50 border-b border-gray-100 text-xs text-gray-500 flex flex-wrap gap-x-4">
            <span><strong className="text-gray-700">Student:</strong> {student.name}</span>
            <span><strong className="text-gray-700">ID:</strong> {student.studentId}</span>
            <span><strong className="text-gray-700">Dept:</strong> {student.department}</span>
          </div>

          <div className="divide-y divide-gray-50">
            {fees.items.map(({ label, amount }) => (
              <div key={label} className="flex items-center justify-between px-5 py-2.5 hover:bg-gray-50 transition-colors">
                <p className="text-sm text-gray-700">{label}</p>
                <div className="flex items-center gap-2.5">
                  <span className="text-sm font-semibold text-gray-800">₦{amount.toLocaleString()}</span>
                  <CheckCircle2 size={13} className="text-green-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#1a237e] text-white">
            <p className="font-bold text-sm">Total Fees</p>
            <p className="font-bold text-lg">₦{fees.totalBilled.toLocaleString()}</p>
          </div>
          <div className="flex items-center justify-between px-5 py-2.5 bg-green-50 border-t border-green-100">
            <p className="text-sm font-semibold text-green-800">Amount Paid</p>
            <p className="font-bold text-green-700">₦{fees.totalPaid.toLocaleString()}</p>
          </div>
          <div className="flex items-center justify-between px-5 py-2.5 bg-gray-50 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-600">Outstanding Balance</p>
            <p className={`font-bold ${fees.balance === 0 ? 'text-green-600' : 'text-red-600'}`}>
              {fees.balance === 0 ? 'NIL' : `₦${fees.balance.toLocaleString()}`}
            </p>
          </div>
        </div>

        {/* Transactions + Bank details */}
        <div className="space-y-4">
          {/* Transaction history */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#1a237e] text-white px-5 py-3">
              <h3 className="font-bold text-sm">Payment Transactions</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {paymentHistory.map((tx) => (
                <div key={tx.ref} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800">{tx.description}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{tx.date}</p>
                      <p className="text-xs text-gray-400">{tx.method}</p>
                      <p className="font-mono text-xs text-gray-300 mt-0.5">{tx.ref}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-sm text-gray-800">₦{tx.amount.toLocaleString()}</p>
                      <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                        {tx.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex justify-between text-sm">
              <span className="text-gray-500 text-xs">Total Confirmed</span>
              <span className="font-bold text-[#1a237e] text-sm">₦{fees.totalPaid.toLocaleString()}</span>
            </div>
          </div>

          {/* Bank details */}
          <div className="bg-[#1a237e] text-white rounded-lg p-5">
            <p className="font-bold text-sm mb-3">Payment Bank Details</p>
            <div className="space-y-2 text-sm">
              {[
                { label: 'Bank', value: bankDetails.bankName },
                { label: 'Account Name', value: bankDetails.accountName },
                { label: 'Account Number', value: bankDetails.accountNumber },
                { label: 'Sort Code', value: bankDetails.sortCode },
                { label: 'Remita', value: bankDetails.remitaRRR },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <span className="text-white/40 w-28 shrink-0 text-xs">{label}</span>
                  <span className="text-white/80 text-xs">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/40">
              Enquiries: {university.bursaryEmail}
            </p>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
