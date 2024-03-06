/**return most frequency element  in an array;
 * 2 present 7 times;
*/
const arr = [1,2,3,4,3,2,3,2,5,2,5,2,2,2];

function maxFrequencyEle(arr){
    let map = new Map();
    if(arr.length ==0) return null;
    let maxFrequency =1;
    let maxFrequencyEle1 = arr[0];
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])){
            map.set(arr[i], map.get(arr[i])+1)

            if(maxFrequency <map.get(arr[i])){
                maxFrequency = map.get(arr[i]);
                maxFrequencyEle1 = arr[i];
            }
        }else{
            map.set(arr[i],1)
        }
    }
    console.log(maxFrequencyEle1,"is present ",maxFrequency,"times")
}

maxFrequencyEle(arr);