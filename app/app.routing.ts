import { FriendsComponent } from "./components/friends/friends.component";
import { GroupsComponent } from "./components/groups/groups.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { PlacesComponent } from "./components/places/places.component";

export const AppRoutes: any = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "friends", component: FriendsComponent },
    { path: "notifications", component: NotificationsComponent },
    { path: "places", component: PlacesComponent },
    { path: "groups", component: GroupsComponent },
    { path: "login", component: LoginComponent }
];

export const AppComponents: any = [
    FriendsComponent,
    GroupsComponent,
    HomeComponent,
    LoginComponent,
    NotificationsComponent,
    PlacesComponent
]
