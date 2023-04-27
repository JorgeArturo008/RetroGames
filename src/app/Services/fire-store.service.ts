import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from '../Models/ModelUser';
import { collection } from 'firebase/firestore';
import { DocumentReference, DocumentData } from '@firebase/firestore-types';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FireStoreService {



  constructor(private firestores: AngularFirestore) {
  
   }

  CreateDoc(data: any, path: string, id: string ) {

    const collection = this.firestores.collection(path);
    return collection.doc(id).set(data);
  }

  getcollection<tipo>( path: string ) {

    const collection = this.firestores.collection<tipo>(path);
    return collection.valueChanges();


  }

    getbyid(path:string, id:string){
    
      this.firestores.collection('yourcollection').doc("documentid").ref.get().then(function (doc) {
        if (doc.exists) {
          console.log(doc.data());
        } else {
          console.log("There is no document!");
        }
      }).catch(function (error) {
        console.log("There was an error getting your document:", error);
      });
    }
  

}

  

