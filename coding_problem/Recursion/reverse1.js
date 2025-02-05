/**reverse str using recursion
 * 
 * given str "ssbcdad";
 * by using swapping
 * string =immutable hota h
 * arr = pass by ref hta h;
 */

function reverseArr(str, left, right){
    if(left<right){
        let temp = str[left];
        str[left]=str[right];
        str[right]=temp;
        return reverseArr(str, left+1, right-1)
    }
};

let str = "abcdefghijkl"
let arr1 = str.split("");
let left = 0;
let right = arr1.length-1    
reverseArr(arr1, left,right) 
let str1 =  arr1.join("")
console.log(str1)