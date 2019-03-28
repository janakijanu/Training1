function dosomething(a){
    console.log(typeof a);
    if(typeof a=='number')
     console.log(++a);
     if(typeof a=='function')
      a()
}

dosomething(10);

var welcomeuser = function(){
    console.log("welcome to hcl");
}

var goodbyeuser = function(){
    console.log("thanks");
}

dosomething(function(){console.log("in ofz")});

dosomething(welcomeuser);