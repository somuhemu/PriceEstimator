import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  display:boolean = true;
  setToHide()
  {
    this.display = false;
  }

  ngOnInit(): void {
  }


}
