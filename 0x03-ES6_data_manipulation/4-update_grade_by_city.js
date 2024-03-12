export default function updateStudentGradeByCity(data, city, newGrades) {
  const list = data.filter((value) => city === value.location);
  return list.map((value) => {
    const student = value;
    const [grades] = newGrades.filter((newData) => newData.studentId === value.id);
    if (grades !== null && grades !== undefined) {
      student.grade = grades.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
}
