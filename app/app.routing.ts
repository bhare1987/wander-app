import { FriendsComponent } from "./components/friends/friends.component";
import { GroupsComponent } from "./components/groups/groups.component";
import { HelpComponent } from "./components/help/help.component";
import { HomeComponent } from "./components/home/home.component";
import { InvitationsComponent } from "./components/invitations/invitations.component";
import { LoginComponent } from "./components/login/login.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { PlacesComponent } from "./components/places/places.component";
import { SettingsComponent } from "./components/settings/settings.component";

export const AppRoutes: any = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "friends", component: FriendsComponent },
    { path: "groups", component: GroupsComponent },
    { path: "help", component: HelpComponent },
    { path: "invitations", component: InvitationsComponent},
    { path: "login", component: LoginComponent },
    { path: "notifications", component: NotificationsComponent },
    { path: "places", component: PlacesComponent },
    { path: "settings", component: SettingsComponent }
    
];

export const AppComponents: any = [
    FriendsComponent,
    GroupsComponent,
    HelpComponent,
    HomeComponent,
    InvitationsComponent,
    LoginComponent,
    NotificationsComponent,
    PlacesComponent,
    SettingsComponent
];
