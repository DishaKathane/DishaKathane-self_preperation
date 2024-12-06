/**
 * Find duplicate elements in an array
Last Updated : 17 Oct, 2024
Given an array of n integers. The task is to find all elements that have more than one occurrences. The output should only one occurrence of a number irrespective of number of occurrences in the input array.

Examples: 

Input: {2, 10, 10, 100, 2, 10, 11, 2, 11, 2}
Output: {2, 10, 11}


Input: {5, 40, 1, 40, 100000, 1, 5, 1}
Output: {5, 40, 1}

Better Approach – Use Sorting and Binary Search – O(n Log n) Time and O(1) Space
Sort the array.
For every element, find indexes of its first and last occurrences using binary search.
If both indexes are same, then this element is having only one occurrence, so we ignore this element.
Else, we add this element to result and move the index to last index of this element plus 1.
 */



function findDuplicate(arr){
    let newarr =[]
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++ ){
            console.log()
            if(arr[i]>arr[j]){
newarr.push(arr[j])
            }
        }
    }
return
}

console.log(findDuplicate([5, 40, 1, 40, 100000, 1, 5, 1]))

