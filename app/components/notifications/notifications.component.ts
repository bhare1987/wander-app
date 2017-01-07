import { Component, OnInit } from "@angular/core";
import { SideDrawerService } from "../../shared/sidedrawer.service";

@Component({
    selector: "wander-notifications",
    templateUrl: "./components/notifications/notifications.component.html",
    styleUrls: ["./components/notifications/notifications.component.css"]
})
export class NotificationsComponent implements OnInit {
    public notifications: Array<any>;

    public constructor(
        private sideDrawerService: SideDrawerService
    ) {
        this.notifications = [];
    }

    ngOnInit() {
        this.notifications.push({
            message: 'Notification1'
        });
        this.notifications.push({
            message: 'Notification2'
        });
    }

    toggleMenu() {
        this.sideDrawerService.toggleMenu();
    }

}