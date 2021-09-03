import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  display=true;
  gonext=false;
  

  ngOnInit(): void {
  }

  onClick(){
    this.display = false;
    this.gonext=true;
  }
}
