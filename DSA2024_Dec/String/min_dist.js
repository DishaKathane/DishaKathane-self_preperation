/**
 * Find the minimum distance between the given two words
Last Updated : 12 Jul, 2023
Given a list of words followed by two words, the task is to find the minimum distance between the given two words in the list of words.

Examples:


Input: S = { “the”, “quick”, “brown”, “fox”, “quick”}, word1 = “the”, word2 = “fox”
Output: 3
Explanation: Minimum distance between the words “the” and “fox” is 3


Input: S = {“geeks”, “for”, “geeks”, “contribute”,  “practice”}, word1 = “geeks”, word2 = “practice”
Output: 2
Explanation: Minimum distance between the words “geeks” and “practice” is 2
 */

function minDist(s,w1,w2){
    let d1 =-1;
    let d2 =-1;
    let ans = Number.MAX_VALUE;
    for(let i=0; i<s.length; i++){
        if(s[i] == w1){
            d1 = i;
        }
        if(s[i] == w2){
            d2 =i;
        }
        if(d1!=-1&& d2!=-1){
            ans=Math.min(ans,Math.abs(d2-d1))
        }
    } 
    return ans
};
console.log(minDist([ "the", "quick", "brown", "fox", "quick" ],"the","fox"))
/**
 * Time Complexity: O(N*L), where N is number of strings and L is size of maximum string.
Auxiliary Space: O(1)
 */