export default function cleanSet(set, startString) {
  let all = '';
  let set2 = [...set];
  if (startString) {
    set2 = set2.filter((value) => value.startsWith(startString));
    set2 = set2.map((value) => value.replace(startString, ''));
    all = set2.join('-');
  }
  return all;
}
