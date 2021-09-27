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

  searchBy = {
  fname: '',
  lname: '',
  addr: '',
  city: '',
  }

  requestRead() {
    this.ldata.getAll();
  }

  sortBy(row: number) {
    this.ldata.sortPeople(row);
  }

  readBySearch() {
    this.ldata.readSearch(this.searchBy);
  }

}
