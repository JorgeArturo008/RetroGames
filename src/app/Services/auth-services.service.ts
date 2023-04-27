import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserModel } from '../Models/ModelUser';
import { getAuth, signInWithRedirect, signOut } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private authfirebase: AngularFireAuth) { }


  registrarUser(datos: UserModel){
    return this.authfirebase.createUserWithEmailAndPassword(datos.Email,datos.password);

  }

  stateUser(){    

    return this.authfirebase.authState

  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('el usuario Salio')
    }).catch((error) => {
      // An error happened.
    });
  }

  
}
