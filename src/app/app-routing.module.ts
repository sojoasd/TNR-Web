import { LayoutComponent } from "./layout/layout.component";
import { MainComponent } from "./main/main.component";
import { fallbackRoute } from "./shared/fallback-route";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { FolderListComponent } from "./folder-list/folder-list.component";
import { LoginComponent } from "./login/login.component";
import { EnsureLoginGuard } from "./ensure-login.guard";
import { FolderComponent } from "./folder/folder.component";
import { MapComponent } from "./map/map.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "login", pathMatch: "full", component: LoginComponent },
      { path: "index", component: MainComponent },
      { path: "folder-list", component: FolderListComponent, canActivate: [EnsureLoginGuard] },
      { path: "map/:id", component: MapComponent, canActivate: [EnsureLoginGuard] }
    ]
  },
  { path: "**", redirectTo: "login", pathMatch: "full" },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
