import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from "./book/book-list/book-list.component";
import {BrowBookComponent} from "./brow-book/brow-book.component";
import {BrowBookListComponent} from "./brow-book-list/brow-book-list.component";


const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'brow-book/:id', component: BrowBookComponent},
  {path: 'brow-book-list', component: BrowBookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
