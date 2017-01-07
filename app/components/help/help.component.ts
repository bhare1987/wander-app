import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from "../../shared/sidedrawer.service";

@Component({
    selector: 'wander-help',
    templateUrl: './components/help/help.component.html',
    styleUrls: ['./components/help/help.component.css']
})

export class HelpComponent implements OnInit {
  constructor(
      private sideDrawerService: SideDrawerService
  ) {}

  ngOnInit() {

  }

  toggleMenu() {
      this.sideDrawerService.toggleMenu();
  }
}