"use strict";
var friends_component_1 = require("./components/friends/friends.component");
var home_component_1 = require("./components/home/home.component");
var notifications_component_1 = require("./components/notifications/notifications.component");
var map_component_1 = require("./components/map/map.component");
var login_component_1 = require("./components/login/login.component");
exports.AppRoutes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "friends", component: friends_component_1.FriendsComponent },
    { path: "notifications", component: notifications_component_1.NotificationsComponent },
    { path: "map", component: map_component_1.MapComponent },
    { path: "login", component: login_component_1.LoginComponent }
];
exports.AppComponents = [
    friends_component_1.FriendsComponent,
    home_component_1.HomeComponent,
    notifications_component_1.NotificationsComponent,
    map_component_1.MapComponent,
    login_component_1.LoginComponent
];
//# sourceMappingURL=app.routing.js.map