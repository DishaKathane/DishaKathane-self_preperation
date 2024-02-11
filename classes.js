class Student {
    constructor(name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    org() {  //define method in classes
        return ("I am " + this.name + " from the Self code")
    };
    dob() {
        return ("the date of birth of " + this.name + " is " + (2024 - this.age));
    };
    static add(a, b) {
        return a + b;
    }
};

// var Disha = new Student("Disha", 29, 45);
// console.log(Disha);
// console.log(Student.add(20, 34));


class Student1 extends Student {
    constructor(name, age,roll,language,section){
        super(name, age,roll) //refers to parents class 
        this.language = language;
        this.section = section;
    }
};

var shrushti = new Student1("srushti", 20,2,"nodejs","A")
console.log(shrushti)
console.log(Student1.add(20,90))


