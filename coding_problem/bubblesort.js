/**Bubble sort
 * 
 * O(n) -t
 * O(1) -best case time complexity
 */

let arr = [12,5,8,3,8,2,9,10];
function bubblesort(arr){
   if(arr.length <= 1) return arr;
   for(let i=0; i<arr.length; i++){
    let swap= false;
    for(let j=0; j<arr.length; j++){
        if(arr[j]>arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            swap = true;
        }
    }
    if(swap === false){
        break;
    }
   }
   return arr;
};
console.log(bubblesort(arr));

