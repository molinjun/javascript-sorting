const bubbleSort = (array) => {
    // 不修改原数组
    const originValues = array.slice(); 

    let swapped = true;
    let hasOrderedCnt = 0; // 已排序个数
    do {
        // 标记该次迭代是否交换顺序，如果没有，代表列表已经有序
        swapped = false;
        for (let i = 0; i < originValues.length - 1 - hasOrderedCnt; i++) {
            // 如果前一元素大于后一元素，交换顺序
            if (originValues[i] > originValues[i + 1]) {
                const tmp = originValues[i];
                originValues[i] = originValues[i + 1];
                originValues[i + 1] = tmp;
                swapped = true;
            }
        }
        // 每一轮之后，都有一个元素排好顺序
        hasOrderedCnt++;
    } while (swapped);

    return originValues;
};

const arr = [5, 3, 6, 9, 1];
console.log(arr);
console.time();
const sortedArr = bubbleSort(arr);
console.timeEnd();
console.log(sortedArr);