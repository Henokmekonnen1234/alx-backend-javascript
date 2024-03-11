export default function getListStudentIds(data) {
  let result;
  if (Array.isArray(data)) {
    result = data.map((value) => value.id);
  } else {
    result = [];
  }
  return result;
}
