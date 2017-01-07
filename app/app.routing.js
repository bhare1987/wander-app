"use strict";
var friends_component_1 = require("./components/friends/friends.component");
var groups_component_1 = require("./components/groups/groups.component");
var home_component_1 = require("./components/home/home.component");
var invitations_component_1 = require("./components/invitations/invitations.component");
var login_component_1 = require("./components/login/login.component");
var notifications_component_1 = require("./components/notifications/notifications.component");
var places_component_1 = require("./components/places/places.component");
exports.AppRoutes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "friends", component: friends_component_1.FriendsComponent },
    { path: "groups", component: groups_component_1.GroupsComponent },
    { path: "invitations", component: invitations_component_1.InvitationsComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "notifications", component: notifications_component_1.NotificationsComponent },
    { path: "places", component: places_component_1.PlacesComponent },
];
exports.AppComponents = [
    friends_component_1.FriendsComponent,
    groups_component_1.GroupsComponent,
    home_component_1.HomeComponent,
    invitations_component_1.InvitationsComponent,
    login_component_1.LoginComponent,
    notifications_component_1.NotificationsComponent,
    places_component_1.PlacesComponent
];
//# sourceMappingURL=app.routing.js.map