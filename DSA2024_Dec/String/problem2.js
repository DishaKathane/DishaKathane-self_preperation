/**
 * let str = disha
 * output = ahsid
 */

let str = "disha";
function reverseStr(str){
    str = str.split("");
    let arr =[];
    for(let i=str.length-1;i>=0;i--){
arr.push(str[i]);
    }
    return arr.join("");
};
console.log(reverseStr(str));

/**palindrome
 * 
 */

let str1 = "nayan";
function palindrome(str){
   let str1 = str.split("");
    let arr =[];
    for(let i=str1.length-1;i>=0;i--){
arr.push(str1[i]);
    }
    let str2 = arr.join("")
    console.log(str2,str)
    if(str2 == str) return true
    return false
};
console.log(palindrome(str1));

