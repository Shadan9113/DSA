function firstNonRepeatingCharacter(str) {
  let count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstNonRepeatingCharacter("aabb"));
