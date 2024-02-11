let rect1 = {
    length : 5,
    width: 10,
    heigth:9,
    getarea : function(){
        return this.length * this.width  //l*w area of rectangle
    },
    getparameter : function(){
        return 2*this.length * this.width;
    }
};

document.write("<br><h2>"+rect1.length+"</h2>")
document.write("<br><h2>"+rect1.width+"</h2>")
document.write("<br><h2>"+rect1.getarea()+"</h2>")
document.write("<br><h2>"+rect1.getparameter()+"</h2>")
