# 归并排序 Merge Sort
归并排序是一个高效的、基于比较的排序算法。
## 原理
归并排序是一个典型的分治(Divide and Conquer)算法。具体思路如下：
- 将未排序的序列分割成 n 个只有单个元素的子序列。（单个元素的序列认为是有序的）
- 重复的将各个子序列合并成新的有序的序列，直到只有一个序列即为排好序的序列。
## 图示
可以通过动画演示理解, 以下网上找的两个动画。如果你想操作不同的参数来演示，可以上这个网站[visualgo.net](https://visualgo.net/en/sorting?slide=1)动手试试。

![图示1](./mergeSort1.gif)

![图示2](./mergeSort2.gif)

## 代码实现
关于代码，README中代码只有实现算法的函数，具体运行的代码，请查看该目录下的文件。
```JS
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
```

## 算法分析
- 时间复杂度：平均复杂度为 O(logn)
- 空间复杂度：O(n)

归并排序是一个稳定的排序。

## 资源与参考

[1] [CMU algorithm complexity](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Algorithmic%20Complexity/complexity.html)  
[2] [凯耐基梅隆大学数据结构与算法](https://www.cs.cmu.edu/~adamchik/15-121/lectures/)  
[3] [十大经典排序算法](https://github.com/hustcc/JS-Sorting-Algorithm)  
[4] [visualgo 排序动画演示](https://visualgo.net/zh/sorting?slide=1)
