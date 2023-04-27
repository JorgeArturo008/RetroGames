import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserModel } from '../Models/ModelUser';
import { getAuth, signInWithRedirect, signOut } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";
import { ReturnStatement } from '@angular/compiler';


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

  getuid(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.authfirebase.authState.subscribe(user => {
        if (user) {
          const uid = user.uid;
          resolve(uid);
        } else {
          reject('No se ha encontrado el usuario.');
        }
      });
    });
  }


  
}
