/*  
Reverse words in a string
Last Updated : 26 Sep, 2024
Given a string str, the task is to reverse the order of the words in the given string. Note that str may contain leading or trailing dots(.) or multiple trailing dots(.) between two words. The returned string should only have a single dot(.) separating the words.

Examples:

Input: str = “i.like.this.program.very.much” 
Output: str = “much.very.program.this.like.i” 


Input: str = ”..geeks..for.geeks.” 
Output: str = “geeks.for.geeks”

*/

// using split reverse join method

let str = "..geeks..for.geeks1.";
let str2 = "i.like.this.program.very.much";

function reverse(str) {
    str = str.split(".");
    console.log(str)
    let str1 = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "") {
            str1.push(str[i]);
        }
    }
    // return str1;
    let arr1 = [];
    for (let i = str1.length - 1; i >= 0; i--) {
        arr1.push(str1[i])
    }
    return arr1.join(".")
};
console.log(reverse(str));
console.log(reverse(str2));