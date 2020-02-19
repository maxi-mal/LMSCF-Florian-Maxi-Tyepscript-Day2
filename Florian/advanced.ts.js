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
var mainclass = /** @class */ (function () {
    function mainclass(a, b, c, d) {
        this.brand = a;
        this.names = b;
        this.year = c;
        this.cost = d;
    }
    mainclass.prototype.printmain = function () {
        return "\n\t\t\t<table class=\"table\">\n\t\t\t    <thead>\n\t\t\t      <tr class=\"text-white\">\n\t\t\t        <th>brand</th>\n\t\t\t        <th>names</th>\n\t\t\t        <th>year</th>\n\t\t\t        <th>cost</th>\n\t\t\t        \n\t\t\t      </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t      <tr class= \"text-white\">\n\t\t\t        <td>" + this.brand + "</td>\n\t\t\t        <td>" + this.names + "</td>\n\t\t\t        <td>ab" + this.year + "</td>\n\t\t\t        <td>" + this.cost + "$</td>\n\t\t\t      </tr>\n\t\t\t     \n\t\t\t    </tbody>\n  \t\t\t</table>\n\t\t";
    };
    return mainclass;
}());
var pleaseWork = new mainclass("volkswagen", "Karmann-Giha", 1955, 12000);
console.log(pleaseWork.printmain());
document.getElementsByClassName("inputbox")[0].innerHTML = (pleaseWork.printmain());
var yesitworks = new mainclass("BMW", "Isetta", 1955, 15000);
// document.getElementsByClassName("inputboxtwo")[0].innerHTML = (yesitworks.printmain());
var itworks = new mainclass("Volkswagen", "Käfer", 1945, 8000);
document.getElementsByClassName("inputboxkaefer")[0].innerHTML = (itworks.printmain());
var works = new mainclass("DMC", "DeLorian", 1981, 27000);
document.getElementsByClassName("inputboxdelorian")[0].innerHTML = (works.printmain());
var motor = /** @class */ (function (_super) {
    __extends(motor, _super);
    function motor(a, b, c, d, horsepower, max_speed) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.horsepower = horsepower;
        _this.max_speed = max_speed;
        return _this;
    }
    motor.prototype.withmotor = function () {
        return _super.prototype.printmain.call(this) + ("\n\t\t\t\t<table class=\"table\">\n\t\t\t    <thead>\n\t\t\t      <tr class=\"text-white\">\n\t\t\t        <th>Horsepower</th>\n\t\t\t        <th>Max Speed</th>\n\t\t\t       </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t    \t<tr class= \"text-white\">\n\t\t\t        <td>" + this.horsepower + "</td>\n\t\t\t        <td>" + this.max_speed + "km/h</td>\n\t\t\t    \t</tr>\n\t\t\t     </tbody>\n  \t\t\t</table>\n\t");
    };
    return motor;
}(mainclass));
var yes = new motor("BMW", "Isetta", 1955, 15000, 13, 85);
document.getElementsByClassName("inputboxtwo")[0].innerHTML = (yes.withmotor());
var yesone = new motor("volkswagen", "Karmann-Giha", 1955, 12000, 44, 120);
document.getElementsByClassName("inputbox")[0].innerHTML = (yesone.withmotor());
