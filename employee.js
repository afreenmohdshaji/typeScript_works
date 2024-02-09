var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setEmployee = function (code, name, department, salary) {
        this.code = code;
        this.name = name;
        this.department = department;
        this.salary = salary;
    };
    Employee.prototype.printDetail = function () {
        console.log(this.name, this.department, this.salary);
    };
    return Employee;
}());
var obj = new Employee();
obj.setEmployee("er45", "hari", "hr", 50000);
obj.printDetail();
