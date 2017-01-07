import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from "../../shared/sidedrawer.service";


@Component({
    selector: 'wander-groups',
    templateUrl: './components/groups/groups.component.html',
    styleUrls: ['./components/groups/groups.component.css']
})

export class GroupsComponent implements OnInit {
  constructor(
      private sideDrawerService: SideDrawerService
  ) {}

  ngOnInit() {

  }

  toggleMenu() {
      this.sideDrawerService.toggleMenu();
  }
}
