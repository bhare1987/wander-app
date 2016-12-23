import { Component, OnInit } from "@angular/core";

@Component({
    selector: "wander-notifications",
    templateUrl: "./components/notifications/notifications.component.html",
})
export class NotificationsComponent implements OnInit {
    public notifications: Array<any>;

    public constructor() {
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

}