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

Approach:

The idea is to sort the array of strings and find the common prefix of the first and last string of the sorted array. Sorting is used in this approach because it makes it easier to find the longest common prefix. When we sort the strings, the first and last strings in the sorted list will be the most different from each other in terms of their characters. So, the longest common prefix for all the strings must be a prefix of both the first and the last strings in the sorted list.
 */

function longestcommonprefix(arr){
    arr.sort();
    let first = arr[0];
    let last = arr[arr.length-1];
    let minLength = Math.min(first.length,last.length);
    let i=0;
    while(i<minLength && first[i] === last[i]){
        console.log({first:first[i], last : last[i]});
        i++;
    }

    return first.substring(0,i)

};

console.log(longestcommonprefix(['geeksforgeeks', 'geeks', 'geek', 'geezer']))