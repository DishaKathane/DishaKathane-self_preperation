/**
 * Sort string of characters
Last Updated : 15 Oct, 2024
Given a string of lowercase characters from ‘a’ – ‘z’. We need to write a program to print the characters of this string in sorted order.

Examples: 

Input : “dcab” 
Output : “abcd”

Input : “geeksforgeeks”
Output : “eeeefggkkorss”
 */
let str = 'geeksforgeek';


function sortstring(str){
    let s1 = str.split("").sort().join("");
    console.log(s1)
    return ""
}
console.log(sortstring(str));

function strsort(str){
    let max_char=26;
    let charCount = new Array(max_char).fill(0);

    for(let ch of str){
        charCount[ch.charCodeAt(0)-'a'.charCodeAt(0)]++
    }
    for(let i=0; i<max_char;i++){
        for(let j=0;j<charCount[i];j++){
            process.stdout.write(String.fromCharCode('a'.charCodeAt(0)+i))
        }
    }
    
}

strsort("disha");