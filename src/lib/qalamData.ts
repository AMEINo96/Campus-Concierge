export interface Subject {
  id: string;
  code: string;
  name: string;
  attended: number;
  totalHeld: number;
  totalSemesterClasses: number;
  streak: number;
}

export const qalamData: Subject[] = [
  {
    id: "cs211",
    code: "CS-211",
    name: "Object-Oriented Programming (Java)",
    attended: 49,
    totalHeld: 51,
    totalSemesterClasses: 64, // Assuming 4CH
    streak: 14,
  },
  {
    id: "cs212",
    code: "CS-212",
    name: "Digital Logic Design",
    attended: 37,
    totalHeld: 41,
    totalSemesterClasses: 48, // Assuming 3CH
    streak: 8,
  },
  {
    id: "cs350",
    code: "CS-350",
    name: "Artificial Intelligence",
    attended: 26,
    totalHeld: 30,
    totalSemesterClasses: 48,
    streak: 8,
  },
  {
    id: "mth201",
    code: "MTH-201",
    name: "Linear Algebra & Differential Equations",
    attended: 18,
    totalHeld: 28,
    totalSemesterClasses: 48,
    streak: 0,
  }
];

export const calculateAttendance = (subject: Subject) => {
  const currentAbsences = subject.totalHeld - subject.attended;
  const maxAbsencesAllowed = Math.floor(subject.totalSemesterClasses * 0.25) - currentAbsences;
  const percentage = (subject.attended / subject.totalHeld) * 100;
  
  // Recovery: (Attended + X) / (TotalHeld + X) >= 0.75
  // Attended + X >= 0.75 * (TotalHeld + X)
  // Attended + X >= 0.75 * TotalHeld + 0.75 * X
  // 0.25 * X >= 0.75 * TotalHeld - Attended
  // X >= (0.75 * TotalHeld - Attended) / 0.25
  // X >= 3 * TotalHeld - 4 * Attended
  const recoveryClasses = Math.max(0, Math.ceil(3 * subject.totalHeld - 4 * subject.attended));

  return {
    percentage,
    currentAbsences,
    maxAbsencesAllowed,
    recoveryClasses,
  };
};
