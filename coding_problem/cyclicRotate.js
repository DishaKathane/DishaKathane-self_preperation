/**

 * 
 *Que:- write a js program to rotate cyclically rotate an array - rotate(arr,d) that rotate arr by d element 
 */

 let arr1 = [12,3,6,2,9,11] 
 // rotateArr(arr,2) // [9, 11,12,3,6,2];
 // rotate(arr, 1) // [11,12,3,6,2,9];
 

 function cyclicRotate(arr,d){
    let i=0;
    let j = arr.length-1;
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++;
        j--; 
    }
    // console.log(arr)

    let chunk = arr.slice(0,d);
    let a =0;
    let b = chunk.length-1;
    while(a<b){
        [chunk[a],chunk[b]] = [chunk[b],chunk[a]]
        a++;
        b--;
    }
    // console.log(chunk)
    let restArr = arr.slice(d);
    // console.log(restArr)
    let x =0;
    let y= restArr.length-1;
    while(x<y){
        [restArr[x],restArr[y]] = [restArr[y],restArr[x]]
        x++;
        y--;
    }
    let result = chunk.concat(restArr);
    return result;
 }
 console.log(cyclicRotate(arr1,2))