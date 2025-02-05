/**given an array like [1,1,2,22,3,5,11,2] : filter duplicate element and give unique element in an  arr op==> [1,2,22,3,5,11] */

function removeDuplicates(arr) {
    let set = new Set(arr);
    return [...set]

}
console.log(removeDuplicates([1, 2, 5, 3, 2, 1, 5, 6, 6, 7, 4, 3, 2]));

function removeDup(arr) {
    arr.sort((a, b) => a - b);
    let ptr = 1;
    let res = [arr[0]];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr[ptr] = arr[i + 1];
            res.push(arr[ptr]);
            ptr++
        }
    }
    return res

};
console.log(removeDup([1, 2, 5, 3, 2, 1, 5, 6, 6, 7, 4, 3, 2]));


/**step 1: map for freq counter 
step 2 : iterate over this and whenever frequency
count is 1, push it into the result
map = { 
    1:2,
    2:2,
    22:1,
    3:1,
    5:1,
    11:1
}

loop over this map ;
for of oer map then pair[1]===1;
res.push(pair[0])*/


/***
 * imp question:
 *find the  UNIQUEpair of elements (inside an array ) whose sum is equal to target k
 * let arr= [7,2,4,6,9,11,11,34,3,2,1];
 * let k=5;
 * 
 * res = {2,3},{4,1}
 * 
 * create map of arr
 * frequency counter map
 * step1: create a map frequency counter of the array 
 * 
 * iterate over th emap and try to check if the currosponding element  if k-pair[0] is present in the map if yes, then add pair in separate map but at the par of adding check if the pair already exist in the map if 
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
let arr = [7, 2, 4, 6, 9, 11, 11, 34, 3, 2, 1];

function uniqueSumPair(arr, k) {
    let eleSet = new Set();
    let seenSet = new Set();
    let count = 0;
    for (let curval of arr) {
        let nextval = k - curval;

        if (eleSet.has(nextval) && !eleSet.has(curval)) {
            count++;
            seenSet.add(nextval);
            seenSet.add(curval)
        };
        eleSet.add(curval)
    }
    return count;
};
console.log(uniqueSumPair(arr, 5));

/**
 * take number add if number is multiple of 3 print "foo"
 * 
 * if number multiple of 5 print "bar"
 * 
 * and if numberr is multiple of both 5 & 3 print fooBar
 * 
 * if not a multiple of either , print nothing
 * 
 * 6=> foo
 * 10=> bar;
 * 30 => fooBar
 * 13 => 
 * 
 * remender 3 = inp%3 // if remender is 0-->then it means it is divisible by 3;
 * 
 * 
 *  remender 5 = inp%5 // if remender is 0-->then it means it is divisible by 5;
 * 
 * if(remender3 ===0) console.log("foo")
 * if(remender5 ===0) console.log("Bar")
 */


function fooBar(input){
    if(input %15 ===0) console.log('FooBar')
    else if(input %5 === 0)  console.log('Foo')
    else if(input %3 === 0) console.log("Bar");
return ""
}

console.log(fooBar(30))