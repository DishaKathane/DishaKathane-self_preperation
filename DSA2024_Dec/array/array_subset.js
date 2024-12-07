/**
 * Check if an array is subset of another array
Last Updated : 20 Nov, 2024
Given two arrays arr1[] and arr2[] of size m and n respectively, the task is to determine whether arr2[] is a subset of arr1[]. Both arrays are not sorted, and elements are distinct.

Examples: 

Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1} 
Output: Yes


Input: arr1[] = {1, 2, 3, 4, 5, 6}, arr2[] = {1, 2, 4} 
Output: Yes


Input: arr1[] = {10, 5, 2, 23, 19}, arr2[] = {19, 5, 3} 
Output: No
 */

function arrsubset(arr1,arr2){
let m = arr1.length;
let n = arr2.length;
for(let i=0;i<n;i++){
    let found =false;
    for(let j=0;j<m;j++){
        if(arr2[i] == arr1[j]){
            found = true;
            break;
        }
    }
    if(!found){
        return false
    }
}
return true;
};
console.log(arrsubset([10, 5, 2, 23, 19],[19, 5, 3]));
console.log(arrsubset([10, 5, 2, 23, 19],[19, 5, 23]))