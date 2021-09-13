import SectionsData from './SectionsData.json';
import QuestionsData from './QuestionsData.json';
import { Injectable } from '@angular/core';


@Injectable()
export class FetchStoreService {


  constructor() { }


  Slist: any[] = SectionsData;
  Qlist: any[] = QuestionsData;
  options: any[] = this.Slist[0].options;
  mc: boolean = this.Slist[0].multiple_choice;
  SecNo = 0;
  QNo = 0;
  SecwiseNumberarray = this.Slist[this.SecNo].qafs;

  AllAnswered: any[] = [];
  first = -1;
  qstring = '';
  qaddded: number[] = [];
  addchoice: string[] = [];
  mcqadded: string[] = [];
  flag: number = 0;
  forFirstTime = 0;
  toSetfinalOverviewDisplay: boolean = false;

  toFetchAnsweredQuestion() {
    var qes = this.AllAnswered.filter(x => { x.qid == this.QNo });
    if (qes[0]) {
      return qes;
    }
    else {
      return undefined;
    }
  }
  afterLetsDive() {
    this.first = 0;
  }

  fetchNextQ() {
    this.QNo += 1;
  }


 
  continue() {

    this.SecNo += 1;
    if (this.SecNo == 1)
      this.forFirstTime = -1;
    this.QNo += 1;
  }
  setForFirstTimeOnfistGetStart() {
    this.forFirstTime = 0;
  }
  setToone() {
    this.SecNo = 1;

  }
  changeBySkip() {
    this.SecNo += 1;
    if (this.SecNo <= 4) {
      this.QNo = this.Slist[this.SecNo].qafs[0];
    }
    return;

  }

  chooseAnyAtFirst(sNo: number) {
    this.SecNo = sNo;
    this.QNo = this.Slist[this.SecNo].qafs[0];

  }

  
  setDisplayTrue() {
    this.toSetfinalOverviewDisplay = true;
  }

  fetchPrev() {
    this.QNo -= 1;
    if (this.QNo < 0) {
      this.QNo = 0;
    }
  }


  addtoAnswered(sno: number, qno: number, op: { opch: string, opchoicevalue: string, minp: number, maxp: number }) {
    this.qstring = this.Qlist[qno].q_text;
    var a = {
      sid: sno,
      qid: qno,
      qtext: this.qstring,
      mc: this.Qlist[qno].multiple_choice,
      answered_ops: [
        {
          choice: op.opch,
          choicevalue: op.opchoicevalue,
          minp: op.minp,
          maxp: op.maxp
        }
      ]
    }
    var b = {
      choice: op.opch,
      choicevalue: op.opchoicevalue,
      minp: op.minp,
      maxp: op.maxp
    }

    if (this.AllAnswered.length == 0) {

      this.AllAnswered.push(a);
      this.qaddded.push(a.qid);

    }
    else {
      for (let i = 0; i < this.AllAnswered.length; i++) {

        if (this.AllAnswered[i].sid === sno && this.AllAnswered[i].qid === qno) {

          if (this.Qlist[qno].multiple_choice == false) {

            if (this.AllAnswered[i].answered_ops[0].choice === op.opch) {

              break;
            }
            else {

              this.AllAnswered[i].answered_ops.pop();
              this.AllAnswered[i].answered_ops.push(b);
            }
          }
          else {

            for (let k = 0; k < this.AllAnswered[i].answered_ops.length; k++) {
              if (this.AllAnswered[i].answered_ops[k].choice === b.choice) {
                this.flag = 1;
              }
            }
            if (this.flag == 0) {
              this.AllAnswered[i].answered_ops.push(b);
            }
            this.flag = 0;
            break;


          }
        }
        else {

          if (!this.qaddded.includes(a.qid)) {
            this.qstring = this.Qlist[qno].q_text;
            this.AllAnswered.push(a);
            this.qaddded.push(a.qid);
            this.addchoice.push(op.opch);
            break;
          }
        }
      }
    }
  }





}