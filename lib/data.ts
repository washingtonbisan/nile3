// lib/data.ts
// ══════════════════════════════════════════════════════════════
// MASTER DATA FILE — Edit anything here to update the whole site
// ══════════════════════════════════════════════════════════════

export const student = {
  name: "Sharon Madami",
  firstName: "Sharon",
  lastName: "Madami",
  // Student ID format: NUN/YY/DEPT/NUMBER
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
  semester: "First Semester",
  academicYear: "2025/2026",
  entryDate: "September 2025",
  expectedGraduation: "June 2031",
  advisor: "Dr. Abiodun Salami, MBBS, FMCP",
  enrollmentStatus: "Active",
  // 5.0 grade system
  gpa: "4.00",
  cgpa: "4.00",
  previousCgpa: "—",
  totalCredits: 0, // calculated automatically from courses
};

export const university = {
  name: "Nile University of Nigeria",
  shortName: "NUN",
  abbreviation: "NILE",
  motto: "Honoris United Universities",
  tagline: "HONORIS UNITED UNIVERSITIES",
  website: "www.nileuniversity.edu.ng",
  address:
    "Plot 681, Cadastral Zone C-OO, Research Institution Area, Airport Rd, Jabi, Abuja",
  semester: "1st Semester 2025/2026 Academic Session",
  semesterShort: "1st Semester 2025/2026",
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
// To change: update the username or password values below.
// Username can be the student name OR student ID — both work.
// ══════════════════════════════════════════════════════════════
export const loginCredentials = [
  // Entry 1: login with student name
  { username: "sharon madami", password: "sharonmdj123" },
  // Entry 2: login with student ID (alternative)
  { username: "255643831", password: "sharonmdj123" },
];
// To add more users later, just add another line:
// { username: "another.student", password: "theirpassword" },

// ══════════════════════════════════════════════════════════════
// COURSES — First Year, First Semester, Medicine (Nile University)
// Based on standard Nigerian medical school curriculum
// ══════════════════════════════════════════════════════════════
export const courses = [
  // ANATOMY GROUP
  {
    code: "ANA 101",
    name: "General Anatomy",
    credit: 3,
    type: "Core",
    midterm: 37, // out of 40
    final: 53, // out of 60
    grade: 65, // total out of 100
    letter: "B",
    points: 4.0,
    remark: "Distinction",
    lecturer: "Prof. Emeka Okonkwo, FWACS",
    schedule: "Mon / Wed / Fri  |  8:00 – 9:00 AM  |  Anatomy Hall",
  },
  // {
  //   code: "ANA 103",
  //   name: "Anatomy Practical (Dissection)",
  //   credit: 2,
  //   type: "Practical",
  //   midterm: 35,
  //   final: 51,
  //   grade: 86,
  //   letter: "A",
  //   points: 5.0,
  //   remark: "Distinction",
  //   lecturer: "Dr. Ngozi Eze, MBBS",
  //   schedule: "Tue / Thu  |  10:00 AM – 1:00 PM  |  Dissection Lab",
  // },
  // PHYSIOLOGY GROUP
  // {
  //   code: "PHS 101",
  //   name: "General Human Physiology",
  //   credit: 3,
  //   type: "Core",
  //   midterm: 34,
  //   final: 49,
  //   grade: 83,
  //   letter: "B",
  //   points: 4.0,
  //   remark: "Very Good",
  //   lecturer: "Dr. Fatima Bello, PhD",
  //   schedule: "Mon / Wed  |  10:00 – 11:00 AM  |  Science Block A",
  // },
  // {
  //   code: "PHS 103",
  //   name: "Physiology Practical",
  //   credit: 2,
  //   type: "Practical",
  //   midterm: 36,
  //   final: 52,
  //   grade: 88,
  //   letter: "A",
  //   points: 5.0,
  //   remark: "Distinction",
  //   lecturer: "Dr. Fatima Bello, PhD",
  //   schedule: "Friday  |  8:00 AM – 11:00 AM  |  Physiology Lab",
  // },
  // BIOCHEMISTRY GROUP
  {
    code: "BCH 101",
    name: "Medical Biochemistry I",
    credit: 3,
    type: "Core",
    midterm: 33,
    final: 50,
    grade: 51,
    letter: "C",
    points: 3.0,
    remark: "Very Good",
    lecturer: "Dr. Chidi Obi, PhD",
    schedule: "Tue / Thu  |  8:00 – 9:00 AM  |  Science Block B",
  },
  // {
  //   code: "BCH 103",
  //   name: "Biochemistry Practical",
  //   credit: 2,
  //   type: "Practical",
  //   midterm: 36,
  //   final: 54,
  //   grade: 90,
  //   letter: "A",
  //   points: 5.0,
  //   remark: "Distinction",
  //   lecturer: "Dr. Chidi Obi, PhD",
  //   schedule: "Wednesday  |  2:00 – 5:00 PM  |  Biochemistry Lab",
  // },
  // PHYSICS
  {
    code: "PHY 101",
    name: "Medical Physics I",
    credit: 3,
    type: "Core",
    midterm: 32,
    final: 48,
    grade: 62,
    letter: "B",
    points: 4.0,
    remark: "Very Good",
    lecturer: "Dr. Aisha Umar, PhD",
    schedule: "Mon / Fri  |  12:00 – 1:00 PM  |  Lecture Hall 3",
  },
  {
    code: "PHY 103",
    name: "Medical Physics Practical",
    credit: 2,
    type: "Practical",
    midterm: 35,
    final: 50,
    grade: 58,
    letter: "C",
    points: 3.0,
    remark: "Distinction",
    lecturer: "Dr. Aisha Umar, PhD",
    schedule: "Thursday  |  2:00 – 5:00 PM  |  Physics Lab",
  },
  // CHEMISTRY
  {
    code: "CHM 101",
    name: "General Chemistry for Medicine",
    credit: 3,
    type: "Core",
    midterm: 34,
    final: 51,
    grade: 67,
    letter: "B",
    points: 4.0,
    remark: "Distinction",
    lecturer: "Dr. Bola Adeyemi, PhD",
    schedule: "Tue / Thu  |  12:00 – 1:00 PM  |  Science Block A",
  },
  {
    code: "CHM 103",
    name: "Chemistry Practical",
    credit: 2,
    type: "Practical",
    midterm: 37,
    final: 53,
    grade: 55,
    letter: "C",
    points: 3.0,
    remark: "Distinction",
    lecturer: "Dr. Bola Adeyemi, PhD",
    schedule: "Saturday  |  8:00 AM – 11:00 AM  |  Chemistry Lab",
  },
  // BIOLOGY
  {
    code: "BIO 101",
    name: "Cell Biology & Genetics",
    credit: 3,
    type: "Core",
    midterm: 35,
    final: 52,
    grade: 76,
    letter: "A",
    points: 5.0,
    remark: "Distinction",
    lecturer: "Dr. Kemi Adeyinka, PhD",
    schedule: "Mon / Wed  |  2:00 – 3:00 PM  |  Lecture Hall 2",
  },
  {
    code: "BIO 103",
    name: "Biology Practical (Microscopy)",
    credit: 2,
    type: "Practical",
    midterm: 36,
    final: 52,
    grade: 70,
    letter: "A",
    points: 5.0,
    remark: "Distinction",
    lecturer: "Dr. Kemi Adeyinka, PhD",
    schedule: "Tuesday  |  2:00 – 5:00 PM  |  Biology Lab",
  },
  // GENERAL STUDIES / ELECTIVES
  {
    code: "GST 101",
    name: "Communication in English",
    credit: 2,
    type: "General Studies",
    midterm: 35,
    final: 53,
    grade: 71,
    letter: "A",
    points: 5.0,
    remark: "Distinction",
    lecturer: "Mrs. Ngozi Adebayo, MA",
    schedule: "Friday  |  1:00 – 3:00 PM  |  Humanities Block",
  },
  {
    code: "MED 101",
    name: "Introduction to Medical Ethics",
    credit: 2,
    type: "Compulsory",
    midterm: 38,
    final: 55,
    grade: 63,
    letter: "B",
    points: 4.0,
    remark: "Distinction",
    lecturer: "Dr. Amara Nwosu, MBBS, LLM",
    schedule: "Thursday  |  10:00 AM – 12:00 PM  |  Seminar Room 1",
  },
];

// ══════════════════════════════════════════════════════════════
// GRADE SCALE — Nile University 5.0 System
// ══════════════════════════════════════════════════════════════
export const gradeScale = [
  { range: "70 – 100", letter: "A", points: 5.0, remark: "Distinction" },
  { range: "60 – 69", letter: "B", points: 4.0, remark: "Very Good" },
  { range: "50 – 59", letter: "C", points: 3.0, remark: "Good" },
  { range: "45 – 49", letter: "D", points: 2.0, remark: "Pass" },
  { range: "40 – 44", letter: "E", points: 1.0, remark: "Marginal Fail" },
  { range: "0 – 39", letter: "F", points: 0.0, remark: "Fail" },
];

// ══════════════════════════════════════════════════════════════
// FEES — in Nigerian Naira (₦)
// ══════════════════════════════════════════════════════════════
export const fees = {
  currency: "₦",
  academicYear: "2025/2026",
  items: [
    { label: "Tuition Fee — Medicine & Surgery", amount: 3150000 },
    { label: "Accommodation Fee — Female Hostel B", amount: 1100000 },
    { label: "Examination Fee", amount: 200000 },
    { label: "Hospital Fee", amount: 400000 },
    { label: "Library Fee", amount: 150000 },
    { label: "Laboratory & Practical Fee", amount: 350000 },
    { label: "Student Union Due", amount: 100000 },
    { label: "Sports Fee", amount: 100000 },
  ],
  totalBilled: 5550000,
  totalPaid: 5550000,
  balance: 0,
  paymentDeadline: "30th January, 2026",
};

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
    description: "Accommodation Fee —  Male Hostel B",
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
    description: "Library, Laboratory, Exam, Student Union & Sports Fees",
    amount: 350000,
    method: "Online Payment — Remita",
    status: "Confirmed",
  },
  {
    ref: "NUN/BUR/2025/FMS/0115",
    date: "20th January, 2026",
    description: "Laboratory & Exam fee",
    amount: 550000,
    method: "Online Payment — Remita",
    status: "Confirmed",
  },
];

// Bank details for payment page
export const bankDetails = {
  // bankName: "Zenith Bank Plc",
  // accountName: "Nile University of Nigeria — Bursary",
  // accountNumber: "1023847291",
  // sortCode: "057",
  // remitaRRR: "Generate via portal payment gateway",
};

// ══════════════════════════════════════════════════════════════
// ANNOUNCEMENTS
// ══════════════════════════════════════════════════════════════
export const announcements = [
  {
    id: 1,
    title: "2nd Semester Registration Opens 9th, March 2026",
    body: "Course registration for the 2nd Semester 2025/2026 academic session will open on March 2026. All students must complete registration on the SIS portal before the deadline of 6th April 2026.",
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
    title: "Clinical Skills Workshop — January 2026",
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
];
