/**
 * Maximum and minimum of an array using minimum number of comparisons
 * 
 * Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

Examples:

Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
              Maximum element is: 9


Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
              Maximum element is: 35
 */


// find maximum and minimum by using simple approach;  time complexity O(n) space complexity O(1)

function max_min(arr) {
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    console.log(max, min);
    return "";
};
let arr = [22, 14, 8, 17, 35, 3]
console.log(max_min(arr));


/**
 * Maximum and minimum of an array using Sorting:
One approach to find the maximum and minimum element in an array is to first sort the array in ascending order. Once the array is sorted, the first element of the array will be the minimum element and the last element of the array will be the maximum element.  
 */

// sorting bubble sort = 

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log(`min- ${arr[0]} max- ${arr[arr.length - 1]}`)
    return arr;

};
console.log(bubbleSort([22, 14, 8, 17, 35, 3]))  //time complexity O(n^2) 

//optimise solution

function bubblesortOptimise(arr) {

    let n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let swapp = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapp = true
            }
        }
        if (!swapp) { break; };
    }
    let fEle = arr[0];
    let Lele = arr[arr.length - 1]
    console.log("optise bubble sort used here", fEle, Lele)
    return ""

};
console.log(bubblesortOptimise([22, 14, 8, 17, 35, 3])); //time O(n^2) space O(1);


/**
 * Maximum and minimum of an array using Linear search:
Initialize values of min and max as minimum and maximum of the first two elements respectively. Starting from 3rd, compare each element with max and min, and change max and min accordingly (i.e., if the element is smaller than min then change min, else if the element is greater than max then change max, else ignore the element) 
 */
function linearsearch(arr) {
    let n = arr.lengthl
    let obj = {}
    let max, min;
    if (n == 1) {
        max = min = arr[0]
    };

    if (arr[0] > arr[1]) {
        max = arr[0];
        min = arr[1]
    } else {
        max = arr[1];
        min = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) {
            min = arr[i]
        }
    }
    obj.min = min;
     obj.max = max
    console.log(obj);
    return ""
}
console.log("max min by useing the linear search---> ",linearsearch([22, 14, 8, 17, 35, 3]))