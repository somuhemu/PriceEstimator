import { Component, OnInit,EventEmitter, Output ,Input} from '@angular/core';
import { FetchStoreService } from '../../../fetchstore.service';

@Component({
  selector: 'app-questionsdisplay',
  templateUrl: './questionsdisplay.component.html',
  styleUrls: ['./questionsdisplay.component.css']
})
export class QuestionsdisplayComponent implements OnInit {

  @Output() questionClicked = new EventEmitter();
  constructor(private fetchstoreservice: FetchStoreService) { }
  QNo = this.fetchstoreservice.QNo;

  Qtext = this.fetchstoreservice.Qlist[this.QNo].q_text;
  onClick()
  {
     this.questionClicked.emit();
  }
  ngOnInit(): void {
  }

}
