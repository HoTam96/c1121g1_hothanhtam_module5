import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./component/product-list/product-list.component";
import {ProductCreateComponent} from "./component/product-create/product-create.component";
import {ProductEditComponent} from "./component/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./component/product-delete/product-delete.component";

const routes: Routes = [
  {path : 'product-list', component: ProductListComponent},
  {path : 'create-product', component :ProductCreateComponent},
  {path : 'edit-product/:id' , component: ProductEditComponent},
  {path: 'delete-product/:id' , component: ProductDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
