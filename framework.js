var Django = /** @class */ (function () {
    function Django(name, architecture) {
        this.name = name;
        this.architecture = architecture;
    }
    Django.prototype.roadMap = function () {
        console.log(this.name, "is a", this.architecture, "framework");
    };
    return Django;
}());
var Angular = /** @class */ (function () {
    function Angular(name, architecture) {
        this.name = name;
        this.architecture = architecture;
    }
    Angular.prototype.roadMap = function () {
        console.log(this.name, "is a", this.architecture, "framework");
    };
    return Angular;
}());
var Student = /** @class */ (function () {
    function Student(frameork) {
        this.frameworkObj = frameork;
    }
    Student.prototype.learn = function () {
        this.frameworkObj.roadMap();
    };
    return Student;
}());
var obj = new Django("django", "mvt");
var obj2 = new Student(obj);
obj2.learn();
