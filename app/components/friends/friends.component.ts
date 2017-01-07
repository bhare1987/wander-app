import { Component, OnInit } from "@angular/core";
import { Friend } from "./friend";
import { isIOS } from "platform";
import { SideDrawerService } from "../../shared/sidedrawer.service";
import { topmost } from "ui/frame";

@Component({
    selector: "wander-friends",
    templateUrl: "./components/friends/friends.component.html",
    styleUrls: ["./components/friends/friends.component.css"]
})
export class FriendsComponent implements OnInit {
    public controller;
    public navItem;
    public friends: Array<Friend>
    constructor( private sideDrawerService: SideDrawerService ) {
        this.friends = [];
    }
    
    ngOnInit() {
        this.controller = topmost().ios.controller;
        this.navItem = this.controller.visibleViewController.navigationItem;
        this.navItem.setHidesBackButtonAnimated(true, false);
        this.friends.push({
            image: "~/assets/placeholder.jpg",
            name: "Brandon Hare"
        });
        this.friends.push({
            image: "~/assets/placeholder.jpg",
            name: "Nathan Hall"
        });
    }

    onFriendSelect(event) {
        console.log('event', event);
    }

    toggleMenu() {
        this.sideDrawerService.toggleMenu();
    }
    



}