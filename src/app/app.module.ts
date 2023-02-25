import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { AddproductComponent } from './dashboard/inventory/addproduct/addproduct.component';
import { OrderComponent } from './dashboard/inventory/order/order.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogAddproductComponent } from './dashboard/inventory/addproduct/dialog-addproduct/dialog-addproduct.component';
import { SearchPipe,orderSearchPipe } from './search.pipe';
import {MatSliderModule} from '@angular/material/slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    AddproductComponent,
    OrderComponent,
    DialogAddproductComponent,
    SearchPipe,
    orderSearchPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    MatSliderModule
  ],
    
    providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
