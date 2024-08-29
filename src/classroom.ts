export function getNumberOfGrades(grades: number[]): number {
  return grades.length;
}

export function getSumGrades(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0);
}

export function getAverageValue(grades: number[]): number {
  const total = getSumGrades(grades);
  const count = getNumberOfGrades(grades);
  return count === 0 ? 0 : parseFloat((total / count).toFixed(2));
}

export function getPassingGrades(grades: number[]): number {
  return grades.filter((grade) => grade >= 10).length;
}

export function getFailingGrades(grades: number[]): number {
  return grades.filter((grade) => grade < 10).length;
}

export function getRaisedGrades(grades: number[]): number {
  return grades.filter((grade) => grade >= 18).length;
}
