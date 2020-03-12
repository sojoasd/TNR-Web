import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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
import HttpHelper from "./utility/httpHelper";

export let InjectorInstance: Injector;

@NgModule({
  declarations: [AppComponent, MainComponent, LayoutComponent, ContactComponent, LoginComponent, FolderComponent, FolderListComponent],
  imports: [BrowserModule, AppRoutingModule, NgxLoadingModule.forRoot({}), HttpClientModule, FormsModule],
  providers: [EnsureLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
    HttpHelper.init();
  }
}
