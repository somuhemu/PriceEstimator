import { Component, OnInit, Input } from '@angular/core';
import { FetchStoreService } from 'src/app/fetchstore.service';

interface AnsQues {

  id: number,
  q_text: string,
  options: [
    { choice: string, choicevalue: string, minPrice: number, maxPrice: number }
  ],
  multiple_choice: boolean

}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


  AllAnswered: any[] = [];
  secno = 0;
  qno = 0;
  displayfinalinlastoverview = false;
  sname: string = '';
  checkforfinal = false;
  finishedEarlier = false;
  s: number = -1;
  nofQuestion: number = -1;
  once: number = -1;
  minPrice = 0;
  maxPrice = 0;
  click=0;
  
  constructor(private fetchstoreservice: FetchStoreService) {
    this.AllAnswered = this.fetchstoreservice.AllAnswered;
    this.secno = this.fetchstoreservice.SecNo;
    this.qno = this.fetchstoreservice.QNo;
    this.displayfinalinlastoverview = this.fetchstoreservice.toSetfinalOverviewDisplay;
    if (this.secno <= 4)
      this.sname = this.fetchstoreservice.Slist[this.secno].sname;
  }

  calculateMinMaxPrice() {
    if(this.click==0)
    {
    for (let i = 0; i < this.AllAnswered.length; i++) {
      for (let j = 0; j < this.AllAnswered[i].answered_ops.length; j++) {
        this.minPrice += this.AllAnswered[i].answered_ops[j].minp;
        this.maxPrice += this.AllAnswered[i].answered_ops[j].maxp;
     
      }
    }
  }
  this.click+=1;
  }


  setSecNameForfinalOverview(sno: number) {
    this.sname = this.fetchstoreservice.Slist[sno].sname;
    return true;
  }
  checkForFinal() {
    if (this.secno == 4 && this.qno == 21) {
      this.checkforfinal = true;
    }
    return this.checkforfinal;
  }
  displaylastNofutherahed() {
    this.displayfinalinlastoverview = true;
    this.checkforfinal = true;
    this.finishedEarlier = true;
  }

  increaseSecAndQNo() {
    this.fetchstoreservice.continue();
  }
  displaylast() {
    this.displayfinalinlastoverview = true;

  }

  initialize() {
    this.s = this.fetchstoreservice.AllAnswered[0].sid;

    this.nofQuestion = this.fetchstoreservice.Slist[this.s].qafs.length;

    this.once = 1;
    return true;
  }

  checkIfSectionChanged(sno: number) {
    if (this.s != sno) {
      this.s = sno;
      this.nofQuestion = this.fetchstoreservice.Slist[sno].qafs.length;
      this.once = 2;

    }
    else {
      if (this.once == 1) {
        this.once += 1;
        return true;
      }
      else {

        return false;
      }

    }
    return true;
  }
  ngOnInit(): void {
  }

}
