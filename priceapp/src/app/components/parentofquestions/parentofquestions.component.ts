import { Component, OnInit } from '@angular/core';
import { FetchStoreService } from '../../fetchstore.service';


@Component({
  selector: 'app-parentofquestions',
  templateUrl: './parentofquestions.component.html',
  styleUrls: ['./parentofquestions.component.css']
})
export class ParentofquestionsComponent implements OnInit {

  //qanswered: Answered | undefined;

  constructor(private fetchstoreservice: FetchStoreService) { }

  QNo = this.fetchstoreservice.QNo;
  SecNo = this.fetchstoreservice.SecNo;
  SecwiseNumberarray = this.fetchstoreservice.Slist[this.SecNo].qafs;

  Qtext = this.fetchstoreservice.Qlist[this.QNo].q_text;
  options = this.fetchstoreservice.Qlist[this.QNo].options;
  mc = this.fetchstoreservice.Qlist[this.QNo].multiple_choice;

  letsDive = this.fetchstoreservice.first;
  checkForDive() {
    if (this.letsDive == -1)
      return false;
    else
      return true;
  }
  setLetsDiveTrue() {
    this.fetchstoreservice.afterLetsDive();
    this.letsDive = this.fetchstoreservice.first;
  }
  fetchnext() {

    this.fetchstoreservice.fetchNextQ();
    this.QNo = this.fetchstoreservice.QNo;
    this.SecwiseNumberarray = this.fetchstoreservice.Slist[this.SecNo].qafs;
    this.mc = this.fetchstoreservice.Qlist[this.QNo].multiple_choice;
    this.Qtext = this.fetchstoreservice.Qlist[this.QNo].q_text;
    this.options = this.fetchstoreservice.Qlist[this.QNo].options;
  }



  // ansopp :any=[];
  // qanswered:any=[];
  async fetchprevious() {
    this.fetchstoreservice.fetchPrev();
    // this.QNo = await this.fetchstoreservice.QNo;
    // this.qanswered = await this.fetchstoreservice.toFetchAnsweredQuestion()
    // if (!this.qanswered) {
    //   this.mc = await this.fetchstoreservice.Qlist[this.QNo].multiple_choice;
    //   this.Qtext = await this.fetchstoreservice.Qlist[this.QNo].q_text;
    //   this.options = await this.fetchstoreservice.Qlist[this.QNo].options;
    // }
    // else{
    //   this.mc = this.qanswered[0].multiple_choice;
    //   this.Qtext = this.qanswered[0].q_text;
    //   this.options= this.qanswered[0].options;
    //   this.ansopp = this.qanswered[0].answered_ops;
    // }
  }

  onSelect(event: { opch: string, opchoicevalue: string, minp: number, maxp: number }) {
    // alert(event.opch);
    this.fetchstoreservice.addtoAnswered(this.SecNo, this.QNo, event);

  }
  changeQNo() {
    this.fetchstoreservice.fetchNextQ();
  }

  ngOnInit(): void {
  }


}
