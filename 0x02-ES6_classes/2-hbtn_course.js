function _validateName(value) {
  if (typeof value !== 'string') {
    throw new TypeError('Name must be a string');
  }
  return value;
}

function _validateLength(value) {
  if (typeof value !== 'number') {
    throw new TypeError('Length must be a number');
  }
  return value;
}

function _validateStudents(value) {
  if (!Array.isArray(value) || !value.every((item) => typeof item !== 'string')) {
    throw new TypeError('Student must be a Array of Strings');
  }
  return value;
}
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = _validateName(name);
    this._length = _validateLength(length);
    this._students = _validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = _validateName(name);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = _validateLength(length);
  }

  get students() {
    return this._students;
  }

  set students(student) {
    this._students = _validateStudents(student);
  }
}
