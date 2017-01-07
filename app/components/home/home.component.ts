import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { SideDrawerService } from "../../shared/sidedrawer.service";
import { registerElement } from 'nativescript-angular/element-registry';

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
    selector: "wander-home",
    templateUrl: "./components/home/home.component.html",
    styleUrls: ["./components/home/home.component.css"]
})
export class HomeComponent {
    @ViewChild("MapView") mapView: ElementRef;
    constructor( private sideDrawerService: SideDrawerService ) {

    }

   //Map events
   onMapReady = (event) => {
       console.log("Map Ready");
   };

    toggleMenu() {
        this.sideDrawerService.toggleMenu();
    }

    toggleSearch() {
        console.log("search!");
    }
}
