function fun1(){
    var x = document.getElementById("rad1");
    var y = document.getElementById("rad2");
    if(x.checked == true){
        alert("Right answer"+x.value);
    }else if(y.checked ==true){
        alert("wrong answer :"+y.value);
    }else{
        alert("No option selected...")
    }
}