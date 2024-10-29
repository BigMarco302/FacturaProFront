import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoLicenciasComponent } from './ingreso-licencias/ingreso-licencias.component';
import { ArchivoLicenciasComponent } from './archivo-licencias/archivo-licencias.component';
import { OficioLicenciasComponent } from './oficio-licencias/oficio-licencias.component';
import { ResgistrosLogsComponent } from './resgistros-logs/resgistros-logs.component';
import { LoggedGuard } from 'src/app/core/guards/logged.guard';


const routes: Routes = [
{path: 'Ingreso-Licencias',component:IngresoLicenciasComponent},
{path: 'Archivo-Licencias',component:ArchivoLicenciasComponent},
{path: 'Oficios-Licencias',component:OficioLicenciasComponent},
{path: 'Registro-Logs',component:ResgistrosLogsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configura las rutas a nivel de raíz
  exports: [RouterModule]
})
export class LicenciasRoutingModule { }
