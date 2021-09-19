import { Component, OnInit } from '@angular/core';
import { FetchStoreService, Answered_Objs } from 'src/app/fetchstore.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  displayfinalinlastoverview: boolean = false;
  final_page: boolean = false;
  Answered_obj: Answered_Objs[] = [];
  Answered_questions_for_a_section: Answered_Objs[] = [];
  sec_ids: number[] = [];
  secname: string = '';
  first_click_on_view_price: number = 0;
  minimumPrice:number=0;
  maximumPrice:number=0;

  constructor(private fetchstoreservice: FetchStoreService) {
    for (let i = 0; i < this.fetchstoreservice.secList.length; i++) {
      this.sec_ids.push(this.fetchstoreservice.secList[i].sid);
    }
  }
  ngOnInit(): void {
    this.Answered_obj = this.fetchstoreservice.AllAnswered;
    this.secname = this.fetchstoreservice.secList[this.fetchstoreservice.secId].sec_name;
    if (this.fetchstoreservice.secId < 5)
      this.Answered_questions_for_a_section = this.fetchstoreservice.fetch_answered_questions_for_a_section();
    if (this.fetchstoreservice.want_to_display_final_overview) {
      this.displayfinalinlastoverview = true;
      this.final_page = true;
    }
  }
  display_final_overview() {
    this.displayfinalinlastoverview = true;
  }
  increaseSecNo() {
    this.fetchstoreservice.continue();
  }
  check_for_if_Next_isfinal_summary() {
    return this.fetchstoreservice.check_forFinal_summary();
  }
  set_secId(id: number) {
    this.fetchstoreservice.Set_SecId(id);
    this.secname = this.fetchstoreservice.secList[id].sec_name;
    return true;
  }
  get_Answers_for_this_sec() {
    this.Answered_questions_for_a_section = this.fetchstoreservice.fetch_answered_questions_for_a_section();
    return true;
  }
  set_to_final_page() {
    this.final_page = true;
  }
  get_Min_And_MaxPrice() {
    this.fetchstoreservice.calculate_Min_and_Max_price()
    if (this.first_click_on_view_price == 0) {
      this.minimumPrice=this.fetchstoreservice.minPrice;
      this.maximumPrice=this.fetchstoreservice.maxPrice;
    }
    this.first_click_on_view_price += 1;
  }
}
