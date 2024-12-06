/**
 * Program to cyclically rotate an array by one
Last Updated : 11 Sep, 2023
Given an array, the task is to cyclically rotate the array clockwise by one time. 

Examples:  


Input: arr[] = {1, 2, 3, 4, 5} 
Output: arr[] = {5, 1, 2, 3, 4}


Input: arr[] = {2, 3, 4, 5, 1}
Output: {1, 2, 3, 4, 5}
 */

function rotate(arr,rotateby){
   let first =  arr.slice(rotateby);
   let last = arr.slice(0,rotateby);
   console.log(first,last);
   arr = first.concat(last)
   return arr;

};
console.log(rotate([1,2,3,4,5,6],1));

function rotatebyone(arr){
let last_ele = arr[arr.length-1];
let n= arr.length;
for(let i=n-1; i>0;i--){
    arr[i]=arr[i-1];

}
arr[0]= last_ele;
return arr;
};

console.log(rotatebyone([1,2,3,4,5,6,7]));

function rotatebyoneSwap(arr){
    let l =0;
    let n =arr.length-1;
    while(l!=n){
        let temp;
        temp = arr[l];
        arr[l] = arr[n];
        arr[n] = temp;
        l=l+1

    }
    return arr
};
console.log(rotatebyoneSwap([1,2,3,4,5,6]))