var printnumber = function(){
    console.log(10);
}

setTimeout(printnumber,5000);
printnumber();

var i=1;
setTimeout(
    function(){
        console.log(++i)
    },2000);

    setInterval(
        function(){
            console.log(++i)
        },2000);