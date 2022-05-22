import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowBookComponent} from './brow-book/brow-book.component';
import {StudentComponent} from './student/student.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowBookListComponent } from './brow-book-list/brow-book-list.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    BrowBookComponent,
    StudentComponent,
    BookListComponent,
    BrowBookListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
