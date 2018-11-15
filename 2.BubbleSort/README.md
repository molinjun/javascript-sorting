# 冒泡排序 Bubble sort

> 本系列在[Node小栈](https://github.com/gedennis/node-tribe-blog#%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95)下有拷贝，以便大家提issue指正。本篇文章提issue， [请戳这](https://github.com/gedennis/node-tribe-blog/issues/8)  
> 本系列在[Node小栈](https://github.com/gedennis/node-tribe-blog#%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95)下有拷贝，以便大家提issue指正。本篇文章提issue， [请戳这](https://github.com/gedennis/node-tribe-blog/issues/8)  
> 本系列在[Node小栈](https://github.com/gedennis/node-tribe-blog#%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95)下有拷贝，以便大家提issue指正。本篇文章提issue， [请戳这](https://github.com/gedennis/node-tribe-blog/issues/8)  

## 原理
先看看[Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)的定义：
>Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. 

所以冒泡排序就是，每次比较相邻的两个元素，如果顺序不对，则交换元素。每一次迭代，最大的元素会排到列表的一侧。然后重复这个步骤，直到不需要交换元素，该数组即有序了。

## 图示
可以通过动画演示理解, 以下网上找的两个动画。如果你想操作不同的参数来演示，可以上这个网站[visualgo.net](https://visualgo.net/en/sorting?slide=1)动手试试。

![图示1](./bubbleSort1.gif)

![图示2](./bubbleSort2.gif)

## 代码实现
关于代码，README中代码只有实现算法的函数，具体运行的代码，请查看该目录下的文件。

### 初始冒泡
代码如下, 看[bubble_sort_1.js](./bubble_sort_1.js)。
```
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
```
代码其实已经很明显了。最外层循环控制迭代次数，内层循环两两比较，把较大的数往右移动。不过有几点要提一下：
- **最外层循环为 `(length-1)`**  
这个看很多实现都是外层循环`length`次，其实最后一次多余了，因为只要前 n-1 都排序之后，第一个数肯定是最小的数了。
- **内层循环可以忽略已经排好序的元素**  
每过n轮，则最右侧的n个元素肯定有序了。交换排序的时候，可以忽略这些元素。所以
内层循环的终止游标是`length-1-i`。

**复杂度分析：**   
很明显，不管数组正序还是逆序，复杂度都是O(n<sup>2</sup>),所以最优复杂度和最坏复杂度都是O(n<sup>2</sup>)。 可资料上都是说，冒泡排序的最优复杂度是O(n)啊，那上面这种实现，肯定可以优化。  
仔细复盘上面的流程发现: 如果数组正序，比较一轮数组之后，后面还会傻傻地重复进行比较。而这其实是没有必要的。**只要在某一轮比较中，没有发生元素互换，就可以确认数组已经有序了**。

### 改进的冒泡
代码如下, 看[bubble_sort_2.js](./bubble_sort_2.js)。
```
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
```
**复杂度分析：**   
经过上面的改造：当数组正序时，也就是最优复杂度达到了O(n)；当数组逆序时，为最坏复杂度，为O(n<sup>2</sup>)。  
咋一看，貌似是最终解了。但复盘之后，发现每轮已经排序的元素，还会重复去比较。所以还可以小优化一下。

### 冒泡再修改
代码如下, 看[bubble_sort_3.js](./bubble_sort_3.js)。
```
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
```
用了一个变量`hasOrderedCnt`来记录已经排序的个数，这样内循环就不要去比较已经排序的元素了。
## 算法分析
- 时间复杂度  
经过几轮修改，数组正序时，最优复杂度可以达到O(n)；逆序时，最差复杂度O(n<sup>2</sup>)。

- 稳定性  
算法中，每次只有前一个元素大于后一个元素，才会进行交换。所以数值相同的两个元素，不会发生位置互换，所以可以保持之前前后顺序。故，**冒泡排序是稳定的排序**。
## 总结
本章节介绍了几种冒泡排序的实现。算法思想还是算简单的，但也是效率比较慢的。虽然比较简单，但还是有很多变种，例如左右冒泡、从大到小的排序、数组元素不是数值等等，都需要自己动手去写才能理解透。

## 参考
[1] [动画演示](https://visualgo.net/en/sorting)  
[2] [tutorials point 教程](https://www.tutorialspoint.com/data_structures_algorithms/index.htm)  
[3] [The Bubble sort algorithm](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm/)  
[4] [Sorting Algorithms](https://brilliant.org/wiki/sorting-algorithms/)
