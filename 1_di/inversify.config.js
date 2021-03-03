"use strict";
exports.__esModule = true;
exports.ViewContainer = void 0;
var inversify_1 = require("inversify");
var main_1 = require("./main");
var prompt = require("prompt-sync");
var container = new inversify_1.Container();
container.bind(main_1.Model).to(main_1.Model);
container.bind(main_1.Controller).to(main_1.Controller);
container.bind(main_1.Config).to(main_1.Config);
//container.bind<Model>(Model).toConstantValue(new Model())
// container.bind<View>(View).toConstantValue(new View())
//container.bind<Controller>(Controller).toConstantValue(new Controller())
var thirdPartyDependencies = new inversify_1.ContainerModule(function (bind) {
    bind('prompt-sync').toDynamicValue(function () { return prompt(); });
});
container.load(thirdPartyDependencies);
var ViewContainer = /** @class */ (function () {
    function ViewContainer(personName) {
        this.container = this.injectView(personName);
    }
    ViewContainer.prototype.injectView = function (personName) {
        var container = new inversify_1.Container();
        container.bind(main_1.View).toDynamicValue(function () { return new main_1.View(personName); });
        return container;
    };
    return ViewContainer;
}());
exports.ViewContainer = ViewContainer;
exports["default"] = container;
//# sourceMappingURL=inversify.config.js.map