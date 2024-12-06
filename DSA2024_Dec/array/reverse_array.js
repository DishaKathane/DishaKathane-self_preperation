/**
 * Array Reverse – Complete Tutorial
Last Updated : 25 Sep, 2024
Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

Examples:

Input: arr[] = {1, 4, 3, 2, 6, 5}  
Output: {5, 6, 2, 3, 4, 1}
Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.


Input: arr[] = {4, 5, 1, 2} 
Output: {2, 1, 5, 4}
Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.


 */

/**
 * Below is the implementation of the algorithm:
 * Time Complexity: O(n), Copying elements to a new array is a linear operation.
Auxiliary Space: O(n), as we are using an extra array to store the reversed array.
 */

function Reverearr(arr){
    let n= arr.length;
    let temp = new Array();
    for(let i=0;i<arr.length; i++){
         temp[i] = arr[n-i-1];
    }
    for(let i=0;i<arr.length;i++){
        arr[i] = temp[i]
    }
    return arr;

};
console.log("using simple method",Reverearr([1,2,3,4,5,6]))  //time time and space O(N)

/**
 * [Expected Approach – 1] Using Two Pointers – O(n) Time and O(1) Space
The idea is to maintain two pointers: left and right, such that left points at the beginning of the array and right points to the end of the array. 


While left pointer is less than the right pointer, swap the elements at these two positions. After each swap, increment the left pointer and decrement the right pointer to move towards the center of array. This will swap all the elements in the first half with their corresponding element in the second half.
 */

function twoPointers(arr){
    let left = 0;
    let right = arr.length-1;

    while(left<right){
        [arr[left], arr[right]] = [arr[right],arr[left]];

        left++;
        right--;
    }
    return arr;
};
console.log('using the two pointers methos',twoPointers([1,2,3,4,5,6])) //time O(n) space O(1)

/**
 * [Expected Approach – 2] By Swapping Elements – O(n) Time and O(1) Space
The idea is to iterate over the first half of the array and swap each element with its corresponding element from the end. So, while iterating over the first half, any element at index i is swapped with the element at index (n – i – 1).


 */

function usingSwappig(arr){
    let start = 0;
    let n = arr.length;
    for(let i=0;i<Math.floor(n/2); i++){
        let temp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1]=temp;
        
    }
    console.log(arr);
    return arr;
};
console.log('using swapping',usingSwappig([1,2,3,4,5,6]));


/**
 * [Alternate Approach] Using Recursion – O(n) Time and O(n) Space
The idea is to use recursion and define a recursive function that takes a range of array elements as input and reverses it. Inside the recursive function, 


 Swap the first and last element. 
 Recursively call the function with the remaining subarray. 
 */

 function reverseArra(arr){
    let start = 0;
    let end =arr.length-1;
    reverseRecursion(arr,start,end);
    return arr
 };

 function reverseRecursion(arr,start,end){
    if(start >end){
        return;
    }

   [arr[start],arr[end]]=[arr[end],arr[start]]
   reverseRecursion(arr, start+1,end-1);
 }
 console.log("using recursion -----------------------",reverseArra([1,2,3,4,5,6,7,8,9]))