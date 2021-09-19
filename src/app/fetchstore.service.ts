import SectionsData from './SectionsData.json';
import QuestionsData from './QuestionsData.json';
import { Injectable } from '@angular/core';

interface QuestionJSON_Obj_Form {
  qid: number,
  question_text: string,
  options: [
    { choice: string, choicevalue: string, minPrice: number, maxPrice: number },

    { choice: string, choicevalue: string, minPrice: number, maxPrice: number }
  ],
  multiple_choice: boolean
}
interface Answered_Objs {
  question_obj: QuestionJSON_Obj_Form,
  choosed_choices: string[]

}
interface SectionJSON_Obj_Form {
  sid: number,
  sec_name: string,
  question_arr_for_this_sec: number[]

}
@Injectable()
export class FetchStoreService {

  secList: SectionJSON_Obj_Form[] = SectionsData;
  section_obj: SectionJSON_Obj_Form;
  question_List: QuestionJSON_Obj_Form[] = QuestionsData;
  question_obj: QuestionJSON_Obj_Form;
  secId: number;
  questionId!: number;
  question_count = 0;
  indexOf_present_question!: number;
  first_question_ids_In_EachSection: number[] = [];

  AllAnswered: Answered_Objs[] = [];
  Answered_questions_for_a_sectioon: Answered_Objs[] = [];
  qaddded: number[] = [];
  sections_choosen: number[] = [];
  that_choice_is_there: number = 0;
  index: number = 0;

  forFirstTime: number = 0;

  want_to_display_final_overview: boolean = false;
  after_click_on_landingPage = -1;

  minPrice: number = 0;
  maxPrice: number = 0;

  constructor() {
    this.secId = 0;
    this.sections_choosen.push(this.secId);
    this.section_obj = this.secList[this.secId];
    this.question_obj = this.get_Question();
    for (let i = 0; i < this.secList.length; i++) {

      this.first_question_ids_In_EachSection.push(this.secList[i]?.question_arr_for_this_sec[0]);
    }
  }

  get_Question() {
    this.questionId = this.section_obj?.question_arr_for_this_sec[this.question_count];
    for (let i = 0; i < this.question_List.length; i++) {
      if (this.questionId == this.question_List[i].qid) {
        this.question_obj = this.question_List[i];
        this.question_count += 1;
        break;
      }
    }
    return this.question_obj;
  }
  go_to_section_overview() {

    if (this.question_obj?.qid == this.section_obj?.question_arr_for_this_sec[this.section_obj?.question_arr_for_this_sec.length - 1])
      return true;
    else
      return false;
  }

  fetchNextQ() {
    if (this.question_count != this.section_obj?.question_arr_for_this_sec.length) {
      this.question_obj = this.get_Question();
    }
    return this.question_obj;
  }
  fetchPrev() {
    this.question_count -= 2;
    if (this.question_count < 0) {
      this.question_count = 0;
    }
    this.question_obj = this.get_Question();
    return this.question_obj;
  }
  ifFirstQuestion() {
    if (this.first_question_ids_In_EachSection?.includes(this.question_obj?.qid)) {
      return true;
    }
    else {
      return false;
    }
  }

  addtoAnswered(answered_obj: { question_obj: QuestionJSON_Obj_Form, choice: string }) {

    var AnsObj = {
      question_obj: answered_obj.question_obj,
      choosed_choices: [answered_obj.choice]
    }
    if (this.AllAnswered.length == 0) {

      this.AllAnswered.push(AnsObj);
      this.qaddded.push(answered_obj.question_obj.qid);

    }
    else {
      if (this.qaddded.includes(answered_obj.question_obj.qid)) {
        this.index = 0;
        for (let i = 0; i < this.AllAnswered.length; i++) {
          if (this.AllAnswered[i].question_obj.qid == answered_obj.question_obj.qid) {
            this.index = i;
            break;
          }
        }

        if (this.AllAnswered[this.index].question_obj.multiple_choice == false) {

          if (this.AllAnswered[this.index].choosed_choices.includes(answered_obj.choice)) {
            return;
          }
          else {

            this.AllAnswered[this.index].choosed_choices.pop();
            this.AllAnswered[this.index].choosed_choices.push(answered_obj.choice);
          }
        }
        else {
          if (this.AllAnswered[this.index].choosed_choices.includes(answered_obj.choice)) {
            this.that_choice_is_there = 1;
          }
          if (this.that_choice_is_there == 0) {
            this.AllAnswered[this.index].choosed_choices.push(answered_obj.choice);
          }
          this.that_choice_is_there = 0;
        }
      }
      else {
        this.AllAnswered.push(AnsObj);
        this.qaddded.push(AnsObj.question_obj.qid);
      }
    }
  }/*funtion end*/

  fetch_answered_questions_for_a_section() {
    for (let i = 0; i < this.secList[this.secId].question_arr_for_this_sec.length; i++) {
      if (this.qaddded.includes(this.secList[this.secId].question_arr_for_this_sec[i])) {
        this.Answered_questions_for_a_sectioon.push(this.AllAnswered[this.qaddded.indexOf(this.secList[this.secId].question_arr_for_this_sec[i])])
      }
    }
    return this.Answered_questions_for_a_sectioon;
  }

  continue() {

    this.secId += 1;
    if (this.secId == 1)
      this.forFirstTime = -1;
    this.section_obj = this.secList[this.secId];
    this.question_count = 0;
    this.question_obj = this.get_Question();
    this.Answered_questions_for_a_sectioon = [];
  }
  check_forFinal_summary() {
    if (this.secId == 4)
      return true;
    else
      return false;
  }
  Set_SecId(id: number) {
    this.secId = id;
    this.Answered_questions_for_a_sectioon = [];
    return true;
  }
  check_if_First_time() {
    if (this.forFirstTime === -1)
      return true;
    else
      return false;
  }
  set_forFirstTime_to_zero() {
    this.forFirstTime = 0;
  }

  initialize_things_to_get_started_with_nxt_sec(sid: number, start_or_skip: string) {
    if (start_or_skip == 'want_to_view_questions_of_this_sec') {
      this.secId = sid;
      console.log(this.secId, "from cwant to view quess");
    }
    if (start_or_skip == 'want_to_skip_the_section') {
      this.secId = sid + 1;
      console.log(this.secId, "from want to skip");
    }
    if (this.secId == 5) {
      this.want_to_display_final_overview = true;
    }
    this.section_obj = this.secList[this.secId];
    this.question_count = 0;
    this.question_obj = this.get_Question();
    this.Answered_questions_for_a_sectioon = [];
    return;
  }

  lets_Dive_in() {
    if (this.after_click_on_landingPage == -1)
      return true;
    else
      return false;
  }

  afterLetsDive() {
    this.after_click_on_landingPage = 0;
  }

  calculate_Min_and_Max_price() {

    for (let i = 0; i < this.AllAnswered.length; i++) {
      for (let j = 0; j < this.AllAnswered[i].question_obj.options.length; j++) {
        if (this.AllAnswered[i].choosed_choices.includes(this.AllAnswered[i].question_obj.options[j].choice)) {
          this.minPrice += this.AllAnswered[i].question_obj.options[j].minPrice;
          this.maxPrice += this.AllAnswered[i].question_obj.options[j].maxPrice;

        }
      }
    }
  }

}

export { QuestionJSON_Obj_Form, Answered_Objs }