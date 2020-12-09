const partition = (arr, low, high) => {
  const pivot = arr[high]
  let pIndex = low;
  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]]
      pIndex++
    }
  }
  [arr[pIndex], arr[high]] = [arr[high], arr[pIndex]]
  return pIndex
}
const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low >= high) {
    return
  }

  const pivotIndex = partition(arr, low, high)
  quickSort(arr, low, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, high)
}

const origins = [9, 4, 1, 6, 7, 3, 8, 2, 5]
console.log("原数组：", origins)
quickSort(origins)
console.log("排序后：", origins)
