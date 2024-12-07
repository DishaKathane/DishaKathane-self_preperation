/**
 * Majority Element
Last Updated : 16 Sep, 2024
Given an array arr. Find the majority element in the array. If no majority exists, return -1. A majority element in an array is an element that appears strictly more than arr.size() / 2 times in the array.

Examples : 

Input : arr[] = {1, 1, 2, 1, 3, 5, 1}
Output : 1
Explanation: Note that 1 appear 4 times which is more than  7 / 2 times 


Input : arr[] = {3, 3, 4, 2, 4, 4, 2, 4}
Output :  -1 
Explanation: There is no element whose frequency is greater than the half of the size of the array size.


Input : arr[] = {3}
Output : 3
Explanation: Appears more than n/2 times
 */

function nativeApproch(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        let count =0;
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count ++;
            }
        }
        if(count >n/2){
            return arr[i]
        }
    }
    return -1

};
// console.log(nativeApproch([3, 3, 4, 2, 4, 4, 2, 4]));
// console.log(nativeApproch([1, 1, 2, 1, 3, 5, 1]));
// console.log(nativeApproch([1, 1, 2, 1, 3, 5, 1,5,6,5,5,5,5,5,5,5,5,5,5,5,5]))
/**Time Complexity: O(n^2)
Auxiliary Space: O(1) */

/**
 * Better Approach] Using Sorting – O(n log n) Time and O(1) Space
The idea is to sort the array so that similar elements are next to each other. Once sorted, go through the array and keep track of how many times each element appears. When you encounter a new element, check if the count of the previous element was more than half the total number of elements in the array. If it was, that element is the majority and should be returned. If no element meets this requirement, no majority element exists.
 */

function sortApprach(arr){
    let n=arr.length;
    if(n === 1) return arr[0]
    arr.sort((a,b)=>a-b)
    let count = 1;

    for(let i =0; i<arr.length; i++){
        if(arr[i-1] === arr[i]){
            count ++
        }else{
            if(count > Math.floor(n/2)){
                return arr[i-1]
            };
            count  =1
        };
    }

    if(count > Math.floor(n/2)){
        return arr[n-1]
    };
    return -1
}
// console.log("native",sortApprach([1, 1, 2, 1, 3, 5, 1,5,6,5,5,5,5,5,5,5,5,5,5,5,5]));

/**
 * [Optimal Approach] Using Hashing – O(n) Time and O(n) Space
The idea is to use a hash map to count the occurrences of each element in the array. 


Traverse the array once, and for each element, update its count in the hash map.
After updating the count, check if count exceeds n / 2.
If such an element is found, return it immediately.
If no element’s count exceeds n / 2, return -1.
 */

function countmap(arr){
    let n = arr.length;
    let map = new Map();
    for(const num of arr){
        map.set(num,(map.get(num)||0)+1);
        if(map.get(num)> n/2){
            return num
        }
    }
    return -1
}
console.log('count map',countmap([1, 1, 2, 1, 3, 5, 1,1,1,1,1,1,1,1]));
console.log('count map',countmap([1,2,3,4,5]));



// function majorityElement(arr) {
//     const n = arr.length;
//     const countMap = new Map();

//     // Traverse the array and count occurrences using the hash map
//     for (const num of arr) {
//         countMap.set(num, (countMap.get(num) || 0) + 1);
        
//         // Check if current element count exceeds n / 2
//         if (countMap.get(num) > n / 2) {
//             return num;
//         }
//     }

//     // If no majority element is found, return -1
//     return -1;
// }

// const arr = [1, 1, 2, 1, 3, 5, 1];
// console.log(majorityElement(arr));