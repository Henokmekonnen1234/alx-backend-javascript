export default function getStudentsByLocation(data, city) {
  return data.filter((value) => value.location === city);
}
