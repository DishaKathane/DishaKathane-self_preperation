function print(){

  var x =   document.getElementById("username").value
var y = document.getElementById("upass").value

if(y=="simplicode"){
    alert("Login successfully")
}else{
    alert("wrong password entere")
}
alert("the name is :"+x+"\n"+"The password is :"+y);
}