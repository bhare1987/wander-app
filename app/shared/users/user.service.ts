import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import * as tnsOAuthModule from 'nativescript-oauth';
import { WANDER_BASE_API } from "../../config/keys"
var fetchModule = require('fetch');

import { User } from "./user";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  public register(user: User) {
    return new Promise((resolve,reject) => {

      tnsOAuthModule.login()
        .then((data)=>{
            console.dir("accessToken " + JSON.stringify(data));

            return data
        })
        .then((data) => {
          return new Promise((yay,nay) => {
            fetchModule.fetch(`${WANDER_BASE_API}/auth/facebook/callback`, {method: 'POST', body: JSON.stringify({accessToken: data}), headers: {"Content-Type":"application/json" } })
            .then((resp) => yay(resp))
            .catch((err) => nay(err))
          })
        })
        .then((successStuff) => {
          resolve(successStuff)
        })
        .catch((err) => {
          reject(err)
        })
    })

  }
}
