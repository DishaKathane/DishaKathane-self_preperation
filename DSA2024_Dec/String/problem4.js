/**
 * Longest Common Prefix using Sorting
Last Updated : 14 Nov, 2024
Given an array of strings arr[], the task is to return the longest common prefix among each and every strings present in the array. If there’s no prefix common in all the strings, return “”.

Examples:

Input: arr[] = [“geeksforgeeks”, “geeks”, “geek”, “geezer”]
Output: “gee”
Explanation: “gee” is the longest common prefix in all the given strings: “geeksforgeeks”, “geeks”, “geeks” and “geezer”.

Input: arr[] = [“apple”, “ape”, “april”]
Output : “ap”
Explanation: “ap” is the longest common prefix in all the given strings: “apple”, “ape” and “april”.

Input: arr[] = [“hello”, “world”]
Output: “”
Explanation: There’s no common prefix in the given strings.
 */

let arr = ["geeks","geeksforgeeks","geek","geezer"];
function commenPrefix(arr){

    console.log(arr)
    arr = arr.sort()
let first = arr[0];
let last = arr[arr.length-1];
console.log(first,last);
let minlength = Math.floor(first.length,last.length)
let i=0;
while(i<minlength && first[i] === last[i]){
    i++
}
return first.substring(0,i);
}
console.log('-----------',commenPrefix(arr))