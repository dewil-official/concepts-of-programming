var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicCar = /** @class */ (function () {
    function BasicCar(brand, model) {
        this.speed = 0;
        this.acceleration = 20;
        this.brand = brand;
        this.model = model;
    }
    BasicCar.prototype.accelerate = function () {
        this.speed = this.speed + this.acceleration;
        return this.brand + " " + this.model + " is driving " + this.speed;
    };
    BasicCar.prototype.decelerate = function () {
        this.speed >= this.acceleration ? this.speed - this.acceleration : this.speed = 0;
        return this.brand + " " + this.model + " is driving " + this.speed;
    };
    return BasicCar;
}());
var FastCar = /** @class */ (function (_super) {
    __extends(FastCar, _super);
    function FastCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Overrides variable
        _this.acceleration = 40;
        return _this;
        /* Inherits all the rest */
    }
    // Adds method
    FastCar.prototype.shoutOutOfTheWindow = function () {
        console.log("Opening window...");
        setTimeout(function () {
            console.log("You shouted: YOU LOOSERS ARE TOO SLOW!");
            console.log("Closing window again...");
        }, 1000);
    };
    return FastCar;
}(BasicCar));
/* RUNNING IT! */
var car = new BasicCar("Ford", "Focus");
var fasterCar = new FastCar("Daimler", "E-Coupé");
// The fasterCar is faster. Variable got overwritten.
console.log(car.accelerate());
console.log(fasterCar.accelerate());
// This method is only available on the FastCar
fasterCar.shoutOutOfTheWindow();
