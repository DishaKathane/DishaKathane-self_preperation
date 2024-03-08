// check interger 
/****
 checkInterger(123.34)=> false;
 checkInterger("hello")=> false;
 checkInterger(78) =>true;
 * take an input and check whether the input is an integer or not 
 
 approach 1: if the ip is int then every char should digit i.e every char should be among 0-9
 step: have a  separate check if 1st charector is "-"
 
 if yes , check if all the remaining charactor (i=1 t0 length-1) lie among [0,1,2,3,4,5,6,7,8,9];
    
    if no, check all characters (i=0 to length-1)
    
    approach2:- 
  -define the proper regex an interger ;
  test if input falls in this pattern or not
    let pattern =/^-?[0-9]+$/
let reult = pattern.test(int)

any integer formed by using 0-9
[0,1,2,3,4,5,6,7,8,9]
    */

function isInteger(num) {
    let isInt = true;
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= '0' && num[i] <= '9') {
            continue;
        } else {
            isInt = false;
            break;
        }
    };
    return isInt;
};
console.log(isInteger('1234'));
console.log(isInteger('1.234'));
console.log(isInteger('1kk234'));


let regex = /^-?[0-9]+$/;
let result = regex.test('ko9');
console.log(result);