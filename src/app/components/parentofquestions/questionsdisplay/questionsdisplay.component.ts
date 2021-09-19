import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FetchStoreService, QuestionJSON_Obj_Form } from '../../../fetchstore.service';

@Component({
  selector: 'app-questionsdisplay',
  templateUrl: './questionsdisplay.component.html',
  styleUrls: ['./questionsdisplay.component.css']
})
export class QuestionsdisplayComponent implements OnInit {

  @Input()
  Question_obj!: QuestionJSON_Obj_Form;
  @Output() onFetchNxt = new EventEmitter();
  @Output() onPrev = new EventEmitter();
  @Output() onSelected = new EventEmitter<{ question_obj: QuestionJSON_Obj_Form, choice: string }>();
  isFirst_question: boolean = true;
  constructor(private fetchstoreservice: FetchStoreService) {

  }
  wanttogotoSectionOverview() {
    return this.fetchstoreservice.go_to_section_overview();
  }
  fetchnext() {
    this.onFetchNxt.emit();
  }
  fetchprevious() {
    this.onPrev.emit();

  }
  if_First_Question() {
    return this.isFirst_question = this.fetchstoreservice.ifFirstQuestion()
  }
  onSelect(question_obj: QuestionJSON_Obj_Form, choice: string) {

    this.onSelected.emit({ question_obj, choice });
    console.log()
  }
  ngOnInit(): void {

  }

}
