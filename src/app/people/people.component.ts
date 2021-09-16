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

  searchby = {
  fname: '',
  lname: '',
  addr: '',
  city: '',
  }

  requestread() {
    this.ldata.getall();
  }

  sortby(row: number) {
    this.ldata.sortpeople(row);
  }

  readbysearch() {
    this.ldata.readsearch(this.searchby);
  }

}
