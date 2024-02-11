// function something(){
//     let i = 0;
//         document.write("<br></br>" , "welcome to program i= \n ", i++  )
   
// }
// // setInterval("something() ",2000);

// var now = new Date();

// document.write(now);

function clock(){
    let cd = new Date();
    let hours = cd.getHours();
    let minutes = cd.getMinutes();
    let seconds = cd.getSeconds();
  document.write(  "<h2>"+ hours + ":"+ minutes +":"+seconds+"</h2>")
}

// setInterval("clock()",2000)

// document.write(clock1)
