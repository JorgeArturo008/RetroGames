import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserModel } from '../Models/ModelUser';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private authfirebase: AngularFireAuth) { }


  registrarUser(datos: UserModel){
    return this.authfirebase.createUserWithEmailAndPassword(datos.Email,datos.password);

  }
}
