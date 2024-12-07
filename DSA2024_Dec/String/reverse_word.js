/**
 * Reverse words in a string
Last Updated : 26 Sep, 2024
Given a string str, the task is to reverse the order of the words in the given string. Note that str may contain leading or trailing dots(.) or multiple trailing dots(.) between two words. The returned string should only have a single dot(.) separating the words.

Examples:

Input: str = “i.like.this.program.very.much” 
Output: str = “much.very.program.this.like.i” 


Input: str = ”..geeks..for.geeks.” 
Output: str = “geeks.for.geeks”
 */

function reverseword(str){
    let str1 = str.split(".").filter(word =>word);
    str1.reverse()
    return str1.join(".")

};
console.log(reverseword('i.like.this.program.very.much'))

function reverseWordString(str){
    let str1 = str.split(".");
    let arr =[]
    for(let i=str1.length-1;i>=0;i--){
       arr.push(str1[i])
    }
    console.log(arr)
    return arr.join(".")
};
console.log(reverseWordString(('i.like.this.program.very.much')))