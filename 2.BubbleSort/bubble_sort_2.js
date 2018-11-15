const bubbleSort = (array) => {
    // 不修改原数组
    const originValues = array.slice(); 

    let swapped = true;
    do {
        // 标记该次迭代是否交换顺序，如果没有，代表列表已经有序
        swapped = false;
        for (let i = 0; i < originValues.length - 1; i++) {
            // 如果前一元素大于后一元素，交换顺序
            if (originValues[i] > originValues[i + 1]) {
                const tmp = originValues[i];
                originValues[i] = originValues[i + 1];
                originValues[i + 1] = tmp;
                // 如果有交换，标记继续下一轮
                swapped = true;
            }
        }
    } while (swapped);

    return originValues;
};

const arr = [5, 3, 6, 9, 1];
console.log(arr);
console.time();
const sortedArr = bubbleSort(arr);
console.timeEnd();
console.log(sortedArr);