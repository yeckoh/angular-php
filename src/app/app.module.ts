import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MymatModule } from './mymat/mymat.module';
import { HttpClientModule } from '@angular/common/http';

import { LocaldataService } from './services/localdata.service';
import { PeopleComponent } from './people/people.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MymatModule,
    HttpClientModule
  ],
  providers: [LocaldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
