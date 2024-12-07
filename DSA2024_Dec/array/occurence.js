/**
 * Count number of occurrences (or frequency) in a sorted array
Last Updated : 09 Nov, 2024
Given a sorted array arr[] and an integer target, the task is to find the number of occurrences of target in given array.

Examples:

Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
Output: 4
Explanation: 2 occurs 4 times in the given array.


Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
Output: 0
Explanation: 4 is not present in the given array.
 */

/**
 * [Naive Approach] Using Linear Search – O(n) Time and O(1) Space
The idea is to traverse the array and for each element, check if it is equal to the target. If it is, increment the counter.
 */

function nativeApproch(arr,target){
let res =0;
for(let i=0;i<arr.length;i++){
    // console.log(arr[i], target)
    if(arr[i]==target){
        res++
    };
}
return res;
};
console.log("dupleacte occurence of target-->" ,nativeApproch([1, 1, 2, 2, 2, 2, 3],2)); //time O(n) space O(1)
console.log("dupleacte occurence of target-->" ,nativeApproch([1, 1, 2, 2, 2, 2, 3],4))