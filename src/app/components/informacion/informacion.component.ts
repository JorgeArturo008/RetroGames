import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat';
import { UserModel } from 'src/app/Models/ModelUser';
import { FireStoreService } from 'src/app/Services/fire-store.service';
import 'firebase/compat/auth';
import { userInfo } from 'os';
import { AuthServicesService } from 'src/app/Services/auth-services.service';
import { doc, getDoc, getFirestore } from '@angular/fire/firestore';
import { ModeloPerfil } from '../../Models/ModelUser';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor(private database : FireStoreService,
              private auth: AuthServicesService
     ) { 
     }

      UID : string = "";
      ListUser: ModeloPerfil[] = [] ;

  ngOnInit(): void {
    
    this.getdoc();
    
    }

    async getdoc(){
      await this.obtenerUid();
      const db = getFirestore();
      const docRef = doc(db, "Usuarios", this.UID);
      const docSnap = await getDoc(docRef);

      try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
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
          
          console.log(this.ListUser);
        } else {
            console.log("Document does not exist")
        }
    
    } catch(error) {
        console.log(error)
    }
    }

    

  getusers(){

    this.database.getcollection<UserModel>('Usuarios').subscribe( res => {
      console.log(res);
      
    })
  }


  async obtenerUid() {
    try {
      const uid = await this.auth.getuid();
      this.UID = uid;
      console.log(this.UID);
    } catch (error) {
      console.log(error);
    }
  }

  
}