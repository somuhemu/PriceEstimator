import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentofquestions',
  templateUrl: './parentofquestions.component.html',
  styleUrls: ['./parentofquestions.component.css']
})
export class ParentofquestionsComponent implements OnInit {
num=0;
  serverElements = [{type: 'server', name: 'Testserver'}];
  // this is the type of object you expect to get it...
   onServerAdded(serverData: {serverName: string}) {
     this.serverElements.push({
       type: 'server',
       name: serverData.serverName
     });
     this.num +=1;
   }

  constructor() { }

  ngOnInit(): void {
  }

}
