function main(){
    var a=10;
    var b=40;
    function sum(){
        console.log(a+b);
    }
    var multiply = function(){
        console.log(a*b);
    }
    return multiply;
    // sum();
    // multiply();
    // return 0;
}

//main();
// console.log(main());
// var m=main;
// console.log(m());
var dummy = main();
dummy();