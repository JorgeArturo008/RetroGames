import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {

  constructor(private firestore: AngularFirestore) {
 
  }

  CreateDoc(data: any, path: String, id: String ) {

    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }
}
