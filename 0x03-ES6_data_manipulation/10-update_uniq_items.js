export default function updateUniqueItems(data) {
  const map = data;
  if (map instanceof Map) {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
}
