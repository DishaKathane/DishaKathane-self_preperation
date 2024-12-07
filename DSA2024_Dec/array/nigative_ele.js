/**
 * Move all negative numbers to beginning and positive to end with constant extra space
Last Updated : 29 Apr, 2024
An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

Examples : 

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5
 */

function move(arr){
    arr.sort();
    return arr;

};
console.log(move([-12, 11, -13, -5, 6, -7, 5, -3, -6]));

function movenegative(arr){
    let j=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
        if(i!= j){
          let temp = arr[i];
          arr[i] = arr[j];
            arr[j] = temp;
          
        }
        j++
      }
    };
    return arr
}
console.log('approach -- ',movenegative([-12, 11, -13, -5, 6, -7, 5, -3, -6])) //time ==O(n) space O(1);


/**
 * Two Pointer Approach: The idea is to solve this problem with constant space and linear time is by using a two-pointer or two-variable approach where we simply take two variables like left and right which hold the 0 and N-1 indexes. Just need to check that :

Check If the left and right pointer elements are negative then simply increment the left pointer.
Otherwise, if the left element is positive and the right element is negative then simply swap the elements, and simultaneously increment and decrement the left and right pointers.
Else if the left element is positive and the right element is also positive then simply decrement the right pointer.
Repeat the above 3 steps until the left pointer ? right pointer.
Below is the implementation of the above approach:
 */

function rearrange(arr){
    let l = 0;
    let r = arr.length-1;

    while(l<=r){
if(arr[l]<0 && arr[r]<0){
    l++;
}else if(arr[l]>0 && arr[r]<0){
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--
}else if(arr[l]>0 && arr[r]>0){
    r--;
}else{
    r--;
    l++;
}
    }
    return arr

};
console.log(rearrange([-12, 11, -13, -5, 6, -7, 5, -3, -6]));