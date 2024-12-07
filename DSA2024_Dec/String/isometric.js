/**
 * Isomorphic Strings Check
Last Updated : 02 Nov, 2024
Two strings s1 and s2 are called isomorphic if there is a one-to-one mapping possible for every character of s1 to every character of s2. And all occurrences of every character in ‘s1’ map to the same character in ‘s2’.

Examples: 

Input:  s1 = “aab”, s2 = “xxy”
Output: True
Explanation: ‘a’ is mapped to ‘x’ and ‘b’ is mapped to ‘y’.


Input:  s1 = “aab”, s2 = “xyz”
Output: False
Explanation: One occurrence of ‘a’ in s1 has ‘x’ in s2 and other occurrence of ‘a’ has ‘y’.
 */

function isometricStr(s1,s2){
    if(s1.length != s2.length)return false;
    let m1 ={};
    let m2 = {};
    for(let i=0; i<s1.length;i++){
        if(!(s1[i] in m1)){
            m1[s1[i]] = i;
        }
        if(!(s2[i] in m2)){
            m2[s2[i]] = i;
        }
        
        if(m2[s2[i]] != m1[s1[i]]){
            return false;
        }
        console.log(m1[s1[i]],m2[s2[i]])
    }
    return true;
};

console.log(isometricStr("aab","xxy"))
console.log(isometricStr("abc","xxy"))