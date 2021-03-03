"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.Controller = exports.View = exports.Model = exports.Config = void 0;
var inversify_1 = require("inversify");
var inversify_config_1 = require("./inversify.config");
require("reflect-metadata");
var Config = /** @class */ (function () {
    function Config() {
        this.namePrompt = "What's your name?\n> ";
        this.repeatPrompt = 'Want to render another View? (y/n)\n> ';
        this.noChoices = ['n', 'no', 'nope', 'nein'];
    }
    Config = __decorate([
        inversify_1.injectable()
    ], Config);
    return Config;
}());
exports.Config = Config;
var Model = /** @class */ (function () {
    function Model() {
    }
    Model.prototype.getMessage = function (personName) {
        return "Hello " + personName + "!";
    };
    Model = __decorate([
        inversify_1.injectable()
    ], Model);
    return Model;
}());
exports.Model = Model;
var View = /** @class */ (function () {
    function View(personName) {
        this.personName = personName;
    }
    View.prototype.render = function () {
        console.log('--- RENDERED VIEW ---');
        console.log(this.model.getMessage(this.personName));
        console.log('---------------------');
    };
    __decorate([
        inversify_1.inject(Model),
        __metadata("design:type", Model)
    ], View.prototype, "model");
    View = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [String])
    ], View);
    return View;
}());
exports.View = View;
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.start = function () {
        while (true) {
            var name_1 = this.prompt(this.config.namePrompt);
            // Using DI with a custom class to inject dynamic value
            var viewDI = new inversify_config_1.ViewContainer(name_1);
            this.view = viewDI.container.get(View);
            this.view.render();
            var choice = this.prompt(this.config.repeatPrompt);
            if (this.config.noChoices.includes(choice.toLowerCase())) {
                break;
            }
        }
        console.log('---------------------');
        console.log("That's it, thanks!");
    };
    __decorate([
        inversify_1.inject(Config),
        __metadata("design:type", Config)
    ], Controller.prototype, "config");
    __decorate([
        inversify_1.inject('prompt-sync'),
        __metadata("design:type", Function)
    ], Controller.prototype, "prompt");
    Controller = __decorate([
        inversify_1.injectable()
    ], Controller);
    return Controller;
}());
exports.Controller = Controller;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function () {
        console.log('log.');
    };
    return Logger;
}());
// Resolve Dependencies
var c = inversify_config_1["default"].get(Controller);
// RUN BOY RUN!
c.start();
//# sourceMappingURL=main.js.map