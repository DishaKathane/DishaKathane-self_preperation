/***
 * imp question:
 * count distinct pair with given sum.
 * 
 * 
 *find the  UNIQUEpair of elements (inside an array ) whose sum is equal to target k
 * let arr= [7,2,4,6,9,11,11,34,3,2,1];
 * let k=5;
 * sum = k
 * 
 * res = {2,3},{4,1}
 * 
 * create map of arr
 * frequency counter map
 * step1: create a map frequency counter of the array 
 * 
 * iterate over the map and try to check if the currosponding element  if k-pair[0] is present in the map if yes, then add pair in separate map but at the pair of adding check if the pair already exist in the map if 
 *  notgo to next element else 
 * mapOfArr =    {
 * 7:1,
 * 2:2,
 * 4:1
 * 6:1
 * 9:1,
 * 34:1,
 * 3:1,
 * 1:1
 * }
 * 
 * resPair ={
 * 2:3,
 * 4:1,}
*/

function uniquepair(arr,k){
    let eleset = new Set();
    let seenset = new Set();
    let count =0;
    for(let currVal of arr){
        const nextval = k-currVal;
        if(eleset.has(nextval) && !seenset.has(currVal)){
            count++;
            seenset.add(nextval);
            seenset.add(currVal);
        }
        eleset.add(currVal);
    }
    console.log(seenset);
    return count;
};
console.log(uniquepair([7,2,4,6,9,11,11,34,3,2,1],5))
// let Set =  [{ 2, 3},{4, 1 }]