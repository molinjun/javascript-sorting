const bubbleSort = (array) => {
    // 不修改原数组
    const originValues = array.slice(); 

    // 迭代次数 数组长度-1
    for (let i = 0; i < originValues.length - 1; i++) {
        // 两两比较，该迭代的最大数，移动到右侧相应位置
        for (let j = 0; j < originValues.length - 1 - i; j++) {
            // 如果前一个数，大于后一个数，交换
            if (originValues[j] > originValues[j + 1]) {
                const tmp = originValues[j];
                originValues[j] = originValues[j + 1];
                originValues[j + 1] = tmp;
            }
        }
    }

    return originValues;
};
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.time();
const sortedArr = bubbleSort(arr);
console.timeEnd();
console.log('origin array: ', arr);
console.log('sorted array: ', sortedArr);
