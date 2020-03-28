import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { LayoutComponent } from "./layout/layout.component";
import { AppRoutingModule } from "./app-routing.module";
import { ContactComponent } from "./contact/contact.component";
import { EnsureLoginGuard } from "./ensure-login.guard";
import { LoginComponent } from "./login/login.component";
import { NgxLoadingModule } from "ngx-loading";
import { HttpClientModule } from "@angular/common/http";
import { FolderComponent } from "./folder/folder.component";
import { FolderListComponent } from "./folder-list/folder-list.component";
import { FormsModule } from "@angular/forms";
import { Injector } from "@angular/core";
import { ModalModule } from "ngx-bootstrap/modal";
import { AgmOverlays } from "agm-overlays";
import HttpHelper from "./utility/httpHelper";
import { MapComponent } from "./map/map.component";
import { SideNavSubComponent } from "./side-nav-sub/side-nav-sub.component";
import { environment } from "../environments/environment";

export let InjectorInstance: Injector;

@NgModule({
  declarations: [AppComponent, MainComponent, LayoutComponent, ContactComponent, LoginComponent, FolderComponent, FolderListComponent, MapComponent, SideNavSubComponent],
  imports: [BrowserModule, AppRoutingModule, NgxLoadingModule.forRoot({}), HttpClientModule, FormsModule, AgmOverlays, AgmCoreModule.forRoot({ apiKey: environment.mapApiKey }), ModalModule.forRoot()],
  providers: [EnsureLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
    HttpHelper.init();
  }
}
