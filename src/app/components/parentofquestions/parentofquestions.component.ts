import { Component, OnInit } from '@angular/core';
import { FetchStoreService, QuestionJSON_Obj_Form } from '../../fetchstore.service';


@Component({
  selector: 'app-parentofquestions',
  templateUrl: './parentofquestions.component.html',
  styleUrls: ['./parentofquestions.component.css']
})
export class ParentofquestionsComponent implements OnInit {

  question_obj!: QuestionJSON_Obj_Form;

  constructor(private fetchstoreservice: FetchStoreService) { }

  ngOnInit(): void {
    this.question_obj = this.fetchstoreservice.question_obj;
  }

  fetchnext() {
    this.question_obj = this.fetchstoreservice.fetchNextQ();
  }

  fetchprevious() {
    this.question_obj = this.fetchstoreservice.fetchPrev();
  }
  onSelect(event: { question_obj: QuestionJSON_Obj_Form, choice: string }) {
    this.fetchstoreservice.addtoAnswered(event);

  }
  display_Dive() {
    return this.fetchstoreservice.lets_Dive_in();
  }
  lets_dive_is_clicked() {
    this.fetchstoreservice.afterLetsDive();
  }

}
