export default function setFromArray(data) {
  const result = new Set();
  data.forEach((value) => result.add(value));
  return result;
}
