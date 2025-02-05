function firstNegativenumber(arr,n,k){
    let result = [];
    for(let i=0;i<(n-k+1); i++){
        let condition=true;
        for(let j=i; j<i+k; j++){
            if(arr[j]<0){
                result.push(arr[j]);
                condition = false;
                break;
            }
        } 
        if(condition === true){
            result.push(0);
        }
    }
    return result;
}
console.log(firstNegativenumber([12, -1, -7, 8, -15, 30, 16, 28], 8, 3));