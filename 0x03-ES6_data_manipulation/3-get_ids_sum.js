export default function getStudentIdsSum(data) {
  const ids = data.map((value) => value.id);
  return ids.reduce((prev, next) => prev + next, 0);
}
