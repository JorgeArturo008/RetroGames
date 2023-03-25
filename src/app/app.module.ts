import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RecuperarPComponent } from './components/recuperar-p/recuperar-p.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { AgregarVideoJuegoComponent } from './components/agregar-video-juego/agregar-video-juego.component';
import { ListaVideoJuegosComponent } from './components/lista-video-juegos/lista-video-juegos.component';
import {HttpClientModule} from '@angular/common/http';
import { DetalleComponent } from './components/detalle/detalle.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    SpinnerComponent,
    RecuperarPComponent,
    HomeComponent,
    InformacionComponent,
    AgregarVideoJuegoComponent,
    ListaVideoJuegosComponent,
    DetalleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

