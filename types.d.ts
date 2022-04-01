export type CourseDataType = {
  course: string;
  units: number;
  grade: number;
  id: string;
};

export type SGPAResultType = {
  totalAttainable: number;
  totalPoints: number;
  gp: string;
  percent: number;
  numPassed: number;
  numFailed: number;
  numCourses: number;
  numPercent: number;
};
