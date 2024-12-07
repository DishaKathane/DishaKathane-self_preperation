/**
 * 2 Sum – Count pairs with given sum
Last Updated : 21 Oct, 2024
Given an array arr[] of n integers and a target value, the task is to find the number of pairs of integers in the array whose sum is equal to target.

Examples:  

Input: arr[] = {1, 5, 7, -1, 5}, target = 6
Output:  3
Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).         


Input: arr[] = {1, 1, 1, 1}, target = 2
Output:  6
Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1) and (1, 1).


Input: arr[] = {10, 12, 10, 15, -1}, target = 125
Output:  0
 */
function countPair(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + arr[j])
            if(arr[i] + arr[j] === target){
                count++;
            }
        }
    }
    return count;
};
console.log(countPair([1, 5, 7, -1, 5], 6))