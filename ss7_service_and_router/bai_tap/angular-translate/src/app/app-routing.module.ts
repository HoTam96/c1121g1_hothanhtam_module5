import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionayPageComponent} from "./component/dictionay-page/dictionay-page.component";
import {DictionayDetailComponent} from "./component/dictionay-detail/dictionay-detail.component";


const routes: Routes = [
  {path: '', component: DictionayPageComponent},
  {path: 'detail/:id' , component : DictionayDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
