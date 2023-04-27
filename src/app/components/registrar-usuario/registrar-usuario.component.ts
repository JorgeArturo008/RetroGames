import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FirebaseErrorCodeService } from 'src/app/Services/firebase-error-code.service';
import { UserModel } from '../../Models/ModelUser';
import { AuthServicesService } from '../../Services/auth-services.service';
import { error } from 'console';
import { FireStoreService } from 'src/app/Services/fire-store.service';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;
  

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseErrorCodeService,
    private auth : AuthServicesService,
    @Inject(FireStoreService) private firestore: FireStoreService

  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
      Nombre:['', Validators.required],
      Edad:['', Validators.required],
      Telefono:['', Validators.required],
      videojuegoFav:['', Validators.required],
      urlfotoperfil:['', Validators.required],

    });
  }

 async registrar2(){

    const Datos: UserModel = {
      Nombre: this.registrarUsuario.value.Nombre,
      Edad: this.registrarUsuario.value.Edad,
      Telefono: this.registrarUsuario.value.Telefono,
      Email: this.registrarUsuario.value.email,
      password: this.registrarUsuario.value.password,
      repetirPassword: this.registrarUsuario.value.repetirPassword,
      videojuegoFav: this.registrarUsuario.value.videojuegoFav,
      uid: "",
      perfil: "Visitante",
      urlfotoperfil: this.registrarUsuario.value.urlfotoperfil
    }

    console.log("Datos -> ", Datos)

    const res = await this.auth.registrarUser(Datos).catch(error => {
      console.log("error");
    })
    if (res && res.user) {
      if(res){
        console.log("exito al crear el usuario")
        const path = 'Usuarios';
        const id = res.user.uid;
        Datos.uid = id
        Datos.password = ""
        Datos.repetirPassword = ""

        await this.firestore.CreateDoc(Datos, path, id )
        Swal.fire({
          imageUrl: 'https://i.pinimg.com/originals/93/f8/9b/93f89b965b719a175e2ac7de6c3e8b54.gif',
          title: 'Welcome!',
          text: '¡Bienvenido a RetroGames!',
        });
        this.router.navigate(['/login']);
      }

    


      console.log(res.user);
    } else {
      // El objeto res está vacío o nulo
      console.log("El objeto res está vacío o nulo");
    }
   

  }
 
  registrar() {
    
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if (password != repetirPassword) {
      Swal.fire({
        imageUrl: 'https://i.gifer.com/origin/5a/5a627019f4c81dcdd1497651e611e686.gif',
        title: 'Oops...',
        text: '¡La contraseña debe de ser la misma en los dos campos!',
        footer: '<a href="">Porque esta sucediendo este error?</a>',
      });
      return;
    }
    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        
        Swal.fire('Exelente!', 'El Usuario se creo exitosamente!', 'success', );
        this.router.navigate(['/login']);
        this.loading=false;
      })
      .catch((error) => {

        

        Swal.fire({
          imageUrl: 'https://i.gifer.com/origin/5a/5a627019f4c81dcdd1497651e611e686.gif',
          title: 'Oops...',
          text: this.firebaseError.firebaseError(error.code),
          footer: '<a href="">Porque esta sucediendo este error?</a>',
        });

        this.loading=false;
      });
  }

  

  ngOnInit(): void {}
}
