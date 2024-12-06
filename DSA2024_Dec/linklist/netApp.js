// let int = 1234;

/**find wether number is palindrome or not
 * 
 */

let num = 12321

function reverseInteger(number){
number = number.toString();
let num1 = number.split("");
let arr = []
for(let i=num1.length-1; i>=0;i--){
arr.push(num1[i])
}

console.log(parseInt(arr.join("")));
let revernumber = parseInt(arr.join(""))
console.log(typeof(revernumber))
number = parseInt(number)
if(number === revernumber){
    return true;
}
return false;
};
// console.log(reverseInteger(int));
console.log(reverseInteger(num))

arr = [1,2,6,4,7,8,9]