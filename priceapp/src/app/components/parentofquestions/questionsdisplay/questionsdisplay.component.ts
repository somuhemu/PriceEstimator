import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FetchStoreService } from '../../../fetchstore.service';

@Component({
  selector: 'app-questionsdisplay',
  templateUrl: './questionsdisplay.component.html',
  styleUrls: ['./questionsdisplay.component.css']
})
export class QuestionsdisplayComponent implements OnInit {

  @Input()
  QText!: string;
  @Input()
  options!: any;
  @Input()
  mc!: boolean;
  @Input()
  SecNo!: number;
  @Input()
  QNo!: number;
  // @Input() ansopp: any;
  @Output() onSelected = new EventEmitter<{ opch: string, opchoicevalue: string,minp:number,maxp:number }>();
  @Output() onFetchNxt = new EventEmitter();
  @Output() onPrev = new EventEmitter();

  constructor(private fetchstoreservice: FetchStoreService) { }
  SecwiseNumberarray = this.fetchstoreservice.SecwiseNumberarray;

  fetchnext() {
    this.onFetchNxt.emit();
  }
  // index: number = -1;
  checkChoicevalue(index: number) {

    // if (this.QNo != 0) {
    //   console.log(this.options)

    //   if (this.options[index].choice == this.ansopp[0].choice && this.options[index].choicevalue == this.ansopp[0].choicevalue) {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
    // }
    return false;
  }
  onSelect(opch: string, opchoicevalue: string,minp:number,maxp:number) {

    this.onSelected.emit({ opch, opchoicevalue,minp,maxp });
    console.log()
  }
  fetchprevious() {
    this.onPrev.emit()
  }
  ifFirstQuestion() {
    if (this.QNo == 0 || this.QNo == 2 || this.QNo == 14 || this.QNo == 16 || this.QNo == 20) {
      return false;
    }
    else {
      return true;
    }
  }
  wanttogotoSectionOverview() {
    this.SecwiseNumberarray = this.fetchstoreservice.Slist[this.SecNo].qafs;
    if (this.QNo == this.SecwiseNumberarray[this.SecwiseNumberarray.length - 1])
      return true;
    else
      return false;
  }


  //ngOnInit() hook is called when the component has been initialized okk
  ngOnInit(): void {

  }

}
