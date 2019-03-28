function calculator(action,num1,num2){
    function addnumbers(){
        return num1+num2;
    }
    function subnumbers(){
        return num1-num2;
    }    
    function mulnumbers(){
        return num1*num2;
    }
    function divnumbers(){
        return num1/num2;
    }
     var result;

     switch(action){
         case 1: result=addnumbers();break;
         case 2: result=subnumbers();break;
         case 3: result=mulnumbers();break;
         case 4: result=divnumbers();break;
     }

     return result;
}