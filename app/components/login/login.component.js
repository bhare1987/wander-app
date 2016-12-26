"use strict";
var core_1 = require('@angular/core');
var user_1 = require("../../shared/users/user");
var user_service_1 = require('../../shared/users/user.service');
var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.onLoginTap = function (event) {
        this.userService.register(this.user)
            .then(function (data) { return console.log("BACK FROM MY STUFF", JSON.stringify(data)); })
            .catch(function (err) { return console.log("did not work in login comp", err); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map