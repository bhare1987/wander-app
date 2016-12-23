import { FriendsComponent } from "./components/friends/friends.component";
import { HomeComponent } from "./components/home/home.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";


export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "friends", component: FriendsComponent },
    { path: "notifications", component: NotificationsComponent }
];

export const AppComponents: any = [
    FriendsComponent,
    HomeComponent,
    NotificationsComponent
]