console.log("welocme to simplicode");

let abc = {
    name : "disha",
    subject:"javascript",
    address : "Banglore"
}

// console.log(abc);

// constructor

function xyz(name,subject,address){
    this.name = name;
    this.address = address;
    this.subject = subject;
}


xyz.prototype.getname = function(){
    return this.name
}
xyz.prototype.grades ="A"
let x1 = new xyz("Disha", "Java", "Earth") ;
console.log(x1);