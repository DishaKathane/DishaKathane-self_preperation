/**
 * 
 * Check if given String is Pangram or not
Last Updated : 25 Nov, 2024
Given a string s, the task is to check if it is Pangram or not. A pangram is a sentence containing all letters of the English Alphabet.

Examples: 

Input: s = “The quick brown fox jumps over the lazy dog” 
Output: true
Explanation: The input string contains all characters from ‘a’ to ‘z’.


Input: s = “The quick brown fox jumps over the dog”
Output: false
Explanation: The input string does not contain all characters from ‘a’ to ‘z’, as ‘l’, ‘z’, ‘y’ are missing
 */

function panagram(s){
    for(let ch ='a'; ch<'z';ch = String.fromCharCode(ch.charCodeAt(0)+1)){
        let found = false;
        for(let i=0; i<s.length;i++){
            if(ch ===s[i].toLowerCase()){
                found =true;
                break ;
            }
        };
        if(found === false){
            return false;
        }
    }
    return true;
};

let s = "The quick brown fox jumps over the lazy dog";
console.log(panagram(s));