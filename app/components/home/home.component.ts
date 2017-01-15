import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { SideDrawerService } from "../../shared/sidedrawer.service";
import { registerElement } from 'nativescript-angular/element-registry';
const GooglePlaces = require("nativescript-google-places");

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
    selector: "wander-home",
    templateUrl: "./components/home/home.component.html",
    styleUrls: ["./components/home/home.component.css"]
})
export class HomeComponent {
    @ViewChild("MapView") mapView: ElementRef;
    public address : Object;


    constructor( private sideDrawerService: SideDrawerService ) {

    }

    private autoComplete(event: any) {
      console.log(event.value)
      GooglePlaces.queryAutoComplete(event.value, 'restaurants').then((data) => console.log("SHIT FROM GOOGLE", JSON.stringify(data)))
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
