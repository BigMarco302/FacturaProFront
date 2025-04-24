import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFacturaComponent } from './home-factura/home-factura.component';
import { HistoryFacturaComponent } from './history-factura/history-factura.component';
import { NewFacturaComponent } from './new-factura/new-factura.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeFacturaComponent,
    HistoryFacturaComponent,
    NewFacturaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FacturaModule { }
