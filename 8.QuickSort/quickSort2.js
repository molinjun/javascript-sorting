const partition = (arr, low, high) => {
  const pivot = arr[high]

  let left = low;
  let right = high - 1;
  while (left <= right) {
    while (left <= right && arr[left] <= pivot) left++
    while (left <= right && arr[right] > pivot) right--

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  [arr[left], arr[high]] = [arr[high], arr[left]]
  return left;
}
const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low >= high) {
    return
  }

  const pivotIndex = partition(arr, low, high)
  quickSort(arr, low, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, high)
}

// const origins = [9, 4, 1, 6, 7, 3, 8, 2, 5]
const origins = [1, 2, 3, 4, 5]
console.log("原数组：", origins)
quickSort(origins)
console.log("排序后：", origins)
