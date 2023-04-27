import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat';
import { UserModel } from 'src/app/Models/ModelUser';
import { FireStoreService } from 'src/app/Services/fire-store.service';
import 'firebase/compat/auth';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor(private database : FireStoreService) { }

  

  ngOnInit(): void {
    this.getusers();
  }

  getusers(){
    this.database.getcollection<UserModel>('Usuarios').subscribe( res => {
      console.log(res);
    })
  }


}
