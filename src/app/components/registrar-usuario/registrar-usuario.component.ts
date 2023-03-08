import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FirebaseErrorCodeService } from 'src/app/Services/firebase-error-code.service';

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
    private firebaseError: FirebaseErrorCodeService
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
          text: this.firebaseError.firebaseError(error.code),
          footer: '<a href="">Porque esta sucediendo este error?</a>',
        });

        this.loading=false;
      });
  }

  

  ngOnInit(): void {}
}
