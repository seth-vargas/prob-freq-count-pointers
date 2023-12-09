function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (arr[left] > 0) {
      // Move left pointer to find the first non-positive number
      left++;
    }

    while (arr[right] < 0) {
      // Move right pointer to find the first non-negative number
      right--;
    }

    if (left < right) {
      // Swap the positive number on the left with the negative number on the right
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr;
}

module.exports = { separatePositive };
