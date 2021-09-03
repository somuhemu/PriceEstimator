import { Component, OnInit,EventEmitter, Output ,Input} from '@angular/core';
import { FetchStoreService } from '../../../fetchstore.service';

@Component({
  selector: 'app-questionsdisplay',
  templateUrl: './questionsdisplay.component.html',
  styleUrls: ['./questionsdisplay.component.css']
})
export class QuestionsdisplayComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string}>();
  @Input() name: string | undefined;
  constructor(private fetchstoreservice: FetchStoreService) { }

  sections = this.fetchstoreservice.Slist;
  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      //serverContent: this.serverContentInput.nativeElement.value
      //eleref has this nativeelemt so that we get access to the underlying element 
    });
  }


  // onSetTo(status: string) {

  //   // this.loggingService.logStatusChange(status);

  // }

}
