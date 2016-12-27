import { Component, OnInit } from "@angular/core";
import { topmost } from "ui/frame";
import { isIOS } from "platform";
import { SideDrawerService } from "../../shared/sidedrawer.service";

@Component({
    selector: "wander-friends",
    templateUrl: "./components/friends/friends.component.html",
})
export class FriendsComponent implements OnInit {
    public controller;
    public navItem;
    constructor( private sideDrawerService: SideDrawerService ) {

    }
    
    ngOnInit() {
        this.controller = topmost().ios.controller;
        this.navItem = this.controller.visibleViewController.navigationItem;
        this.navItem.setHidesBackButtonAnimated(true, false);
    }

    toggleMenu() {
        this.sideDrawerService.toggleMenu();
    }
    



}