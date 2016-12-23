"use strict";
var core_1 = require("@angular/core");
var NotificationsComponent = (function () {
    function NotificationsComponent() {
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
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: "wander-notifications",
            templateUrl: "./components/notifications/notifications.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map