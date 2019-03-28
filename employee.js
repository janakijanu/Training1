function employee(a,b,c,d){
    var id=a;
    var name=b;
    var basicsalary=c;
    var grade=d;
    var allowance; 
    this.setId = function(a){
        id=a;
    }
    this.getId = function(){
        return id;
    }
    this.setName = function(b){
        name=b;
    }
    this.getName = function(){
        return name;
    }
    this.setBasicsalary = function(c){
        basicsalary=c;
    }
    this.getBasicsalary = function(){
        return basicsalary;
    }
    this.setGrade = function(d){
        grade=d;
    }
    this.getGrade = function(){
        return grade;
    }
    this.getTax = function(){
        tax = (10/100)*basicsalary;
        return tax;
    }
    this.getAllowance = function(){              
        switch(grade){
            case "A": allowance=(25/100)*basicsalary;break;
            case "B": allowance=(18/100)*basicsalary;break;
            case "C": allowance=(15/100)*basicsalary;break;
        }
        return allowance;
    }
    this.gatNetsalary = function(){
        return basicsalary+this.getAllowance()-this.getTax();
    }
}


