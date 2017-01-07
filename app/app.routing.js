"use strict";
var friends_component_1 = require("./components/friends/friends.component");
var home_component_1 = require("./components/home/home.component");
var notifications_component_1 = require("./components/notifications/notifications.component");
// import { MapComponent } from "./components/map/map.component";
var login_component_1 = require("./components/login/login.component");
exports.AppRoutes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "friends", component: friends_component_1.FriendsComponent },
    { path: "notifications", component: notifications_component_1.NotificationsComponent },
    // { path: "map", component: MapComponent },
    { path: "login", component: login_component_1.LoginComponent }
];
exports.AppComponents = [
    friends_component_1.FriendsComponent,
    home_component_1.HomeComponent,
    notifications_component_1.NotificationsComponent,
    // MapComponent,
    login_component_1.LoginComponent
];
//# sourceMappingURL=app.routing.js.map