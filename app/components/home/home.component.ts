import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { SideDrawerService } from "../../shared/sidedrawer.service";
import { registerElement } from 'nativescript-angular/element-registry';
const geolocation = require("nativescript-geolocation");
const GooglePlaces = require("nativescript-google-places");

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
    selector: "wander-home",
    templateUrl: "./components/home/home.component.html",
    styleUrls: ["./components/home/home.component.css"]
})
export class HomeComponent implements OnInit {
    @ViewChild("MapView") mapView: ElementRef;
    public address : Object;
    public places: Array<any>;
    public location;
    constructor( private sideDrawerService: SideDrawerService ) {}

    ngOnInit() {
        if (!geolocation.isEnabled()) {
            console.log('we fired')
            geolocation.enableLocationRequest()
            .then(() => {
                geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000})
            })
            .then(loc => {
                console.log('current location', loc)
            })
            .catch(err => console.log('error', err));
        } 
    }

    autoComplete(event: any) {
        console.log(event.value)
        GooglePlaces.queryAutoComplete(event.value, 'restaurants')
            .then(data => this.places = data)
    }

    onPlaceSelect(event) {
        console.log('Place!');
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
