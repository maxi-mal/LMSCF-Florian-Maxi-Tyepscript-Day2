var mainclass = /** @class */ (function () {
    function mainclass(a, b, c, d) {
        this.brand = a;
        this.names = b;
        this.year = c;
        this.cost = d;
    }
    mainclass.prototype.printmain = function () {
        return "\n\t\t\t<table class=\"table\">\n\t\t\t    <thead>\n\t\t\t      <tr>\n\t\t\t        <th>brand</th>\n\t\t\t        <th>names</th>\n\t\t\t        <th>year</th>\n\t\t\t        <th>cost</th>\n\t\t\t        \n\t\t\t      </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t      <tr>\n\t\t\t        <td>" + this.brand + "</td>\n\t\t\t        <td>" + this.names + "</td>\n\t\t\t        <td>" + this.year + "</td>\n\t\t\t        <td>" + this.cost + "$</td>\n\t\t\t      </tr>\n\t\t\t     \n\t\t\t    </tbody>\n  \t\t\t</table>\n\t\t";
    };
    return mainclass;
}());
var pleaseWork = new mainclass("volkswagen", "Karmann-Giha", 1955, 1200);
console.log(pleaseWork.printmain());
document.getElementById("inputbox").innerHTML = (pleaseWork.printmain());
