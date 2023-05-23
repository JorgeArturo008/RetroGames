import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat';
import { ModeloPerfil, UserModel } from 'src/app/Models/ModelUser';
import { FireStoreService } from 'src/app/Services/fire-store.service';
import 'firebase/compat/auth';
import { userInfo } from 'os';
import { AuthServicesService } from 'src/app/Services/auth-services.service';
import { doc, getDoc, getFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class StateUserService {
  constructor(
    private database: FireStoreService,
    private auth: AuthServicesService
  ) {}

  // Basicamente Este es un Servicio que nos ayuda a obtener el rol del perfil del usuario

  statePerfil = '';
  UID: string = '';
  ListUser: ModeloPerfil[] = [];

  async getdoc(): Promise<string> {
    await this.obtenerUid();
    const db = getFirestore();
    const docRef = doc(db, 'Usuarios', this.UID);
    const docSnap = await getDoc(docRef);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data: Record<string, any> = docSnap.data();
        const userProfile = new ModeloPerfil(
          data['Nombre'],
          data['Edad'],
          data['Telefono'],
          data['Email'],
          data['password'],
          data['repetirPassword'],
          data['videojuegoFav'],
          data['uid'],
          data['perfil'],
          data['urlfotoperfil']
        );
        this.ListUser.push(userProfile);

        //Obtenemos el Perfil del usuario
        this.ListUser.forEach((usuario) => {
          if (usuario.perfil === 'Visitante') {
            this.statePerfil = usuario.perfil;
            console.log(this.statePerfil);
          }else{
            this.statePerfil = usuario.perfil;
            console.log(this.statePerfil);
          }
        });
      } else {
        console.log('Document does not exist');
      }
    } catch (error) {
      console.log(error);
    }

    return this.statePerfil;
  }

  async obtenerUid() {
    try {
      const uid = await this.auth.getuid();
      this.UID = uid;
    } catch (error) {
      console.log(error);
    }
  }

  getStatePerfil(): string {
    return this.statePerfil;
  }
}
