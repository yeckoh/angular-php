import { Component, OnInit } from '@angular/core';
import { LocaldataService } from '../services/localdata.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(public ldata: LocaldataService) { }

  ngOnInit(): void {
  }



  requestread() {
    this.ldata.getall();
  }


}
