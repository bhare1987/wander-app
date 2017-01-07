"use strict";
var core_1 = require("@angular/core");
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var NotificationsComponent = (function () {
    function NotificationsComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
        this.notifications = [];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        this.notifications.push({
            message: 'Notification1'
        });
        this.notifications.push({
            message: 'Notification2'
        });
    };
    NotificationsComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: "wander-notifications",
            templateUrl: "./components/notifications/notifications.component.html",
            styleUrls: ["./components/notifications/notifications.component.css"]
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map