import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ParentofquestionsComponent } from './components/parentofquestions/parentofquestions.component';
import { QuestionsdisplayComponent } from './components/parentofquestions/questionsdisplay/questionsdisplay.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FetchStoreService } from './fetchstore.service';


const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path:'parentofquestions',component: ParentofquestionsComponent},
  { path:'overview',component:OverviewComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ParentofquestionsComponent,
    QuestionsdisplayComponent,
    OverviewComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [FetchStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
