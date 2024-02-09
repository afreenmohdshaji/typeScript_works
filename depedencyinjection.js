var PassionPro = /** @class */ (function () {
    function PassionPro(name) {
        this.name = name;
    }
    PassionPro.prototype.ride = function () {
        console.log(this.name, "rides");
    };
    return PassionPro;
}());
var Hunter = /** @class */ (function () {
    function Hunter(name) {
        this.name = name;
    }
    Hunter.prototype.ride = function () {
        console.log(this.name, "rides");
    };
    return Hunter;
}());
var Person = /** @class */ (function () {
    function Person(vehicle) {
        this.vehicleObj = vehicle;
    }
    Person.prototype.rider = function () {
        this.vehicleObj.ride();
    };
    return Person;
}());
var hunterObj = new Hunter("hunter");
var personObj = new Person(hunterObj);
personObj.rider();
