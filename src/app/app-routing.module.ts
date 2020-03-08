import { LayoutComponent } from "./layout/layout.component";
import { MainComponent } from "./main/main.component";
import { ConceptComponent } from "./concept/concept.component";
import { fallbackRoute } from "./shared/fallback-route";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisionComponent } from "./vision/vision.component";
import { ServicesComponent } from "./services/services.component";
import { TeamComponent } from "./team/team.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { CobrandComponent } from "./cobrand/cobrand.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
    {path: '', redirectTo: 'Index', pathMatch: 'full'},
    { 
        path: '', component: LayoutComponent,
        children: [
            {path: 'Index', component: MainComponent},
            {path: 'ConceptPurpose', component: ConceptComponent},
            {path: 'CompanyVision', component: VisionComponent},
            {path: 'Services', component: ServicesComponent},
            {path: 'TeamMembers', component: TeamComponent},
            {path: 'Experiences', component: ExperiencesComponent},
            {path: 'Cobrand', component: CobrandComponent},
            {path: 'Contact', component: ContactComponent}
        ]
    },
    fallbackRoute
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}