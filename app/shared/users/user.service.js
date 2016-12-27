"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var tnsOAuthModule = require('nativescript-oauth');
var keys_1 = require("../../config/keys");
var fetchModule = require('fetch');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return new Promise(function (resolve, reject) {
            tnsOAuthModule.login()
                .then(function (data) {
                console.dir("accessToken " + JSON.stringify(data));
                return data;
            })
                .then(function (data) {
                return new Promise(function (yay, nay) {
                    fetchModule.fetch(keys_1.WANDER_BASE_API + "/auth/facebook/callback", { method: 'POST', body: JSON.stringify({ accessToken: data }), headers: { "Content-Type": "application/json" } })
                        .then(function (resp) { return yay(resp); })
                        .catch(function (err) { return nay(err); });
                });
            })
                .then(function (successStuff) {
                resolve(successStuff);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map