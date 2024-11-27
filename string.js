let string = "welcome to javascript";
var a = string.length;
document.write(a) 

// toLowercase || toUppercase
var b = string.toLowerCase();
var c = string.toUpperCase()

document.write("<br> </br>")
document.write("lowerCase -->", b)

document.write("<br></br>  uppercare ==> \n", c)

var d = string.includes("welcome");
document.write("<br> </br>",d);
let e = string.startsWith("welcome");
document.write("<br> </br>", e);

let f = string.endsWith("pt");
document.write("<br></br>",f );

let g = string.search("is");
document.write("<br></br> ",g);

let h = string.indexOf('called');

document.write("<br></br> " ,h);

let i = string.lastIndexOf("pt");

document.write("<br></br> ",i)

let j  = string.replace("javascript", "nodejs");
document.write("<br></br> ",j);

let k = string.concat(" father of js Brendan Eich");
document.write("<br></br> ",k);

let l = string.split(" ");
document.write("<br></br> ",l)

let m = string.slice(-10);
document.write("<br></br> slice method ",m);


let n = string.substring(5,10);
document.write("<br></br>  subtsring --> ",n);


