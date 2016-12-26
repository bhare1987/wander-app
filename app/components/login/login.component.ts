import { Component } from '@angular/core';
import * as tnsOAuthModule from 'nativescript-oauth';
import { WANDER_BASE_API } from '../../config/keys';
import { User } from "../../shared/users/user";
import { UserService } from '../../shared/users/user.service';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  providers: [UserService]
})

export class LoginComponent {
   user: User;

   constructor(private userService: UserService) {
     this.user = new User();
   }

  public onLoginTap(event) {
    this.userService.register(this.user)
    .then((data:any) => {
      // console.log("BACK FROM MY STUFF", JSON.stringify(data["_bodyText"]))
      data = JSON.parse(data["_bodyText"])
      this.user.token = data.token
      this.user.name = data.profile.name
      this.user.photo = data.photo

      console.log("USER: ", JSON.stringify(this.user))
      return this.user
    })
    .catch((err) => console.log("did not work in login comp", err))
  }

}
