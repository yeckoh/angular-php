import { Injectable, HostListener, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
// import { Readable, Stream } from 'stream';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})

// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: max-line-length
// tslint:disable: no-inferrable-types
// tslint:disable: curly
// tslint:disable: member-ordering


export class LocaldataService implements OnDestroy, OnInit {

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  colors = ['firebrick', 'tomato', 'goldenrod', 'darkorange', 'limegreen', 'forestgreen', 'mediumseagreen', 'olivedrab', 'lightseagreen', 'teal', 'dodgerblue', 'steelblue', 'darkslateblue', 'orchid', 'blueviolet', 'deeppink', 'dimgray', 'saddlebrown', 'maroon', 'black'];
  selected_color = 0;




  /// =======================================================
  /// =======================================================
  //  testHTTP
  baseUrl = 'http://phpbackserv/api';

  people: Person[] = [];

  getAll() {
    this.http.get(`${this.baseUrl}/getall`).subscribe(data => {
      this.people.length = 0;
      this.people = data as Person[];
    });
  }

  // createPHPgenerated() {
  //   this.http.post(`${this.baseUrl}/addone`, {}).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  readSearch(filter: any) {
    this.http.get(`${this.baseUrl}/getsearch`, { context: filter }).subscribe(data => {
      console.log(data);
      this.people.length = 0;
      this.people = data as unknown as Person[];
    })
  }

  createNewPerson(personinfo: any) { // this is not a model.person object
    let p: Person = personinfo;
    this.http.post(`${this.baseUrl}/createnew`, { data: p }).subscribe(data => {
      console.log(data);
      // get the new record with id and push onto local list of people
      // this.people.push(data as Person);
    });
  }

  updatePerson(p: Person) {
    return this.http.put(`${this.baseUrl}/update`, {data: p});
  }

  deletePerson(p: Person) {
    let param = new HttpParams().set('id', p._id);
    return this.http.delete(`${this.baseUrl}/delete`, {params: param});
  }

  //  endof.testHTTP
  /// =======================================================
  /// =======================================================
  //  frontfunctions

  sortPeople(row: number) {
    switch (row) {
      case 1: this.people.sort((a, b) => (a.fname < b.fname ? -1 : 1)); break;
      case 2: this.people.sort((a, b) => (a.lname < b.lname ? -1 : 1)); break;
      case 3: this.people.sort((a, b) => (a.addr < b.addr ? -1 : 1)); break;
      case 4: this.people.sort((a, b) => (a.city < b.city ? -1 : 1)); break;
      default: this.people.sort((a, b) => (b._id - a._id)); break;
    }
  }


  //  endof.frontfunctions
  /// =======================================================
  /// =======================================================
  //  localStorage

  updatelocalstorage() {
    const settings = {
      // current_user: this.current_user,
      selected_color: this.selected_color,
    };
    localStorage.setItem('php_settings', JSON.stringify(settings));
  }

  //  endof.localStorage
  /// =======================================================
  /// =======================================================
  //  fileIO

  // readCharacter(input: any) {
  //   var file: File = input.files[0];
  //   var reader: FileReader = new FileReader();

  //   reader.onloadend = (e) => {
  //     xml2js.parseString(reader.result!, { explicitArray: false, mergeAttrs: true }, (e, r) => { });
  //   };
  //   reader.readAsText(file);
  // }

  //  endof.fileIO
  /// =======================================================
  /// =======================================================



}

