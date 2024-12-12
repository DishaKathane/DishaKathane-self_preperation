// remove duplicates;

let arr = [1,2,3,3,3,3,3,5,6,7,8,9];

function duplicateremove(arr){
    let map = {};
    for(let i of arr ){
    map[i] = (map[i]||0)+1    
    }
    // console.log(JSON.stringify(map));
    // let array= Object.keys(map);
    rr1=[]
    for(let i in map){
        console.log("i ------------------->",i)
        // if( map[i] >1){
        rr1.push(parseInt(i))
    //    }
    }
   return rr1

}
console.log(duplicateremove(arr))