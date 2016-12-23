"use strict";
var core_1 = require('@angular/core');
var SideDrawerService = (function () {
    function SideDrawerService() {
        this.triggerMenu = new core_1.EventEmitter();
    }
    SideDrawerService.prototype.toggleMenu = function () {
        this.triggerMenu.emit(true);
    };
    SideDrawerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SideDrawerService);
    return SideDrawerService;
}());
exports.SideDrawerService = SideDrawerService;
//# sourceMappingURL=sidedrawer.service.js.map