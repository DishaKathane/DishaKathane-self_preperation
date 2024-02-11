// const Employee = {
//     post:function(){
//         return "A Software Developer"
//     },
//     changeName:function(name){
//         this.name = name;
//     }
// };

// // var E1 = Object.create(Employee);
// // E1.name = "Disha";
// // E1.role ="Developer";
// // E1.changeName("Ram");
// console.log(E1);

// var E1 = Object.create(Employee,{
//     name :{value:"Disha", writable:true},
//     role:{value:"Developer"}
// });

// E1.changeName("Ram");
// console.log(E1);

function Employee(name,id,salary){
    this.name = name;
    this.id =id;
    this.salary = salary
};

Employee.prototype.post = function(){
    return(this.name+ " "+"is a content creater")
}

var disha = new Employee("disha",1233,10000)
console.log(disha);

function programmer(name,id,salary,language){
    Employee.call(this, name,id,salary);
    this.language = language;
}
var Tushar = new programmer("Tushar", 2314,800000,"javascript");
console.log(Tushar);

