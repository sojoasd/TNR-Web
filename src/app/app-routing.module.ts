import { LayoutComponent } from "./layout/layout.component";
import { MainComponent } from "./main/main.component";
import { fallbackRoute } from "./shared/fallback-route";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { EnsureLoginGuard } from "./ensure-login.guard";

const routes: Routes = [
  { path: "", redirectTo: "Index", pathMatch: "full" },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "Login", component: LoginComponent },
      { path: "Index", component: MainComponent },
      { path: "Contact", component: ContactComponent, canActivate: [EnsureLoginGuard] }
    ]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
