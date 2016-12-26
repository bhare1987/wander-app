"use strict";
var core_1 = require('@angular/core');
var fetchModule = require('fetch');
var tnsOAuthModule = require('nativescript-oauth');
var keys_1 = require('../../config/keys');
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.onLoginTap = function (event) {
        tnsOAuthModule.login()
            .then(function (data) {
            console.log('logged in');
            console.dir("accessToken " + JSON.stringify(data));
            fetchModule.fetch(keys_1.WANDER_BASE_API + "/auth/facebook/callback", { method: 'POST', body: JSON.stringify({ accessToken: data }), headers: { "Content-Type": "application/json" } })
                .then(function (resp) {
                console.log("RESP FROM MY SERVER", JSON.stringify(resp));
            })
                .catch(function (err) {
                console.log('errror from my server', err);
            });
        })
            .catch(function (err) {
            //do something with the error
            console.log("FUCK", err);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map