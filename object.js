// var car_manifacturer = "Audi";
// var car_model = "07";
// var price = 700000;
// function allwheelDrive(){
//     document.write("This car comes with Quattro all-wheel-drive");
// };
// allwheelDrive();



// // object constructor 

// // second way to create object :
// function cars(car_manifacturer,car_model,price){
//     this.car_manifacturer = car_manifacturer;
//     this.car_model = car_model;
//     this.price = price;

//     this.allwheelDrive = function(){
//         document.write("This car comes with four all-wheel-drive");
//     }
// };

// var c1 = new cars("audi", "q7",5000000);
// c1.allwheelDrive();


// var c2 = new cars("bmw","x7",9000000)

// document.write("<br> </br>",c2.car_manifacturer,"<br> </br>",c2.price);


var str1 = new String();
document.write(typeof(str1));

// object literals
let car = {
    car_manifacturer : "AUdi",
    car_model:"Q7",
    price:7000000,
    allwheelDrive: function(){
        return ("This car comes with four all-wheel-drive");
    }
};
// car.allwheelDrive()

document.write("<h1>"+car.allwheelDrive()+"</h1>");

car.car_lolor ="Black";
document.write(car.car_lolor);

car.fuel_type = "petrol";
car.newfun = function(){
    return ("functiom successfully added")
};
// document.write("<h1>"+ car.newfun()+"</h1>");

// delete car.car_model;
// document.write("<h1>"+ car.car_model+"</h1>");
car.price ="9000000";

document.write("<h1>"+ typeof(car.price)+"</h1>");






