import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from "../../shared/sidedrawer.service";

@Component({
    selector: 'wander-places',
    templateUrl: './components/places/places.component.html',
    styleUrls: ['./components/places/places.component.css']
})

export class PlacesComponent implements OnInit {
  constructor(
      private sideDrawerService: SideDrawerService
  ) {}

  ngOnInit() {

  }

  toggleMenu() {
      this.sideDrawerService.toggleMenu();
  }
}