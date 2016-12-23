"use strict";
var friends_component_1 = require("./components/friends/friends.component");
var home_component_1 = require("./components/home/home.component");
var notifications_component_1 = require("./components/notifications/notifications.component");
exports.AppRoutes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "friends", component: friends_component_1.FriendsComponent },
    { path: "notifications", component: notifications_component_1.NotificationsComponent }
];
exports.AppComponents = [
    friends_component_1.FriendsComponent,
    home_component_1.HomeComponent,
    notifications_component_1.NotificationsComponent
];
//# sourceMappingURL=app.routing.js.map