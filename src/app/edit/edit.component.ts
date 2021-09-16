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



  newperson = {
    fname: '',
    lname: '',
    addr: '',
    city: '',
    img: undefined
  }

  CreatePerson() {
    // this.ldata.createperson(this.newperson);
  }

  sortby(row: number) {
    this.ldata.sortpeople(row);
  }


}
