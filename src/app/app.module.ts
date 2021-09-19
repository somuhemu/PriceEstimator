import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app.routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionsdisplayComponent } from './components/parentofquestions/questionsdisplay/questionsdisplay.component';
//


import { FetchStoreService } from './fetchstore.service';
//import { SectionskipComponent } from './components/sectionskip/sectionskip.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionsdisplayComponent,
    routingComponents,
    //SectionskipComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule
  ],
  providers: [FetchStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
