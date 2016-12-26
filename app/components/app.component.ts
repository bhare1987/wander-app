import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { SideDrawerService } from "../shared/sidedrawer.service";

@Component({
    selector: "wander-app",
    templateUrl: "./components/app.component.html",
    styleUrls: ["./components/app.component.css"]
})
export class AppComponent implements OnInit { 
    constructor(private sideDrawerService: SideDrawerService ) {

    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngOnInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this.sideDrawerService.triggerMenu.subscribe(
            triggerMenu => this.drawer.toggleDrawerState()
        );
        this.drawer.ios.attachDrawerToWindow();
    } 
}
