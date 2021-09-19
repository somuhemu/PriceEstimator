//this is where we configure different routes
//and import this in app.mmodule okk
import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import { LandingpageComponent } from "./components/landingpage/landingpage.component";
import { ParentofquestionsComponent } from "./components/parentofquestions/parentofquestions.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { SectionskipComponent } from './components/sectionskip/sectionskip.component';
//we are actually duplicating the import statements okk
//therefor i create a array like and import them in app.module okkk to avoid duplicate imports 

const routes: Routes = [
       
        { path:'parentofquestions',component: ParentofquestionsComponent},
        { path:'overview',component:OverviewComponent},
        { path :'sectionskip',component:SectionskipComponent}
    
]

@NgModule(
{
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
}
)

export class AppRoutingModule{}
export const routingComponents = [LandingpageComponent,ParentofquestionsComponent,OverviewComponent,SectionskipComponent]