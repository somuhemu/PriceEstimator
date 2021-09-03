import { Component, OnInit } from '@angular/core';
import { FetchStoreService } from '../../fetchstore.service';

@Component({
  selector: 'app-parentofquestions',
  templateUrl: './parentofquestions.component.html',
  styleUrls: ['./parentofquestions.component.css']
})
export class ParentofquestionsComponent implements OnInit {

   constructor(private fetchstoreservice: FetchStoreService) { }
   changeQNo()
   {
     this.fetchstoreservice.fetchNextQ();
   }

  ngOnInit(): void {
  }


}
