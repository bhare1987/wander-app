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
        var _this = this;
        this.userService.register(this.user)
            .then(function (data) {
            // console.log("BACK FROM MY STUFF", JSON.stringify(data["_bodyText"]))
            data = JSON.parse(data["_bodyText"]);
            _this.user.token = data.token;
            _this.user.name = data.profile.name;
            _this.user.photo = data.photo;
            console.log("USER: ", JSON.stringify(_this.user));
            return _this.user;
        })
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