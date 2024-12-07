/**
 * Best-case Time Complexity of Merge Sort: O(nlog(n))

Average-case Time Complexity of Merge Sort: O(nlog(n))

Worst-case Time Complexity of Merge Sort: O(nlog(n))
space O(n)
let arr = ([3, 5, 8, 5, 99, 1])

// [1, 3, 5, 5, 8, 99] output

 */

function mergeTwoArr(left,right){
    let SortArr = [];

    while(left.length && right.length){

        if(left[0]<right[0]){
            // console.log("left",left.shift());
            SortArr.push(left.shift())
        }else{
            // console.log('right ---',right.shift())
            SortArr.push(right.shift())
        }
    }
    return [...SortArr,...left,...right]
}

console.log(mergeTwoArr([1, 4], [2, 6, 9]))


function mergeSort(arr){
    if(arr.length ===1 ) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return mergeTwoArr(left,right);
}
console.log(mergeSort([3, 5, 8, 5, 99, 1]))
