import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { SideDrawerService } from "../shared/sidedrawer.service";

@Component({
    selector: "wander-app",
    templateUrl: "./components/app.component.html",
    styleUrls: ["./components/app.component.css"]
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private sideDrawerService: SideDrawerService
    ) {
        this.sideDrawerService.triggerMenu.subscribe(
            triggerMenu => this.toggleDrawer()
        );
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngOnInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.ios.attachDrawerToWindow();
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.drawer.closeDrawer();
            }
        });
    }

    toggleDrawer() {
        this.drawer.toggleDrawerState()
    }
}
