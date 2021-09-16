import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import {io, Socket} from 'socket.io-client';
// import cors from 'cors';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  private sock: any;

  constructor() {
    // this.connectToSocket();
  }

  // individual components listenfor whatever hooks they specify by calling this
  // listenfor(eventName: string) {
  //   return new Observable((subscriber) => {
  //     this.sock.on(eventName, (data: any) => {
  //       subscriber.next(data);
  //     });
  //   });
  // }

  // individual components sendback whatever emitters they specify by calling this
  // sendback(eventName: string, data: any) {
  //   this.sock.emit(eventName, data);
  // }

  // connectToSocket() {
  // this.sock = wsocket('http://zmreborn-servers.xyz:7331');
  // this.sock = io('localhost:7330');

  // gzipper compress ./dist ./distzip

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///
  /// its npm run gz
  ///
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // }

  // disconnect() {
  //   this.sock.disconnect();
  //   sessionStorage.clear();
  // }

}




