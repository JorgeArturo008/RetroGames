import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    });
  }

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if (password != repetirPassword) {
      Swal.fire({
        icon: 'error',
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
        
        Swal.fire('Exelente!', 'El Usuario se creo exitosamente!', 'success');
        this.router.navigate(['/login']);
        this.loading=false;
      })
      .catch((error) => {

        

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.firebaseError(error.code),
          footer: '<a href="">Porque esta sucediendo este error?</a>',
        });

        this.loading=false;
      });
  }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El Correo Electronico ya Existe, Intente con Otro.';
      case 'auth/weak-password':
        return 'La Contraseña es muy Corta, ingresa una contraseña mas segura.';
      default:
        return 'Error Desconocido, Recargue la pagina y intentelo de Nuevo.';
    }
  }

  ngOnInit(): void {}
}
