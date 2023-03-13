import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseErrorCodeService } from 'src/app/Services/firebase-error-code.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-p',
  templateUrl: './recuperar-p.component.html',
  styleUrls: ['./recuperar-p.component.css'],
})
export class RecuperarPComponent implements OnInit {
  recuperarUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseErrorCodeService
  ) {
    this.recuperarUsuario = this.fb.group({
      email: ['', Validators.required]
   
    });
  }

  

  ngOnInit(): void {}
  
  reset(){
    
    const email = this.recuperarUsuario.value.email;
    
    this.afAuth
    .sendPasswordResetEmail(email)
    .then(() => {
      
      this.router.navigate(['/login']);

      Swal.fire({
        title: 'Envio Existoso!',
        text: 'Te llegara un email para ayudarte a resetear tu contraseña.',
        imageUrl: 'https://media.tenor.com/cIC1Ajiz_F8AAAAM/space-bob-game-boy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    })
    .catch((error) => {
      Swal.fire({
        imageUrl: 'https://i.gifer.com/origin/5a/5a627019f4c81dcdd1497651e611e686.gif',
        title: 'Oops...',
        text: this.firebaseError.firebaseError(error.code),
        footer: '<a href="">Porque esta sucediendo este error?</a>',
      });
    });

  }
}
