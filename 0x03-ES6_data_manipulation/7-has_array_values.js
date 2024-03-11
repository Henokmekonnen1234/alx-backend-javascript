export default function hasValuesFromArray(data, values) {
  let result = true;
  values.forEach((value) => {
    if (!data.has(value)) {
      result = false;
    }
  });
  return result;
}
