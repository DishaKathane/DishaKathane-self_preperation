// Leetcode
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

let s = "anagram", t = "nagaram";
function validAnagram(s,t){
    if(s.length !== t.length) return false;
let obj1 = {};
let obj2 ={}
    for(let i=0; i<s.length;i++ ){
        obj1[s[i]] = + (obj1[s[i]] || 0) +1;
        obj2[t[i] ] =+ (obj2[t[i]] ||0) + 1;
    }
    console.log(obj1,obj2)
for(let key in obj1){
    if(obj1[key] !== obj2[key]) return false;
    // console.log (Object.keys(obj1) ,"===", Object.keys(obj2))
    return true
}
};

console.log(validAnagram(s,t))
console.log(validAnagram("rat", "tar"))