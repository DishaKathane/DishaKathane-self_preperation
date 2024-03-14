/**given an arr = [1,2,2,3,22,5,11,2]; fiter the duplicate element and give unique element in array
 * 
 * op- [1,2,22,3,5,11]
 * 
*/
let arr = [1,2,2,3,22,5,11,2]; 
let set = new Set(arr);
// console.log(set);

console.log([...set])