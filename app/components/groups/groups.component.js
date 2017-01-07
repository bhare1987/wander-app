"use strict";
var core_1 = require('@angular/core');
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var GroupsComponent = (function () {
    function GroupsComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
    }
    GroupsComponent.prototype.ngOnInit = function () {
    };
    GroupsComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    GroupsComponent = __decorate([
        core_1.Component({
            selector: 'wander-groups',
            templateUrl: './components/groups/groups.component.html',
            styleUrls: ['./components/groups/groups.component.css']
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], GroupsComponent);
    return GroupsComponent;
}());
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=groups.component.js.map