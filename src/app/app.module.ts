import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { ConceptComponent } from './concept/concept.component';
import { VisionComponent } from './vision/vision.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CobrandComponent } from './cobrand/cobrand.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LayoutComponent,
    ConceptComponent,
    VisionComponent,
    ServicesComponent,
    TeamComponent,
    ExperiencesComponent,
    CobrandComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
