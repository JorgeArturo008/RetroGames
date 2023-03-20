import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideoJuego } from '../../Models/VideoJuego';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-video-juego',
  templateUrl: './agregar-video-juego.component.html',
  styleUrls: ['./agregar-video-juego.component.css']
})
export class AgregarVideoJuegoComponent implements OnInit {

  videogameForm: FormGroup;

  constructor(private fb: FormBuilder,
     private Router: Router
    ) {
      this.videogameForm = this.fb.group({
        Nombre:['',Validators.required],
        Url:['',Validators.required],
        Descrpcion:['',Validators.required],
        year:['',Validators.required],
        productora:['',Validators.required]
      
      })



   }

  ngOnInit(): void {
  }

  agregarvideogame(){


    const VIDEOJUEGO: VideoJuego = {
      Nombre: this.videogameForm.get('Nombre')?.value,
      Url: this.videogameForm.get('Url')?.value,
      Descripcion: this.videogameForm.get('Descrpcion')?.value,
      year: this.videogameForm.get('year')?.value,
      productora: this.videogameForm.get('productora')?.value
    }
    
    console.log(VIDEOJUEGO)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se agrego con exito!',
      showConfirmButton: false,
      timer: 2500,
      backdrop: false
    })
    this.Router.navigate(['/lista-video-juegos'])
    
  }

}
