var a=100;//global

function greet(){
    var y=200;//local
    console.log(25);
}

function goodbye(){
    h=300;
    console.log(a);
}

function test(a,b){
    if(typeof a == 'undefined')
        a=0;
    if(typeof b == 'undefined')
        b=0;
    console.log(a+b);
}

function test1(a,b){
    if(typeof a == 'string'){
        a=parseInt(a);
    }
    if(typeof b == 'string'){
    b=parseInt(b);
    }
}

var sum=0;
 function sumof(no){
     if(typeof no == 'string'){
         no = parseInt(no);
         if(isNaN(no)){
             return 0
         }else{
            for(i=1;i<=no;i++){
                sum=sum+i;
            }
            return sum;
        }
    }
}

sumof(10);

greet();
goodbye();
test(20,30);
test(20,"abc");
test(40);
test();
test(20,40,50);
test1(20,30);
test1(20,"abcd");