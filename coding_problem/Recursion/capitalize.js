/**['hi', 'hello'] -->['Hi', "Hello"] 
 * capitalize the first letter of all the string of an array of string
*/

function capitalize(words){
    console.log(words)
    if(words.length == 0) return ;
    let newArr = [];
    for( let word of words){
        let firstLetter = word.substring(0,1);
        // console.log(firstLetter)
        firstLetter = firstLetter.toUpperCase();
        // console.log(firstLetter)
        let restletter = word.substring(1)
        // return restletter
        newArr.push(firstLetter+restletter)
    }
    return newArr
    
}
console.log(capitalize(["hi","hello"]));

// By Using Recursion

function RecursionArr(arr){
    if(arr.length == 0) return arr;
    let newArr = [];
    let ele = arr[0];
    let fletter = ele.charAt().toUpperCase();
    ele = fletter+ele.slice(1);
    console.log(ele);
    newArr.push(ele);
    newArr = newArr.concat(RecursionArr(arr.slice(1)));
    return newArr;
}
console.log(RecursionArr(["hi","hello"]));

function capitalizeTitle(title){
    let newArr = [];
   title = title.toLowerCase();
   console.log(title)
   let word = title.split(" ")
   console.log(word);
   for(let i of word){
    let firstLetter = i.substring(0,1).toUpperCase();
    let restletter = i.substring(1);
    newArr.push(firstLetter+restletter);
    console.log(newArr)

    // console.log(firstLetter+restletter)
   }
   return newArr.join(" ")
}
let title = "First leTTeR of EACH Word"

console.log(capitalizeTitle(title)) 
// expected output
// First Letter Of Each Word

