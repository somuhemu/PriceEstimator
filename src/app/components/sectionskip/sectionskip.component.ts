import { Component, OnInit } from '@angular/core';
import { FetchStoreService } from 'src/app/fetchstore.service';

@Component({
  selector: 'app-sectionskip',
  templateUrl: './sectionskip.component.html',
  styleUrls: ['./sectionskip.component.css']
})
export class SectionskipComponent implements OnInit {

  finalskipped: boolean = false;
  secName: string = '';
  secId: number = -1;
  sec_ids: number[] = [];

  constructor(private fetchstoreservice: FetchStoreService) {
    for (let i = 0; i < this.fetchstoreservice.secList.length; i++) {
      this.sec_ids.push(this.fetchstoreservice.secList[i].sid);
    }
  }
  ngOnInit(): void {
    this.secId = this.fetchstoreservice.secId;
  }

  displayedAtFirst() {
    return (this.fetchstoreservice.check_if_First_time());
  }
  resetFirst() {
    this.fetchstoreservice.set_forFirstTime_to_zero();
  }

  get_started_from_sec(sno: number, start_or_skip: string) {
    this.fetchstoreservice.initialize_things_to_get_started_with_nxt_sec(sno, start_or_skip);
    this.secId = this.fetchstoreservice.secId;
    if (this.secId == 5) {
      this.finalskipped = true;
    }
  }
  get_sec_name(sno: number) {
    this.secName = this.fetchstoreservice.secList[sno].sec_name;
    return true;
  }
}
