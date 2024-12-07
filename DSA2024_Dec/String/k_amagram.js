/**
 * Check if two strings are k-anagrams or not
Last Updated : 04 Sep, 2023
Given two strings of lowercase alphabets and a value k, the task is to find if two strings are K-anagrams of each other or not.
Two strings are called k-anagrams if following two conditions are true. 

Both have same number of characters.
Two strings can become anagram by changing at most k characters in a string.
Examples :  

Input:  str1 = "anagram" , str2 = "grammar" , k = 3
Output:  Yes
Explanation: We can update maximum 3 values and 
it can be done in changing only 'r' to 'n' 
and 'm' to 'a' in str2.
Input:  str1 = "geeks", str2 = "eggkf", k = 1
Output:  No
Explanation: We can update or modify only 1 
value but there is a need of modifying 2 characters. 
i.e. g and f in str 2.

 */

function kAnagram(s1,s2,k){
   if(s1.length!==s2.length) {
    return false;
   };
   let map = new Map();
   for(let i=0; i<s1.length; i++){
    const ch = s1[i];
    if(map.has(ch)){
        map.set(ch,map.get(ch)+1);
    }else{
        map.set(ch,1)
    }
   };
   for(let i=0; i<s2.length; i++){
    const ch = s2[i];
    if(map.has(ch) && map.get(ch)>0){
        map.set(ch, map.get(ch)-1);
    }
   }
   console.log(map);
   let count =0
   for(let [ch,freq] of map.entries()){
        count++
   }
   return count <=k
};
let str3 = "geeks";
let str4 = "eggkf";
let n = 1
// console.log(kAnagram("geeks","eggkf",1))

if (kAnagram(str3, str4, n)) {
    console.log("Yes");
} else {
    console.log("No");
}



