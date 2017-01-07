import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from "../../shared/sidedrawer.service";

@Component({
    selector: 'wander-invitations',
    templateUrl: './components/invitations/invitations.component.html',
    styleUrls: ['./components/invitations/invitations.component.css']
})

export class InvitationsComponent implements OnInit {
  constructor(
      private sideDrawerService: SideDrawerService
  ) {}

  ngOnInit() {

  }

  toggleMenu() {
      this.sideDrawerService.toggleMenu();
  }
}
