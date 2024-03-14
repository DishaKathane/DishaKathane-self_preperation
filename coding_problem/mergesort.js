/**merge two sorted arr
 * O(n+m);
 * create an empty value to return at the end after merging;
 * took at the smallest value of each arr
 * 
 * time complexity O(nlog n);
 * space complexity O(1)
 */
// it applicable on sorted arr

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    //mergeSort;
    let mid = Math.floor((arr.length)/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

function merge(arr1, arr2){
    let res = [];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>= arr2[j]){
            res.push(arr2[j])
            j++
        }else{
            res.push(arr1[i]);
            i++
        }
    };
    while(i<arr1.length){
        res.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        res.push(arr2[j])
        j++
    }
    return res
};

// console.log(mergeSort([2,9,3,1,7,4,6,5]));

function merge(arr1, arr2){
    let res =[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] >=arr2[j]){
            res.push(arr2[j]);
            j++;
        }else{
            res.push(arr1[i]);
            i++;
        }
    }

    while(i<arr1.length){
        res.push(arr1[i]);
        i++
    };
    while(j<arr2.length){
        res.push(arr2[j])
        j++
    }
    return res
};

function mergesort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor((arr.length)/2);

    let  left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));

    return merge(left, right);
}
let arr = [1,9,10,3,7,4,9,4,6];
console.log(mergesort(arr));