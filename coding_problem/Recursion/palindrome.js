/**
 * the given string is palindrome or not
 * naman = reverse(naman) => naman is same as original string;
 * abc =revesre(abc) =cba != palindrome
 */

function palindrome(str, left, right){
if(str.length <= 1) return true;
while(left<right){
    if(str[left] === str[right]){
        return palindrome(str,left+1, right-1);
    }else{
        return false;
    }
}
return true;
}
console.log(palindrome("madam", 0, 4))
let str = "naina";
let left = 0;
let right = str.length-1;
console.log(palindrome(str,left,right))

// Send method

function palindrom(str){
    if(str.length <= 1) return true;
    return (str[0] === str.slice(-1) && palindrom(str.slice(1,-1)))
};
console.log(palindrom("anana"));