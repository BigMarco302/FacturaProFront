import { Component } from '@angular/core';

@Component({
  selector: 'app-history-factura',
  templateUrl: './history-factura.component.html',
  styleUrls: ['./history-factura.component.css']
})
export class HistoryFacturaComponent {
  formattedDates: any[] = [];
  years: number[] = [];          // Años extraídos de las fechas
  selectedYear: number = 2025;   // Año seleccionado en el dropdown
  groupedByMonth: { [month: string]: any[] } = {}; // Agrupar datos por mes

  constructor(

  ) {
  }

}
