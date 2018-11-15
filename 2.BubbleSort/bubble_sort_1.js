const bubbleSort = (array) => {
    // 不修改原数组
    const originValues = array.slice(); 

    // 迭代次数 数组长度-1
    for (let i = 0; i < originValues.length - 1; i++) {
        for (let j = 0; j < originValues.length - 1 - i; j++) {
            if (originValues[j] > originValues[j + 1]) {
                const tmp = originValues[j];
                originValues[j] = originValues[j + 1];
                originValues[j + 1] = tmp;
            }
        }
    }

    return originValues;
};
const arr = [5, 3, 6, 9, 1];
console.time();
const sortedArr = bubbleSort(arr);
console.timeEnd();
console.log(arr);
console.log(sortedArr);