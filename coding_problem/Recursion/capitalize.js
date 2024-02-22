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

