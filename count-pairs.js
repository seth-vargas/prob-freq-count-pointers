function countPairs(arr, target) {
  let count = 0;
  const numSet = new Set(arr);

  for (const num of arr) {
    const complement = target - num;
    if (numSet.has(complement) && num !== complement) {
      count++;
      numSet.delete(num);
      numSet.delete(complement);
    }
  }

  return count;
}

module.exports = { countPairs };
