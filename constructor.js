// var obj_name = new Object();


// var rect2 = new Object();
// rect2.width = 9;
// rect2.length = 10;
// rect2.getarea = function(){
//     // document.write("<>")
//     return this.length* this.width;
// };
// rect2.getParameter = function(){
//     return 2*this.length* this.width;
// }

// document.write("<h1>"+rect2.length+"</h1>")
// document.write("<h1>"+rect2.width+"</h1>")
// document.write("<h1>"+rect2.getarea()+"</h1>")
// document.write("<h1>"+rect2.getParameter()+"</h1>")

function rect3(length,width){
    this.length = length;
    this.width = width;
    this.getarea = function(){
        return length*width
    };
    this.getparameter = function(){
        return 2*length*width
    }
}
let para = new rect3(7,10)
document.write(para.getarea());
document.write("<br>",para.getparameter())

