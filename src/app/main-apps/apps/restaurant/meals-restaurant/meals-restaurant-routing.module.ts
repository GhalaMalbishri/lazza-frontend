import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewApdateProductComponent } from './view-apdate-product/view-apdate-product.component';

const routes: Routes = [
  {
    path: 'restaurant-add-products-list',
    component:AddProductComponent
  },
  {
    path: 'restaurant-view-update-products-list',
    component:ViewApdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsRestaurantRoutingModule { }
