import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './dashboard/inventory/addproduct/addproduct.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { OrderComponent } from './dashboard/inventory/order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, data: { title: 'dashboard' },
    children: [
      { path: '', redirectTo: 'inventory', pathMatch: 'full' },
      {
        path: 'inventory', component: InventoryComponent, data: { title: 'Inventory' },
        // children: [
        //   { path: '', redirectTo: 'inventory', pathMatch: 'full' },
        //   { path: 'productDetails', component: AddproductComponent, data: { title: 'ProductDetails' } },
        // ]
      },
      { path: 'productDetails', component: AddproductComponent, data: { title: 'ProductDetails' }},
      { path: 'order', component: OrderComponent, data: { title: 'Order' } },

      { path: '**', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
