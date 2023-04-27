import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Console, error } from 'console';
import { AuthServicesService } from 'src/app/Services/auth-services.service';
import { FirebaseErrorCodeService } from 'src/app/Services/firebase-error-code.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginusuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseErrorCodeService,
    private auth : AuthServicesService
  ) {
    this.loginusuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });


    this.auth.stateUser().subscribe(res => {
      if(res){
       
      }else{
        
      }
    })

  }

  ngOnInit(): void {
    
  }


  stateUser(){
    this.auth.stateUser();
  }

  login() {
    const email = this.loginusuario.value.email;
    const password = this.loginusuario.value.password;

     this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then( async (user) => {

        Swal.fire({
          icon: 'success',
          title: 'Ingresaste con Exito',
          text: "hey",
          footer: '<a href="">Porque esta sucediendo este error?</a>',
          backdrop: false
        });

        console.log(user.user?.email) 

        this.router.navigate(['/home']);})
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.firebaseError.firebaseError(error.code),
          footer: '<a href="">Porque esta sucediendo este error?</a>',
          backdrop: false
        });
      });
  }
}
