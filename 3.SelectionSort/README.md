# 选择排序 Selection sort

> 本系列在[Node小栈](https://github.com/gedennis/node-tribe-blog#%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95)下有拷贝，以便大家提issue指正。本篇文章提issue，[请戳这](https://github.com/gedennis/node-tribe-blog/issues/9)  
> 本系列在[Node小栈](https://github.com/gedennis/node-tribe-blog#%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95)下有拷贝，以便大家提issue指正。本篇文章提issue，[请戳这](https://github.com/gedennis/node-tribe-blog/issues/9)  
> 本系列在[Node小栈](https://github.com/gedennis/node-tribe-blog#%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95)下有拷贝，以便大家提issue指正。本篇文章提issue，[请戳这](https://github.com/gedennis/node-tribe-blog/issues/9)  

## 原理
先看看[Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)的定义：
>The Selection sort algorithm divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right. . 

所以选择排序的思路就是：
- 把列表分为两个部分，一部分是已经排好序，一部分待排序。  
- 初始有序子列为空，然后遍历待排序子列，找出最小的元素，然后和待排序子列的第一个元素互换。然后游标右移一个。这样有序子列增加一个元素。
- 重复以上步骤，直到到最后一个元素，则表示数组有序。

## 图示
可以通过动画演示理解, 以下网上找的动画。如果你想操作不同的参数来演示，可以上这个网站[visualgo.net](https://visualgo.net/en/sorting?slide=1)动手试试。

![图示1](./selectionSort.gif)

## 代码实现
关于代码，README中代码只有实现算法的函数，具体运行的代码，请查看该目录下的文件。

代码如下：
```
const selectSort = (array) => {
    // 不修改原数组
    const originValues = array.slice(); 
    const length = originValues.length;
    // 迭代次数 数组长度-1, 因为前n个元素有序，则全部有序
    for (let i = 0; i < length - 1; i++) {
        // 把当前无序子列的第一个元素当做最小值
        let minIndex = i;
        // 找出最小值的索引
        for (let j = i+1; j < length; j++) {
            if (originValues[j] < originValues[minIndex]) {
                minIndex = j;
            }
        }
        // 如果最小值不为当前值，交换
        if (minIndex !== i) {
            const tmp = originValues[i];
            originValues[i] = originValues[minIndex];
            originValues[minIndex] = tmp;
        }
    }

    return originValues;
};
```
选择排序还是比较简单的，基本知道原理，看了注释就很明白了。有一点要说的是，就是在找最小值这个步骤。很多文章的实现，在发现当前值小于当前最小值时，就交换元素。这种交换还是没必要的，只要先记住最小值得下标`minIndex`就可以，最后一步来做交换。这样就减少了很多不必要的交换要素，后来发现和wikipedia的实现一模一样（第一次也是唯一一次，哈哈）。


## 算法分析
**时间复杂度**  
选择排序，不管数组正序还是逆序，都是一样的操作。最优复杂度和最差复杂度都是O(n<sup>2</sup>)。

**稳定性**  
因为可能存在和最小值元素交换是，把数值相同的元素顺序调换，所以，**选择排序是不稳定的排序**。  
举个例子吧：
```
[3] 5 2 （3） 1
```
由于最小的元素1在最后一个，需要和`[3]`元素交换，此时`[3]`就到`(3)`后面了。

> 有文章说选择排序是稳定的，其实看具体的实现。在《算法》第四版217页上作者已经说了，有很多办法可以将任意排序算法变成稳定的，但是，往往需要额外的时间或者空间。[摘自知乎](https://www.zhihu.com/question/20926405)

## 总结
本章节介绍了几种选择排序的实现。选择排序应该是最简单的排序了，不过效率也是很低，复杂度还是O(n<sup>2</sup>)。

## 参考
[1] [动画演示](https://visualgo.net/en/sorting)   
[2] [tutorials point 教程](https://www.tutorialspoint.com/data_structures_algorithms/index.htm)  
[3] [选择排序究竟属于稳定排序还是不稳定排序？](https://www.zhihu.com/question/20926405)  
[4] [Sorting Algorithms](https://brilliant.org/wiki/sorting-algorithms/)  
[5] [凯耐基梅隆大学数据结构与算法-排序算法](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Sorting%20Algorithms/sorting.html)  
[6] [CMU algorithm complexity](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Algorithmic%20Complexity/complexity.html)   