class Employee{
    employeeId
    employeeName
    email
    dob
    gender

    constructor(id,name,email,dob,gender)
    {
        this.employeeId=id;
        this.employeeName=name;
        this.email=email;
        this.dob=dob;
        this.gender=gender;
    }

    printEmployee2(){
        console.log(this)
    }
}

class manager extends Employee{
    managerId;
    constructor(id,name,email,dob,gender,managerId){
        super(id,name,email,dob,gender);
        this.managerId=managerId;

    }

    printEmployee1(){
        console.log(this)
    }
}

let emp1=new Employee(1001,"javed",'javed@yahoo.com','2002-10-10','male')
let emp=new manager(1001,"javed",'javed@yahoo.com','2002-10-10','male',123)
//console.log(emp)
emp.printEmployee1();
emp1.printEmployee2();