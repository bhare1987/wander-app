import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from "../../shared/sidedrawer.service";

@Component({
    selector: 'wander-settings',
    templateUrl: './components/settings/settings.component.html',
    styleUrls: ['./components/settings/settings.component.css']
})

export class SettingsComponent implements OnInit {
  constructor(
      private sideDrawerService: SideDrawerService
  ) {}

  ngOnInit() {

  }

  toggleMenu() {
      this.sideDrawerService.toggleMenu();
  }
}