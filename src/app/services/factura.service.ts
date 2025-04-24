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

  subirImagenes(images: File[]): Observable<HttpResponse<any>> {
    const formData = new FormData();
    
    // Mandar como "imagen1", "imagen2", ..., "imagen20"
    images.forEach((img, index) => {
      formData.append(`imagen${index + 1}`, img);  // <-- Cada imagen tiene una clave única
    });
  
    return this.http.post<any>(`${environment.baseService}/factura/searchImage`, formData, {
      observe: 'response'
    });
  }
  
  
}
