
/**find the maximum sum of any two Elementin an array=== find the largest and second largest element in the array
 * 
 * 
 * let array = [12,4,67,2,34] ==> (67 + 34)
 * step I- maintatain two var;
 * lergest= -Infinity and secondLargest = -Infinty;
 * 
 * step II - loop over the arr and if you find the number largest tham "largest" then update 
 * largest =arr[i];
 * 
 * 
 * largest =5
 * secondLargest = 3
 * 
 * obtain 12;
 * then largest =12;
 * seconlargest = 5;
 * 
 * step II- else check arr[i] grater than secondLargest...if yes then update the secondLargest
 * obtain 8;
 * secondLargest = 8
 * 
 */
let array = [12,4,67,299,34] ;

function largetsSum(arr){
let largest = -Infinity;
let secondLargest = -Infinity;
let ans = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i];

    }else if(arr[i]>secondLargest){
        secondLargest = arr[i]
    }
}
ans.push(largest);
ans.push(secondLargest);
console.log(ans);
return (largest+secondLargest)
}
console.log(largetsSum(array))
