const mergeSort = (array) => {
  // 不修改原数组
  const originValues = array.slice();

  // 如果数组长度小于2， 直接返回。递归终止。
  if (originValues.length < 2) {
    return originValues;
  }

  // 分割数组
  const middle = Math.floor(originValues.length / 2);
  const left = originValues.slice(0, middle);
  const right = originValues.slice(middle);

  // 递归对左右两个数组进行归并排序，并最终合并为一个数组
  return merge(mergeSort(left), mergeSort(right))
};
// 归并操作，将两个有序数组合并为一个有序数组
const merge = (left, right) => {
  const result = [];
  // 两个数组都有元素，依次将两个数组的首位较小值加入结果数组
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }

  // 将剩余值加入result
  return [...result, ...left, ...right];
}
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log("原数组：", arr);
console.time("排序时间");
const sortedArr = mergeSort(arr);
console.log("排好序的数组：", sortedArr);
console.timeEnd("排序时间");