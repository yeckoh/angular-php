import { Component, HostListener } from '@angular/core';
import { LocaldataService } from './services/localdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public ldata: LocaldataService) {}
  title = 'angphp';

  @HostListener('window:beforeunload', ['$event']) beforeUnloadHandler(event: Event) {
    this.ldata.updatelocalstorage();
  }
  
  
  ngOnInit() {
  
    const settings = JSON.parse(localStorage.getItem('php_settings')!);
    const pp = {name: 'someone', color: 0};
    if (settings === null) {
      return;
    }
  
    // pp.name = this.ldata.current_user = settings.current_user;
    pp.color = this.ldata.selected_color = settings.selected_color;
  }
  


}
