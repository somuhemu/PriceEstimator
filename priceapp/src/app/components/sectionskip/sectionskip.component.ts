import { Component, OnInit } from '@angular/core';
import { FetchStoreService } from 'src/app/fetchstore.service';

@Component({
  selector: 'app-sectionskip',
  templateUrl: './sectionskip.component.html',
  styleUrls: ['./sectionskip.component.css']
})
export class SectionskipComponent implements OnInit {

  finalskipped: boolean = false;
  secName = this.fetchstoreservice.Slist[this.fetchstoreservice.SecNo].sname;
  secno = this.fetchstoreservice.SecNo;

  constructor(private fetchstoreservice: FetchStoreService) { }


  displayedAtFirst() {
    if (this.fetchstoreservice.forFirstTime === -1)
      return true;
    else
      return false;
  }
  resetFirst() {
    this.fetchstoreservice.setForFirstTimeOnfistGetStart();
  }

  // checkForFinalSecAndChangeDisplay()
  // {
  //   if(this.fetchstoreservice.SecNo===5)
  //   {
  //   this.fetchstoreservice.setDisplayTrue();
  //   this.finalskipped = true;
  //   alert(this.finalskipped)
  // }
  // }
  setSecAndQNo(sno: number) {
    this.fetchstoreservice.chooseAnyAtFirst(sno);
    this.secName = this.fetchstoreservice.Slist[this.fetchstoreservice.SecNo].sname;
    this.secno = this.fetchstoreservice.SecNo;
  }
  setSecToOne() {
    this.fetchstoreservice.setToone();
  }
  incSecAndChangeQNo() {
    this.fetchstoreservice.changeBySkip();
    this.secno = this.fetchstoreservice.SecNo;
    if (this.secno <= 4) {
      this.secName = this.fetchstoreservice.Slist[this.fetchstoreservice.SecNo].sname;
    }


    if (this.secno === 5) {
      this.fetchstoreservice.setDisplayTrue();
      this.finalskipped = true;

    }
  }
  ngOnInit(): void {
  }

}
