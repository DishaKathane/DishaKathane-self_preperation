// merge two arr using devide and concur method
let arr1 = [1, 3, 4, 6];
let arr2 = [2, 3, 5, 6, 7, 9];

function merge(arr1, arr2) {
    let n1 = arr1.length, n2 = arr2.length, i = 0, j = 0, k = 0;
    let result = [];
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            result[k] = arr1[i];
            i++;
            k++;

        }else{
            result[k]= arr2[j];
            j++;
            k++
        }
    };
    while(i<arr1.length){
        result[k]=arr1[i];
        i++;
        k++;
    };
    while(j<arr2[j]){
        result[k] = arr2[j];
        j++;
        k++;
    }
    return result;
} ;
console.log(merge(arr1, arr2))