/**
 * [2,5,6,9,12,15,28, 30] //elem = 28
 *  s        m        e
 * [2,5,6,9,12,15,28,30]
 *           s  m     e
 * 
 * [2,5,6,9,12,15,28, 30]
 *                 sm  e
 * 
 * T:O(log n)
 */
function binarySearch(arr, ele) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (arr[mid] !== ele && start <= end) {
        if (ele < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }

        mid = Math.floor((start + end) / 2);
    }

    return arr[mid] === ele ? mid : -1;
}
console.log(binarySearch([2, 5, 6, 8, 12, 13, 17], 6));
console.log(binarySearch(["sani", "tushar", "disha", "manthan", "sutta", "butta", "siddu", "parul"], "manthan"));


function binary(arr, ele) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (arr[mid] !== ele && start < end) {
        if (ele < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }

    return arr[mid] === ele ? mid:-1
};
console.log(binary([2, 4, 6, 7, 9, 10, 13], 13));