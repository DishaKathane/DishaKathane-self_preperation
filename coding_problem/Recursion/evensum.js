let obj = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superNumber: 8,
            notNumber: true,
            notEven: 7
        }
    }
}
console.log(evenSum(obj))

function evenSum(obj){
    let sum =0;
    for(let key in obj){
        if(obj[key] !== null && typeof (obj[key]) ==="object"){
            console.log(obj[key])
            sum+=evenSum(obj[key])
        }else if(typeof (obj[key]) ==='number'){
                if(obj[key] %2 ===0){
                    console.log("obj[key] ------> ",obj[key])
                    sum +=obj[key]
                }
        }        
    }
    return sum;
}


function capitalize(arr){
    if(arr.length === 0) return arr;
    let result = [];
    let fletter = arr[0].slice(0,1).toUpperCase();
    let rletter = arr[0].slice(1);
    result.push(fletter+rletter);
    result = result.concat(capitalize(arr.slice(1)));
    return result;

}
let arr = ["cat","dog","lion"];
console.log(capitalize(arr));
