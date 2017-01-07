import { FriendsComponent } from "./components/friends/friends.component";
import { GroupsComponent } from "./components/groups/groups.component";
import { HomeComponent } from "./components/home/home.component";
import { InvitationsComponent } from "./components/invitations/invitations.component";
import { LoginComponent } from "./components/login/login.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { PlacesComponent } from "./components/places/places.component";

export const AppRoutes: any = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "friends", component: FriendsComponent },
    { path: "groups", component: GroupsComponent },
    { path: "invitations", component: InvitationsComponent},
    { path: "login", component: LoginComponent },
    { path: "notifications", component: NotificationsComponent },
    { path: "places", component: PlacesComponent },
    
];

export const AppComponents: any = [
    FriendsComponent,
    GroupsComponent,
    HomeComponent,
    InvitationsComponent,
    LoginComponent,
    NotificationsComponent,
    PlacesComponent
]
