/**reverse str using recursion
 * 
 * given str "ssbcdad";
 * by using swapping
 * string =immutable hota h
 * arr = pass by ref hta h;
 */

function reverseArr(str, left, right){
    if(left<right){
        let temp = str[left];
        str[left]=str[right];
        str[right]=temp;
        return reverseArr(str, left+1, right-1)
    }
};

let str = "abcdefghijkl"
let arr1 = str.split("");
let left = 0;
let right = arr1.length-1    
reverseArr(arr1, left,right) 
let str1 =  arr1.join("")
// console.log(str1);

/**
 * very imp question :-
 * 
 *  recursion -V   
 * reverse each word of string in given manner (This question is very commenly repeated);
 * e.g. "Consept Of The Day"  => input string => "tpesnoC fO ehT yaD" 
 * we dont know how to reverse word on its own place
 * 
 * how we do this
 *
 * reverse word => 'abcdef' => "fedcba"
 * 
 * reverseSentanceWord() => split the sentence based on space => ['hi', 'to', 'all']
=> loop over the array and reverse each word using reverse each word using reverse functin and keep concat with the next word
//  hi to all 
 * */


//function to revrse any word reverse("any") => reverse("ny" +"a")

function reverse(word){
    if(word.length == 0) return "";
    return reverse(word.slice(1)) +word[0]
}
// console.log(reverse("hello"))
function reverseSentenceWord(sentence){
let word = sentence.split(" ");
for(let i=0;i<word.length; i++){
word[i] = reverse(word[i])
}
return word.join(" ")
};
console.log(reverseSentenceWord("today is satureday enjoy the weekend"))
