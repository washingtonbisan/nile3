// lib/data.ts
// ══════════════════════════════════════════════════════════════
// MASTER DATA FILE — Edit anything here to update the whole site
// ══════════════════════════════════════════════════════════════

export const student = {
  name: "Sharon Madami",
  firstName: "Sharon",
  lastName: "Madami",
  studentId: "255643831",
  email: "Sharonmadami1@gmail.com",
  phone: "+234 708 047 5494",
  dateOfBirth: "16th January 2001",
  nationality: "Nigerian",
  stateOfOrigin: "Kaduna State",
  address: "Hostel B, Room 204, Nile University of Nigeria, Abuja",

  department: "Medicine & Surgery",
  faculty: "College of Medicine & Health Sciences",

  level: "100 Level",
  semester: "Second Semester",
  academicYear: "2025/2026",

  entryDate: "September 2025",
  expectedGraduation: "June 2031",

  advisor: "Dr. Abiodun Salami, MBBS, FMCP",

  enrollmentStatus: "Active",

  // Academic performance
  gpa: "3.73",
  cgpa: "3.88",
  previousCgpa: "4.00",

  // Total credits completed across both semesters
  totalCredits: 37,
};

// ══════════════════════════════════════════════════════════════
// UNIVERSITY INFORMATION
// ══════════════════════════════════════════════════════════════

export const university = {
  name: "Nile University of Nigeria",
  shortName: "NUN",
  abbreviation: "NILE",

  motto: "Honoris United Universities",
  tagline: "HONORIS UNITED UNIVERSITIES",

  website: "www.nileuniversity.edu.ng",

  address:
    "Plot 681, Cadastral Zone C-OO, Research Institution Area, Airport Rd, Jabi, Abuja",

  semester: "2nd Semester 2025/2026 Academic Session",
  semesterShort: "2nd Semester 2025/2026",

  registrarEmail: "academicdivision@nileuniversity.edu.ng",
  portalEmail: "mis@nileuniversity.edu.ng",
  bursaryEmail: "bursarydepartment@nileuniversity.edu.ng",
  itsupportEmail: "itsupport@nileuniversity.edu.ng",
  libraryEmail: "library@nileuniversity.edu.ng",

  femaleHostelEmail: "femalehostel@nileuniversity.edu.ng",
  maleHostelEmail: "malehostel@nileuniversity.edu.ng",

  admissionEmail: "admission@nileuniversity.edu.ng",

  portalVersion: "SIS v4.1",
  currentYear: "2025/2026",
};

// ══════════════════════════════════════════════════════════════
// LOGIN CREDENTIALS
// ══════════════════════════════════════════════════════════════

export const loginCredentials = [
  {
    username: "sharon madami",
    password: "sharonmdj123",
  },
  {
    username: "255643831",
    password: "sharonmdj123",
  },
];

// ══════════════════════════════════════════════════════════════
// COURSES — SECOND SEMESTER
// ══════════════════════════════════════════════════════════════
//
// Reduced dummy course set for the second semester.
// GPA displayed on the student record: 3.73
// Previous CGPA: 4.00
// Overall CGPA: 3.88
//
// ══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════
// COURSES — SECOND SEMESTER
// ══════════════════════════════════════════════════════════════

export const courses = [
  {
    code: "ANA 102",
    name: "General Anatomy II",
    credit: 3,
    type: "Core",
    grade: 65,
    letter: "B",
    points: 4.0,
    remark: "Very Good",
    lecturer: "Prof. Emeka Okonkwo, FWACS",
    schedule: "Mon / Wed  |  8:00 – 10:00 AM  |  Anatomy Hall",
  },

  {
    code: "BCH 102",
    name: "Medical Biochemistry II",
    credit: 3,
    type: "Core",
    grade: 63,
    letter: "B",
    points: 4.0,
    remark: "Very Good",
    lecturer: "Dr. Chidi Obi, PhD",
    schedule: "Tue / Thu  |  8:00 – 10:00 AM  |  Science Block B",
  },

  {
    code: "BIO 102",
    name: "General Biology II",
    credit: 3,
    type: "Core",
    grade: 61,
    letter: "B",
    points: 4.0,
    remark: "Very Good",
    lecturer: "Dr. Kemi Adeyinka, PhD",
    schedule: "Mon / Wed  |  10:00 – 11:00 AM  |  Lecture Hall 2",
  },

  {
    code: "PHY 102",
    name: "General Physics II — Electricity & Magnetism",
    credit: 3,
    type: "Core",
    grade: 56,
    letter: "C",
    points: 3.0,
    remark: "Good",
    lecturer: "Dr. Aisha Umar, PhD",
    schedule: "Tue / Thu  |  12:00 – 1:00 PM  |  Lecture Hall 3",
  },

  {
    code: "CHM 102",
    name: "General Chemistry II",
    credit: 3,
    type: "Core",
    grade: 54,
    letter: "C",
    points: 3.0,
    remark: "Good",
    lecturer: "Dr. Bola Adeyemi, PhD",
    schedule: "Mon / Fri  |  1:00 – 2:00 PM  |  Science Block A",
  },

  {
    code: "GST 102",
    name: "Use of English II",
    credit: 2,
    type: "General Studies",
    grade: 64,
    letter: "B",
    points: 4.0,
    remark: "Very Good",
    lecturer: "Mrs. Ngozi Adebayo, MA",
    schedule: "Friday  |  1:00 – 3:00 PM  |  Humanities Block",
  },

  {
    code: "ANA 104",
    name: "Anatomy Practical II",
    credit: 2,
    type: "Practical",
    grade: 62,
    letter: "B",
    points: 4.0,
    remark: "Very Good",
    lecturer: "Dr. Ibrahim Musa, PhD",
    schedule: "Thursday  |  2:00 – 5:00 PM  |  Anatomy Laboratory",
  },

  {
    code: "CHM 104",
    name: "Chemistry Practical II",
    credit: 2,
    type: "Practical",
    grade: 60,
    letter: "B",
    points: 4.0,
    remark: "Very Good",
    lecturer: "Dr. Bola Adeyemi, PhD",
    schedule: "Saturday  |  8:00 – 11:00 AM  |  Chemistry Laboratory",
  },
];
// ══════════════════════════════════════════════════════════════
// GRADE SCALE — 5.0 SYSTEM
// ══════════════════════════════════════════════════════════════

export const gradeScale = [
  {
    range: "70 – 100",
    letter: "A",
    points: 5.0,
    remark: "Distinction",
  },

  {
    range: "60 – 69",
    letter: "B",
    points: 4.0,
    remark: "Very Good",
  },

  {
    range: "50 – 59",
    letter: "C",
    points: 3.0,
    remark: "Good",
  },

  {
    range: "45 – 49",
    letter: "D",
    points: 2.0,
    remark: "Pass",
  },

  {
    range: "40 – 44",
    letter: "E",
    points: 1.0,
    remark: "Marginal Fail",
  },

  {
    range: "0 – 39",
    letter: "F",
    points: 0.0,
    remark: "Fail",
  },
];

// ══════════════════════════════════════════════════════════════
// FEES — IN NIGERIAN NAIRA (₦)
// ══════════════════════════════════════════════════════════════

export const fees = {
  currency: "₦",

  academicYear: "2025/2026",

  items: [
    {
      label: "Tuition Fee — Medicine & Surgery",
      amount: 3150000,
    },

    {
      label: "Accommodation Fee — Hostel B",
      amount: 1100000,
    },

    {
      label: "Examination Fee",
      amount: 200000,
    },

    {
      label: "Hospital Fee",
      amount: 400000,
    },

    {
      label: "Library Fee",
      amount: 150000,
    },

    {
      label: "Laboratory & Practical Fee",
      amount: 350000,
    },

    {
      label: "Student Union Due",
      amount: 100000,
    },

    {
      label: "Sports Fee",
      amount: 100000,
    },
  ],

  totalBilled: 5550000,
  totalPaid: 5550000,
  balance: 0,

  paymentDeadline: "30th January, 2026",
};

// ══════════════════════════════════════════════════════════════
// PAYMENT HISTORY
// ══════════════════════════════════════════════════════════════

export const paymentHistory = [
  {
    ref: "NUN/BUR/2025/FMS/0091",
    date: "20th October, 2025",
    description: "Tuition Fee — 1st Semester 2025/2026",
    amount: 3150000,
    method: "Bank Transfer — Zenith Bank",
    status: "Confirmed",
  },

  {
    ref: "NUN/BUR/2025/FMS/0092",
    date: "20th October, 2025",
    description: "Accommodation Fee — Hostel B",
    amount: 1100000,
    method: "Bank Transfer — Zenith Bank",
    status: "Confirmed",
  },

  {
    ref: "NUN/BUR/2025/FMS/0101",
    date: "7th January, 2026",
    description: "Hospital Fee",
    amount: 400000,
    method: "Online Payment — Remita",
    status: "Confirmed",
  },

  {
    ref: "NUN/BUR/2025/FMS/0115",
    date: "20th January, 2026",
    description: "Library, Student Union & Sports Fees",
    amount: 350000,
    method: "Online Payment — Remita",
    status: "Confirmed",
  },

  {
    ref: "NUN/BUR/2026/FMS/0121",
    date: "20th January, 2026",
    description: "Laboratory & Examination Fee",
    amount: 550000,
    method: "Online Payment — Remita",
    status: "Confirmed",
  },
];

// ══════════════════════════════════════════════════════════════
// BANK DETAILS
// ══════════════════════════════════════════════════════════════

export const bankDetails = {
  bankName: "Zenith Bank Plc",

  accountName: "Nile University of Nigeria — Bursary",

  accountNumber: "—",

  sortCode: "057",

  remitaRRR: "Generate via portal payment gateway",
};

// ══════════════════════════════════════════════════════════════
// ANNOUNCEMENTS
// ══════════════════════════════════════════════════════════════

export const announcements = [
  {
    id: 1,

    title: "2nd Semester Registration Opens 9th March 2026",

    body: "Course registration for the 2nd Semester 2025/2026 academic session will open in March 2026. All students must complete registration on the SIS portal before the deadline of 6th April 2026.",

    date: "10th December, 2025",

    priority: "high",

    tag: "Academic",
  },

  {
    id: 2,

    title: "1st Semester Results Published",

    body: "First Semester 2025/2026 examination results have been officially released by the Academic Division. Students should review their result slips and report any discrepancies within 14 days.",

    date: "16th March, 2026",

    priority: "high",

    tag: "Results",
  },

  {
    id: 3,

    title: "Orientation — January 2026",

    body: "The College of Medicine is hosting a mandatory Orientation on 8th–9th January 2026. Attendance is compulsory for all 100L Medicine students.",

    date: "28th November, 2025",

    priority: "medium",

    tag: "Faculty",
  },

  {
    id: 4,

    title: "Library Extended Hours — Exam Period",

    body: "The Nile University Library will be open 24 hours daily from 15th November to 10th December 2025 to support students during the examination period.",

    date: "12th November, 2025",

    priority: "low",

    tag: "Library",
  },

  {
    id: 5,

    title: "Second Semester Examination Timetable",

    body: "The examination timetable for the Second Semester 2025/2026 academic session is now available on the SIS portal. Students are advised to confirm their examination dates, venues and times.",

    date: "25th May, 2026",

    priority: "high",

    tag: "Examinations",
  },

  {
    id: 6,

    title: "Second Semester Results Released",

    body: "Second Semester 2025/2026 results are now available for students to view on the Student Information System. Students should review their grades and academic performance summary.",

    date: "10th July, 2026",

    priority: "high",

    tag: "Results",
  },
];
