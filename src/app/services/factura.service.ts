import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(
    private http:HttpClient
  ) { }

 // Subir imágenes como MultipartFile[]
 subirImagenes(images: File[]): Observable<ApiResponse> {
  const formData = new FormData();

  images.forEach((image: File) => {
    formData.append('images', image); // el nombre 'images' debe coincidir con @RequestParam("images") del backend
  });

  console.log(images)

  return this.http.post<ApiResponse>(`${environment.baseService}/factura/searchImage`, formData,);
}


  
  // Enviar datos completos de la factura al backend
  enviarDatosFactura(userId: number, datos: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId': userId.toString()
    });

    return this.http.post(`${environment.baseService}/factura`, datos, { headers });
  }
  
}
