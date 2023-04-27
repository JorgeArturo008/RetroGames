import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat';
import { UserModel } from 'src/app/Models/ModelUser';
import { FireStoreService } from 'src/app/Services/fire-store.service';
import 'firebase/compat/auth';
import { userInfo } from 'os';
import { AuthServicesService } from 'src/app/Services/auth-services.service';
import { doc, getDoc, getFirestore } from '@angular/fire/firestore';


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
            console.log(docSnap.data());
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