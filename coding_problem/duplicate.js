/**print the duplicate in an array;
 * 
 * imp question:-
 * 
 * frequency counting
 * arr = [23,3,2,1,3,1];
 * let map ={
 * 23:1,
 * 3:2,
 * 2:1,
 * 1:2
 * }
 * 
 * loop over all the keys of a and collect wherever value(frequency) is > 1
 */

function duplicateInArr(arr){
    let frequency = new Map();
    for(let i=0; i<arr.length; i++){
        if(frequency.get(arr[i]) === undefined){
            frequency.set(arr[i],1)
        }else{
            frequency.set(arr[i],frequency.get(arr[i])+1)
        }
    }
    let res =[];
    for(let keys of frequency){
        if(keys[1]>1) res.push(keys[0]);
    }
    return res;
}
console.log(duplicateInArr([23,3,2,1,3,1]))