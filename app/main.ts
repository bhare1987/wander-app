// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { GOOGLE_MAP_API } from './config/keys';
import { FACEBOOK_CLIENT_ID } from './config/keys';
import { FACEBOOK_CLIENT_SECRET } from './config/keys';
import * as tnsOAuthModule from 'nativescript-oauth';
import { AppModule } from "./app.module";

import * as platform from "platform";
declare var GMSServices: any;

var facebookInitOptions : tnsOAuthModule.ITnsOAuthOptionsFacebook = {
    clientId: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    scope: ['email','user_friends','public_profile']
};

tnsOAuthModule.initFacebook(facebookInitOptions);


// before calling .boostrap
if( platform.isIOS ) {
    GMSServices.provideAPIKey(GOOGLE_MAP_API);
}

platformNativeScriptDynamic({bootInExistingPage:false, cssFile:"./styles/app.css"}).bootstrapModule(AppModule);
