/**
 * Roman to Integer Conversion
Last Updated : 17 Sep, 2024
Given a string in roman form, the task is to convert this given roman string into an integer.

Roman numerals are based on the symbols I, V, X, L, C, D, and M, which represent 1, 5, 10, 50, 100, 500, and 1,000, respectively. Different arrangements of these symbols represent different numbers. The roman numbers I, II, III, IV, V, VI, VII, VIII, IX, and X represent 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10 respectively.

How does the conversion work?

If a larger value symbol comes before, we subtract. Otherwise, we add.
In IV, I comes before V and V has a larger value 5. So our result is 5 – 1 = 4.
In VI, V comes before I and I has a smaller value 1. So our result is 5 + 1 = 6.
In II, we have same values, so we add and get 1 + 1 = 2
In case of more than 2 characters, we traverse from left to right and group only when we see a greater value character after a smaller. For example MXVII is 1000 + 10 + 5 + 1 + 1 = 1017. And XLVII is (50 – 10) + 5 + 1 + 1 = 47. Note that L is larger and comes after X.
Example:

Input: IX
Output: 9
Explanation: IX is a Roman symbol which represents 10 – 1 = 9


Input: XL
Output: 40
Explanation: XL is a Roman symbol which represents 50 – 10 = 40


Input: MCMIV
Output: 1904
Explanation: M is 1000, CM is 1000 – 100 = 900, and IV is 4. So we have total as 1000 + 900 + 4 = 1904
 */
function  value(r){
    if(r === "I") return 1;
    if(r==="V")  return 5;
    if(r ==="X") return 10;
    if(r ==="L") return 50;
    if(r ==="C") return 100;
    if(r ==="D") return 500;
    if(r ==="M") return 1000;
}

function romanT0Desimal(str){
    let res = 0;
    for(let i=0; i<str.length;i++){
        let s1 = value(str[i]);
        if(i+1<str.length){
            s2 = value(str[i+1]);
            if(s1 >s2){
                res +=s1
            }else{
                res += (s2-s1);
                i++
            }
        }else{
            res +=s1
        };
    }
    return res;
};
console.log(romanT0Desimal("IX"));
console.log(romanT0Desimal("XL"))