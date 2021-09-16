import { Injectable, HostListener, OnDestroy, OnInit } from '@angular/core';
import { WsService } from '../services/ws.service';
// import evaluate, { registerFunction } from 'ts-expression-evaluator';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
// import { Readable, Stream } from 'stream';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// export interface person {
//   name: string;
//   color: number;
// }

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

  constructor(private ws: WsService, private http: HttpClient) {

  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  colors = ['firebrick', 'tomato', 'goldenrod', 'darkorange', 'limegreen', 'forestgreen', 'mediumseagreen', 'olivedrab', 'lightseagreen', 'teal', 'dodgerblue', 'steelblue', 'darkslateblue', 'orchid', 'blueviolet', 'deeppink', 'dimgray', 'saddlebrown', 'maroon', 'black'];
  selected_color = 0;


/*
  BRACKET_EXPRESSION: RegExp = /\{([^{}]*)\}/g;

  nonRegularFormula(input: string) {
    let mutableInput = input;
    this.BRACKET_EXPRESSION.lastIndex = 0;
    try {
      if (this.BRACKET_EXPRESSION.test(input)) {
          let result;
          this.BRACKET_EXPRESSION.lastIndex = 0; // {0} is consumed by replace, now {0} is what was {1}
          while (result = this.BRACKET_EXPRESSION.exec(mutableInput)) {
            mutableInput = mutableInput.replace(result[0], evaluate(result[1], this));
            this.BRACKET_EXPRESSION.lastIndex = 0; // {0} is consumed by replace, now {0} is what was {1}
        }} else {
          mutableInput = input; }
      return mutableInput;
    } catch (error) {
      return 'NaN';
    }
  }
*/

listenfor(eventName: string) {
  return new Observable((subscriber) => {
    // this.sock.on(eventName, (data: any) => {
    //   subscriber.next(data);
    // });
  });
}

// individual components sendback whatever emitters they specify by calling this
sendback(eventName: string, data: any) {
  // this.sock.emit(eventName, data);
}


  /// =======================================================
  /// =======================================================
  //  testHTTP
  baseUrl = 'http://phpbackserv/api';


  getall() {
    this.http.get(`${this.baseUrl}/getall`).subscribe(data => {
      console.log(data);
    });
  }

  createphpgenerated() {
    this.http.post(`${this.baseUrl}/addone`, {}).subscribe(data => {
      console.log(data);
    });
  }


  //  endof.testHTTP
  /// =======================================================
  /// =======================================================
  //  devChara


    // this.simpleDialog.open(SimpleDialog, {data: data}).afterClosed().subscribe(data => {

    //  }
    // });


  //  endof.devClass
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

