/**
 * Find duplicate elements in an array
Last Updated : 17 Oct, 2024
Given an array of n integers. The task is to find all elements that have more than one occurrences. The output should only one occurrence of a number irrespective of number of occurrences in the input array.

Examples: 

Input: {2, 10, 10, 100, 2, 10, 11, 2, 11, 2}
Output: {2, 10, 11}


Input: {5, 40, 1, 40, 100000, 1, 5, 1}
Output: {5, 40, 1}

Better Approach – Use Sorting and Binary Search – O(n Log n) Time and O(1) Space
Sort the array.
For every element, find indexes of its first and last occurrences using binary search.
If both indexes are same, then this element is having only one occurrence, so we ignore this element.
Else, we add this element to result and move the index to last index of this element plus 1.
 */



function findDuplicate(arr) {
    let arrnew = [];
    for(let i=0; i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                if(!arrnew.includes(arr[i])){
                    arrnew.push(arr[i])
                }
                break;
            }
        }
    }
    return arrnew;
}
console.log(findDuplicate([5, 40, 1, 40, 100000, 1, 5, 1]))  //time O(n^3) space O(1)


/**
 * Better Approach – Use Sorting and Binary Search – O(n Log n) Time and O(1) Space
Sort the array.
For every element, find indexes of its first and last occurrences using binary search.
If both indexes are same, then this element is having only one occurrence, so we ignore this element.
Else, we add this element to result and move the index to last index of this element plus 1.
 */

function binarysearchAndSort(arr){
for(let i=0;i<arr.length-1;i++){
    let mid_index = i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[j]<arr[mid_index]){
           mid_index = j     //here is used the selection sort
        }
        let temp = arr[i];
        arr[i]= arr[mid_index];
        arr[mid_index] = temp
    }
   }
       let i  = 0;
       let newarr = []
       while(i<arr.length){
        let first = arr.indexOf(arr[i]);
        let last = arr.lastIndexOf(arr[i]);

        if(last>first){
            newarr.push(arr[i])
        }
        i = last+1
       }
   return newarr
};

console.log(binarysearchAndSort([5, 40, 1, 40, 100000, 1, 5, 1]))



function bubblesortWithBinarySearch(arr){
    for(let  i=0;i<arr.length-1;i++){
        let swapp =false;
        for(let j=0; j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] =[arr[j+1],arr[j]];
                swapp = true
            }
        }
        if(!swapp){
            break;
        }
    };

    let i=0;
    let newarr = []
    while(i<arr.length){
        let first = arr.indexOf(arr[i]);
        let last = arr.lastIndexOf(arr[i]);
        if(last>first){
            newarr.push(arr[i])
        }
        i = last+1
    }
    return newarr
}

console.log(bubblesortWithBinarySearch([5, 40, 1, 40, 100000, 1, 5, 1]));


/**
 * Expected Approach – O(n) Time and O(n) Space
We use hashing. Count frequency of occurrence of each element and the elements with frequency more than 1 is printed. unordered map is used as range of integers is not known. For Python, Use Dictionary to store number as key and it’s frequency as value. Dictionary can be used as range of integers is not known.
 */


function hashuse(arr){
    let freq = {};
    for(let x of arr){
        console.log("==============",freq[x],x)
        freq[x]= (freq[x]||0)+1
    }

    let arr1 =[];
    for(let entry in freq){
        console.log("0000000000----------------->", entry,"\\\\\\\\\\\\\\\\---",freq[entry])
        if(freq[entry]>1){
            arr1.push(parseInt(entry))
        }
    }
    return arr1;
}
console.log(hashuse([5, 40, 1, 40, 100000, 1, 5, 1]))