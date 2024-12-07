/**
 * Sort an array of 0s, 1s and 2s – Dutch National Flag Problem
Last Updated : 14 Oct, 2024
Given an array arr[] consisting of only 0s, 1s, and 2s. The task is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.

This problem is the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra. The problem is as follows:

Given n balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

Examples:

Input: arr[] = {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}
Explanation: {0, 0, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.


Input: arr[] = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
Explanation: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.
 */
/**
[Better Approach] Counting 0s, 1s and 2s – Two Pass – O(n) Time and O(1) Space
A better solution is to traverse the array once and count number of 0s, 1s and 2s, say c0, c1 and c2 respectively. Now traverse the array again, put c0 (count of 0s) 0s first, then c1 1s and finally c2 2s. This solution works in O(n) time, but it is not stable and requires two traversals of the array.
 */
function sort012(arr){  //using count method
    let c1=0;
    let c2=0;
    let c0=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] ==0){
            // console.log("inside 0")
            c0=c0+1
        }else if(arr[i] ==1){
            // console.log('inside 1')
            c1 +=1;
        }else{
            // console.log('inside 2')
            c2 = c2+1
        }
    }
    console.log({c1,c2,c0})
    let idx = 0;
    for(let i=0; i<c0; i++){
        arr[idx++] = 0
     }
     for(let i=0;i<c1;i++){
        arr[idx++] = 1
     }
     for(let i=0; i<c2; i++){
        arr[idx++]=2
     }
return arr;
};
console.log(sort012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1])) //time O(n) space O(1)