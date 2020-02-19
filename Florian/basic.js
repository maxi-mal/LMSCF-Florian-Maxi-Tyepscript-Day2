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
var Person = /** @class */ (function () {
    function Person(a, b, c, d) {
        this.firstName = a;
        this.lastName = b;
        this.age = c;
        this.job = d;
    }
    Person.prototype.printname = function () {
        return "My name is " + this.firstName + " " + this.lastName + " my age is " + this.age + " and my job is " + this.job + " ";
    };
    Person.prototype.deam = function () {
        return "hey " + this.printname();
    };
    return Person;
}());
var fullname = new Person("mario", "nelson", 30, "developer");
console.log(fullname.printname());
document.write(fullname.deam());
var VIP = /** @class */ (function (_super) {
    __extends(VIP, _super);
    function VIP(a, b, c, d, salary) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.salary = salary;
        return _this;
    }
    VIP.prototype.fullexercise = function () {
        return _super.prototype.deam.call(this) + ("with a salary of " + this.salary + ".");
    };
    return VIP;
}(Person));
var morefullname = new VIP("flo", "mustermann", 30, "developer", 5000);
document.write(morefullname.fullexercise());
