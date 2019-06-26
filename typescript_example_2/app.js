var someValue = "on";
var x = 5;
var Colors;
(function (Colors) {
    Colors["red"] = "RED";
    Colors["green"] = "GREEN";
    Colors["blue"] = "BLUE";
})(Colors || (Colors = {}));
var sum = function (num1, num2) { return num1 + num2; };
sum(3, 5);
var T1 = /** @class */ (function () {
    function T1() {
        this.coords = {
            x: 1,
            y: 2,
            z: 3
        };
        this.base = 5;
        this.height = 10;
        this.area = function (base, height) { return .5 * base * height; };
        this.color = Colors.blue;
    }
    return T1;
}());
