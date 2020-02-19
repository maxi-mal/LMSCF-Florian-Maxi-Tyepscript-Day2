// <Basic 1:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // Create a class constructor named Person that should hold information about name, age,  jobTitle and have 
// a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)” 
// //  -->
var Person = /** @class */ (function () {
    function Person(name, age, jobtitle) {
        this.name = "Maxi";
        this.age = 34;
        this.jobtitle = "coder";
        this.name = name;
        this.age = age;
        this.jobtitle = jobtitle;
    }
    Person.prototype.whoami = function () {
        return "My name is " + this.name + " and I am " + this.age + " years old and a " + this.jobtitle;
    };
    Person.prototype.hi = function () {
        return "Hi " + this.name;
    };
    return Person;
}());
var newperson = new Person("Maxi", 34, "coder");
document.write(newperson.whoami());
// Basic 2
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var secondperson = new Person("Serri", 30, "coder");
console.log(secondperson.jobtitle);
console.log(secondperson.hi());
var addattr = /** @class */ (function (_super) {
    __extends(addattr, _super);
    function addattr(name, age, jobtitle, salary, joblocation) {
        var _this = _super.call(this, name, age, jobtitle) || this;
        _this.salary = salary;
        _this.joblocation = joblocation;
        return _this;
    }
    addattr.prototype.whodis = function () {
        return "<br>" + _super.prototype.whoami.call(this) + " - I get " + this.salary + " every month and I work in " + this.joblocation + ".";
    };
    return addattr;
}(Person));
var me = new addattr("Maxi", 34, "coder", 3000, "Vienna");
document.write(me.whodis());
