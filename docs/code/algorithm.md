---
title: 算法
category: 算法
tag:

- 算法

---

### 判断重复元素

> 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
> 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

```java
public class Demo01 {
    public static void main(String[] args) {
//        定义一个数组
        int[] arr = {1, 2, 4, 5, 6, 3, 5, 6, 3, 4};
        ArrayList<Integer> list = compare(arr);
        System.out.println(list);

    }

    public static ArrayList<Integer> compare(int[] arr) {

        HashMap<Integer, Integer> hashMap = new HashMap<Integer, Integer>(arr.length);
//        定义一个map集合
        for (int i : arr) {
//         首先判断map集合中进行的key是否为null，如果不为nul的话进行添加的操作
            if (hashMap.get(i) != null) {
                hashMap.put(i, hashMap.get(i) + 1);
            } else {
//                如果key的值为null的话，将value的值置为1
                hashMap.put(i, 1);
            }
        }
        ArrayList<Integer> list = new ArrayList<>();
//        遍历map，将value值大于1的key取出
        Set<Map.Entry<Integer, Integer>> entries = hashMap.entrySet();
        for (Map.Entry<Integer, Integer> entry : entries) {
            if (entry.getValue() > 1) {
                Integer key = entry.getKey();
                list.add(key);
            }
        }
        return list;
    }
}
```

### 快速排序

>快速排序由于其时间复杂度优于大部分的排序算法，因而命名为快速排序。快速排序实现的核心思想就是在待排序序列中选择一个基准值，然后将小于基准值的数字放在基准值左边，大于基准值的数字放在基准值右边，然后左右两边递归排序，整个排序过程中最关键部分就是寻找基准值在待排序序列中的索引位置。

```java
public class Demo04_KuaiPai {
    public static void main(String[] args) {
        int[] arr = {6, 1, 3, 4, 5, 7, 10, 9, 8};
        quiteSort(arr, 0, arr.length - 1);

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }

    }

    private static void quiteSort(int[] arr, int left, int right) {
        if (right < left) {
            return;
        } else {

            int left0 = left;
            int right0 = right;
//        定义基准数
            int baseNum = arr[left0];
            while (left != right) {
//            1、从右边开始找
                while (arr[right] >= baseNum && left < right) {
                    right--;
                }
                //            2、从左边开始找
                while (arr[left] <= baseNum && left < right) {
                    left++;
                }
//          数据交换
                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;

            }
//        基准数归位
            int temp = arr[left];
            arr[left] = arr[left0];
            arr[left0] = temp;
//           左侧
            quiteSort(arr, left0, left - 1);
//            右侧
            quiteSort(arr, left + 1, right0);

        }
    }

}
```

### 冒泡排序
> 冒泡排序是一种计算机科学领域的较简单的排序算法，它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果顺序错误就把他们交换过来，走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素列已经排序完成。
```java
public class Demo02_MaoPao {
    //    冒泡排序
    public static void main(String[] args) {
        int[] arr = {20, 3, 9, 1, 0, 67};
//        外循环控制交换的次数   -1 是防止索引越界
        for (int i = 0; i < arr.length - 1; i++) {
//            每次循环都会少一次
            for (int j = 0; j < arr.length - 1 - i; j++) {
//                判断前一个数据和后一个数据的大小
                if (arr[j] > arr[j + 1]) {
//                    如果前一个数据比后一个数据的值大，将两个数据值交换
//                    将索引为j的值赋值给temp
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }

        }
//        遍历数组，将数组元素打印到控制台中
        System.out.print("[");
        for (int m = 0; m < arr.length; m++) {

            if (m == arr.length - 1) {
                System.out.println(arr[m] + "]");
            } else {
                System.out.print(arr[m] + " ");
            }
        }
    }
}

```

### 二分法
> 即一分为二的的方法。对于在区间[a,b]上连续不断且满足f(a)*f(b)<0的函数y=f(x),通过不断地把函数f(x)的零点所在区间二等分，使区间两个端点逐步逼近零点，进而得到零点的近似值的方法。

`tip:` 说人话：把答案所在的区间逐渐缩小，直到区间内只有答案。
```java
public class Demo01_Mid {
    public static void main(String[] args) {
//        创建数组
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
//        二分查找的前提是数组元素要有顺序
        int num = 2;
        int index = binarySearchArray(arr, num);
        System.out.println(index);

    }

    public static int binarySearchArray(int[] arr, int num) {
//        定义查找范围
        int min = 0;
        int max = arr.length - 1;
        while (min <= max) {
//            中间值
            int mid = (max + min) / 2;
//            比较mid的值和num，如果mid的小于num，那么查找的数据在右边
            if (num > arr[mid]) {
                min = mid + 1;
//           比较mid的值和num，如果mid的大于num，那么查找的数据在mid左边
            } else if (num < arr[mid]) {
                max = mid - 1;
            } else {
//                刚好在中间的位置
                return mid;
            }

        }
        return -1;
    }
}
```