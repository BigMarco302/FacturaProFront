import { Component } from '@angular/core';

@Component({
  selector: 'app-home-factura',
  templateUrl: './home-factura.component.html',
  styleUrls: ['./home-factura.component.css']
})
export class HomeFacturaComponent {
  conceptos = [
    { nombre: 'Pollo', unidades: 30, precio: 120, iva: '21% IVA', descuento: '$800', total: '$7000' },
    { nombre: 'Carne', unidades: 45, precio: 120, iva: '21% IVA', descuento: 'N/A', total: '$7000' },
    { nombre: 'Frituras', unidades: 35, precio: 120, iva: '21% IVA', descuento: '$800', total: '$7000' },
    { nombre: 'Gomitas', unidades: 45, precio: 120, iva: '21% IVA', descuento: 'N/A', total: '$7000' },
    { nombre: 'Salmas', unidades: 42, precio: 120, iva: '21% IVA', descuento: '$800', total: '$7000' },
    { nombre: 'Pan', unidades: 24, precio: 120, iva: '21% IVA', descuento: '$800', total: '$7000' }
  ];
}
