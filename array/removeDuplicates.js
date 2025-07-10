function removeDuplicates(arr) {
  let seen = {};
  let duplicates = [];

  for (let item of arr) {
    if (!seen[item]) {
      duplicates.push(item);
    }
    seen[item] = true;
  }
  return duplicates;
}
console.log(removeDuplicates([1, 1, 2, 2, 3]));
