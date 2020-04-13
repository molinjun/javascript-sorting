const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};
const mergeSort = (array) => {
  // 不修改原数组
  const originValues = array.slice();
  const length = originValues.length;
  if (length < 2) {
    return originValues;
  }

  const middle = Math.floor(length / 2);
  const left = originValues.slice(0, middle);
  const right = originValues.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.time();
const sortedArr = mergeSort(arr);
console.timeEnd();
console.log("origin array: ", arr);
console.log("sorted array: ", sortedArr);
