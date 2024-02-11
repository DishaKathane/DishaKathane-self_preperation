var car1 = "honda";
var car2 = "kia";
var car3 = "ford";

document.write("<h1>"+car1+"</h1>");

document.write("<h1>"+car2+"</h1>");

document.write("<h1>"+car3+"</h1>");

var car = ["Honda","Kia","Ford"];

for(let i=0; i<car.length; i++){
    document.write("<h1>"+car[i]+"</h1>");
}
var fruits = new Array("apple","banana", "mango");
for(let i=0;i<fruits.length; i++){
    document.write("<h1>"+fruits[i]+"</h1>")
};

car.push("Nissan");
document.write("<h1>"+car+"</h1>");
car.pop();
document.write("<h1>"+car+"</h1>");
car.push(20)
document.write("<h1>"+car+"</h1>");

