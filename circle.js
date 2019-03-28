function circle(x,y,r){
    var midpointx=x;
    var midpointy=y;
    var radius=r;
    this.setx = function(x){
        midpointx=x;
    }
    this.getx = function(){
        return midpointx;
    }
    this.sety = function(y){
        midpointy=y;
    }
    this.gety = function(){
        return midpointy;
    }
    this.setradius = function(r){
        radius=r;
    }
    this.getradius = function(){
        return radius;
    }
    this.getarea = function(){
        return 3.14*radius*radius;
    }
    this.getcircumference = function(){
        return 2*3.14*radius;
    }
}

// var c1 = new circle(5,6,20);
// var c2 = new circle(15,16,2);
// var c3 = new circle(25,66,10);
// console.log(c1.getarea());
// console.log(c1.getcircumference());

// console.log(c2.getarea());
// console.log(c2.getcircumference());

// console.log(c3.getarea());
// console.log(c3.getcircumference());