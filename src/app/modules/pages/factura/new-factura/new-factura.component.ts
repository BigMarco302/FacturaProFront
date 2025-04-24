import { Component } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';
import Swal from 'sweetalert2'; // Asegúrate de instalar sweetalert2
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// Registrar fuentes para pdfMake

@Component({
  selector: 'app-new-factura',
  templateUrl: './new-factura.component.html',
  styleUrls: ['./new-factura.component.css']
})
export class NewFacturaComponent {

  constructor(private facturaService: FacturaService) {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  }


  imagenesSeleccionadas: File[] = [];
  imagenesSeleccionadasPreview: string[] = [];
  tickets: any[] = []; // Aquí guardaremos los datos procesados de los tickets
  datosFormulario: any = {
    rfc: '',
    correo: '',
    nombre: '',
    cp: '',
    municipio: '',
    estado: '',
    regimen: '',
    uso: '',
    colonia: '',
    calle: '',
    noInt: '',
    noExt: ''
  };

  // Función para seleccionar las imágenes
  onFileSelected(event: any): void {
    const archivos = Array.from(event.target.files) as File[];

    if (archivos.length > 20) {
      alert('Solo puedes subir hasta 20 imágenes.');
      return;
    }

    this.imagenesSeleccionadas = archivos;
    this.imagenesSeleccionadasPreview = [];

    archivos.forEach(archivo => {
      const lector = new FileReader();
      lector.onload = (e: any) => {
        this.imagenesSeleccionadasPreview.push(e.target.result);
      };
      lector.readAsDataURL(archivo);
    });
  }

  // Simulación de envío de imágenes
  enviarImagenes(): void {
    if (this.imagenesSeleccionadas.length === 0) {
      alert('Primero selecciona al menos una imagen.');
      return;
    }

    // Mostramos el Swal de procesamiento
    Swal.fire({
      title: 'Procesando imagen...',
      text: 'Estamos procesando la información de tus tickets.',
      icon: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });

    // Simulamos la llamada al backend para procesar la imagen
    setTimeout(() => {
      // Aquí simulas la respuesta del backend con los datos extraídos de los tickets
      this.tickets = [
        {
          tipo: 'Paquetería',
          identificador: 'Token de guía: XXXXXXXXXXXX',
          fecha: '23/03/01',
          subtotal: '2000,00',
          iva: '420,00',
          total: '2420,00'
        },
        {
          tipo: 'Comida',
          identificador: 'Número de ticket: XXXXXXXX',
          fecha: '23/03/01',
          hora: '12:00pm',
          subtotal: '2000,00',
          iva: '420,00',
          total: '2420,00'
        },
        {
          tipo: 'Autobús',
          identificador: 'Token de facturación: XXXXXXXXXXXX',
          fecha: '23/03/01',
          subtotal: '2000,00',
          iva: '420,00',
          total: '2420,00'
        }
      ];

      // Cerramos el Swal
      Swal.close();
      alert('Imágenes procesadas con éxito');
    }, 3000); // Simula un retraso de 3 segundos
  }

  // Guardar los datos de facturación temporales
  guardarDatosFactura(): void {
    this.datosFormulario = {
      rfc: "RFC_123456",
      correo: "email@dominio.com",
      nombre: "Juan Pérez",
      codigoPostal: "12345",
      municipio: "Ciudad de México",
      estado: "CDMX",
      regimenFiscal: "Régimen general de ley",
      usoCFDI: "G01",
      colonia: "Colonia 123",
      calle: "Calle Ficticia 456",
      noInt: "A-101",
      noExt: "456"
    };

    console.log('Datos de factura guardados temporalmente:', this.datosFormulario);
  }

  // Función para crear el PDF
  generarPDF(): void {
    const documentDefinition: any = {
      content: [
        { text: 'Factura generada', style: 'header' },
        { text: '\n\n' },
        ...this.tickets.map((ticket: any) => ({
          style: 'ticketTable',
          table: {
            widths: ['auto', '*'],
            body: [
              ['Tipo de servicio:', ticket.tipo],
              ['Identificador:', ticket.identificador],
              ['Fecha de factura:', ticket.fecha],
              ...(ticket.hora ? [['Hora de consumo:', ticket.hora]] : []),
              ['Subtotal:', `${ticket.subtotal} €`],
              ['IVA:', `${ticket.iva} €`],
              ['Total:', `${ticket.total} €`],
            ]
          },
          layout: 'lightHorizontalLines',
          margin: [0, 0, 0, 15]
        }))
      ],
      styles: {
        titulo: {
          bold: true,
          fontSize: 14,
          // No pongas font: 'Helvetica'
        },
        texto: {
          fontSize: 10,
          // No pongas font: 'Helvetica'
        }
      }
      
    };
  
    pdfMake.createPdf(documentDefinition).open();
  }
  

  // Previsualización del PDF
  previsualizarPdf(): void {
    console.log('Previsualizando PDF con los datos:', this.datosFormulario);
    this.generarPDF();
  }

  guardarDatos(): void {
    // Aquí iría tu lógica de guardar (puede ser temporal en una variable, o más adelante, a un backend)
  
    Swal.fire({
      icon: 'success',
      title: '¡Datos guardados!',
      text: 'Tus datos han sido guardados correctamente.',
      confirmButtonText: 'Aceptar'
    });
  }
  
}
