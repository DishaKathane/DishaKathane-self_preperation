/**max sum of two element in an array 
 * 
*/ 

let arr = [12,4,67,2,34];
function largestTwoSumofEle(arr){
let largest = -Infinity;
let secondlargest = -Infinity;
let ans = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        secondlargest = largest;
        largest = arr[i];
    }else if(arr[i] > secondlargest){
        secondlargest = arr[i];
    }
};
ans.push(largest);
ans.push(secondlargest);
console.log(largest+secondlargest)
return (ans);
};
console.log(largestTwoSumofEle(arr))