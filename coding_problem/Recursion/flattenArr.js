/**program to flatten array: [1,2, [3,4,5], [6,7]]  --> [1,2,3,4,5,6,7] 
 * 
 * ['a','b' , ['c', 'd', ['e', 'f']], ['g']] --> ['a','b','c','d','e','f','g']
 * 
 * we use recursion here 
 * new = [a ,b] concat with [c,d] concat with [e,f] concat with [g]
 * 
 * [1,2, [3,4,5], [6,7]] 
 * ==> [1] conscat with[2,[3,4,5], [6,7]]
 * ==> [1,2] concat with [ [3,4,5], [6,7]]
 * ==> [1,2] concat with [ [3,4,5] concat with flattenarr [6,7]]

 * ==>[1,2,3,4,5]  concat with flattenarr ([[6,7]])
==>[1,2,3,4,5]  concat with flattenarr ([6,7])
 * 
==>[1,2,3,4,5,6,7]
 * //flattenArr =>it will check each element one by one if not arr then it will concat with element in the new array
 * //else if the ele,emt in itself it is an array  ==> then it will try to flatten element
 * 
 * 
 */

function flattenArr(arr){
    let flatArr = [];
    for(let i =0; i<arr.length; i++){
if(Array.isArray(arr[i]) ==false){
    flatArr.push(arr[i])
}else{
    flatArr =flatArr.concat(flattenArr(arr[i]))
}
    }
    return flatArr;

}
console.log(flattenArr(['a','b' ,['c', 'd', ['e', 'f']], ['g']]));

function flatArrOfNum(arr){
    let flatArr = [];
    for(let i=0; i<arr.length;i++){
        if(Array.isArray(arr[i])==false){
flatArr.push(arr[i])
        }else{
            flatArr = flatArr.concat(flatArrOfNum(arr[i]));
            console.log(flatArr)
        }
    }
    return flatArr;
}
console.log(flatArrOfNum([99,[1,2,3,[4],[11,22,33,44,55,66],2,3,[4],55],100]))

