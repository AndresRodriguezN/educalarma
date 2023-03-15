import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';


export const routes: Routes = [
  {path: 'registro', component:RegistroComponent},
  {
    path: 'registro',
    children: [
      {
        path: 'registro/inicio',
        component: InicioComponent,
      },
    ],
  },
  {path: 'inicio', component:InicioComponent},
  {path: '', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
