const insertSort = (array) => {
    // 不修改原数组
    const originValues = array.slice(); 

    // 初始将第一个元素指定为有序子列，从第2个元素开始插入，直到n-1元素 
    for (let i = 1; i < originValues.length; i++) {
        const currentValue = originValues[i];
        // 标记插入有序子列的位置
        let insertIndex = i;
        // 将当前元素从右到左与有序子列元素比较
        // 起始位置为当前元素前一个元素，即i-1,终止位置为0
        // 如果当前元素比该有序子列元素小，则该元素后移一位，并修改插入位置的游标
        for (let j = i-1; j > -1 && currentValue < originValues[j]; j--) {
           originValues[j+1] = originValues[j];
           insertIndex = j;
        }
        // 插入指定位置
        originValues[insertIndex] = currentValue;
    }

    return originValues;
};
const arr = [5, 3, 6, 9, 1];
console.time();
const sortedArr = insertSort(arr);
console.timeEnd();
console.log(arr);
console.log(sortedArr);