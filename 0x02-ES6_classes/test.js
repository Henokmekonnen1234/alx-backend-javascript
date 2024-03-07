const value = ['bob', 'string'];
console.log(!Array.isArray(value));
console.log(!value.every((item) => typeof item === 'string'));
