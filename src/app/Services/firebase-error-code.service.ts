import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseErrorCodeService {
  firebaseError(code: string) {
    switch (code) {
      //EL correo ya existe
      case 'auth/email-already-in-use':
        return 'El Correo Electronico ya Existe, Intente con Otro.';
      //La contraseña es muy debil
      case 'auth/weak-password':
        return 'La Contraseña es muy Corta, ingresa una contraseña mas segura.';
        // email no es válido.
      case 'auth/invalid-email':
        return 'El valor que se proporcionó para la propiedad del usuario email no es válido.';
        // Password no es válido.
      case 'auth/wrong-password':
        return 'El valor que se proporcionó para la propiedad del usuario Contraseña no es válido.';


      default:
        return 'Error Desconocido, Recargue la pagina y intentelo de Nuevo.';
    }
  }

  constructor() {}
}
