import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecuperarPComponent } from './components/recuperar-p/recuperar-p.component';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { AgregarVideoJuegoComponent } from './components/agregar-video-juego/agregar-video-juego.component'; 
import { ListaVideoJuegosComponent } from './components/lista-video-juegos/lista-video-juegos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListaVideoJuegoVerticalComponent } from './components/lista-video-juego-vertical/lista-video-juego-vertical.component';
import { StateUser } from './Guards/StateUser.guard';

const routes: Routes = [ 
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'lista-video-juego-vertical', component: ListaVideoJuegoVerticalComponent, canActivate: [StateUser]},
  {path: 'agregar-video-juego', component: AgregarVideoJuegoComponent, canActivate: [StateUser]},
  {path: 'editar-video-juego/:id', component: AgregarVideoJuegoComponent,canActivate: [StateUser]},
  {path: 'detalle/:id', component: DetalleComponent, canActivate: [StateUser]},
  {path:'lista-video-juegos', component:ListaVideoJuegosComponent, canActivate: [StateUser]},
{ path: 'login', component: LoginComponent},
{path: 'registrar-usuario', component: RegistrarUsuarioComponent},
{path: 'dashboard', component: DashboardComponent, canActivate: [StateUser]},
{path: 'recuperar-p', component: RecuperarPComponent},
{path: 'home', component: HomeComponent, canActivate: [StateUser]},
{path: 'informacion', component: InformacionComponent, canActivate: [StateUser]},
{path: '**', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
