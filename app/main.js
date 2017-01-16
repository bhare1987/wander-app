"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var keys_1 = require('./config/keys');
var keys_2 = require('./config/keys');
var keys_3 = require('./config/keys');
var tnsOAuthModule = require('nativescript-oauth');
var app_module_1 = require("./app.module");
var GooglePlaces = require("nativescript-google-places");
var platform = require("platform");
GooglePlaces.init({
    googleServerApiKey: keys_1.GOOGLE_MAP_API,
    language: 'en',
    radius: '100000'
});
var facebookInitOptions = {
    clientId: keys_2.FACEBOOK_CLIENT_ID,
    clientSecret: keys_3.FACEBOOK_CLIENT_SECRET,
    scope: ['email', 'user_friends', 'public_profile']
};
tnsOAuthModule.initFacebook(facebookInitOptions);
// before calling .boostrap
if (platform.isIOS) {
    GMSServices.provideAPIKey(keys_1.GOOGLE_MAP_API);
}
platform_1.platformNativeScriptDynamic({ bootInExistingPage: false, cssFile: "./styles/app.css" }).bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map