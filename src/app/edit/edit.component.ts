import { Component, OnInit } from '@angular/core';
import { LocaldataService } from '../services/localdata.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public ldata: LocaldataService) { }

  ngOnInit(): void {
  }



  newPerson = {
    fname: '',
    lname: '',
    addr: '',
    city: '',
    img: undefined
  }

  createPerson() {
    this.ldata.createNewPerson(this.newPerson);
  }

  sortBy(row: number) {
    this.ldata.sortPeople(row);
  }


}
