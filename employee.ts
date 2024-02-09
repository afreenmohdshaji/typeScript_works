class Employee{
    code:string
    name:string
    department:string
    salary:Number

    setEmployee(code:string,name:string,department:string,salary:Number){
        this.code=code;
        this.name=name;
        this.department=department;
        this.salary=salary;
    }

    printDetail(){
        console.log(this.name,this.department,this.salary);
        
    }
}

let obj=new Employee()
obj.setEmployee("er45","hari","hr",50000)
obj.printDetail()

