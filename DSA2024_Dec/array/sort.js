/**
 * 
 * Array Sorting - Practice Problems
Last Updated : 24 Sep, 2024
Sorting an array means arranging the elements of the array in a certain order. Generally sorting in an array is done to arrange the elements in increasing or decreasing order.

Problem statement: Given an array of integers arr, the task is to sort the array in ascending order and return it, without using any built-in functions.

Example:

Input: arr = [5, 2, 4, 3, 1]
Output: [1, 2, 3, 4, 5]


Input: arr = [1, 2, 2, 1, 3, 5, 4]
Output: [1, 1, 2, 2, 3, 4, 5]


 * Complexity Analysis to Sort an Array using Bubble Sort:

Time Complexity: O(N2)
Auxiliary Space: O(1)
 */

// Implementing of Sorting Algorithm:
// Below is a simple implementation of Bubble Sort Algorithms to sort the Array:

function bubblesort(arr){
    let n= arr.length;
    for(let i=0; i<n; i++){
        let swapp = false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                swapp =true;
            }
        }
        if(!swapp){
       break;
        }
    }
      return arr;
};
console.log('bubble sort----------------> ',bubblesort([9,2,3,7,1,6,4,5]));


/**
 * Selection Sort
Last Updated : 06 Oct, 2024
Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.

First we find the smallest element and swap it with the first element. This way we get the smallest element at its correct position.
Then we find the smallest among remaining elements (or second smallest) and move it to its correct position by swapping.
We keep doing this until we get all elements moved to correct position.
How does Selection Sort work?
 */


function sleectionsort(arr){
for(let i=0;i<arr.length-1;i++){
    let mid_index =i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[j]<arr[mid_index]){
            mid_index = j
        }

    }
    let  temp =arr[i];
    arr[i] = arr[mid_index];
    arr[mid_index] = temp;

}
return arr;
};
console.log("sleectionsort---------------",sleectionsort([8,9,6,3,6,5,10]))