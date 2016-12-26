import { Component, ElementRef, ViewChild } from '@angular/core';
import { SideDrawerService } from "../../shared/sidedrawer.service";

@Component({
    selector: "wander-home",
    templateUrl: "./components/home/home.component.html",
})
export class HomeComponent {
    constructor( private sideDrawerService: SideDrawerService ) {

    }

    toggleMenu() {
        this.sideDrawerService.toggleMenu();
    }

    toggleSearch() {
        console.log("search!");
    }
}
