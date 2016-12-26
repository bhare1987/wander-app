import { FriendsComponent } from "./components/friends/friends.component";
import { HomeComponent } from "./components/home/home.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { MapComponent } from "./components/map/map.component";
import { LoginComponent } from "./components/login/login.component";


export const AppRoutes: any = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "friends", component: FriendsComponent },
    { path: "notifications", component: NotificationsComponent },
    { path: "map", component: MapComponent },
    { path: "login", component: LoginComponent }
];

export const AppComponents: any = [
    FriendsComponent,
    HomeComponent,
    NotificationsComponent,
    MapComponent,
    LoginComponent
]
