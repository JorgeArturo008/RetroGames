import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideoJuego } from '../../Models/VideoJuego';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GamesService } from 'src/app/Services/games.service';
import { error } from 'console';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-agregar-video-juego',
  templateUrl: './agregar-video-juego.component.html',
  styleUrls: ['./agregar-video-juego.component.css']
})
export class AgregarVideoJuegoComponent implements OnInit {
  boton = 'Agregar VideoJuego'
  titulo = 'Agreguemos un Nuevo Video Juego!';
  id : string;

  videogameForm: FormGroup;

  constructor(private fb: FormBuilder,
     private Router: Router,
     private _gamesService: GamesService,
     private aRouter: ActivatedRoute,
    ) {
      this.videogameForm = this.fb.group({
        Nombre:['',Validators.required],
        Url:['',Validators.required],
        Descrpcion:['',Validators.required],
        year:['',Validators.required],
        productora:['',Validators.required]
      
      })

      this.id = this.aRouter.snapshot.paramMap.get('id')!;
   }



  ngOnInit(): void {
    this.editargame();
  }

  agregarvideogame(){


    const VIDEOJUEGO: VideoJuego = {
      Nombre: this.videogameForm.get('Nombre')?.value,
      Url: this.videogameForm.get('Url')?.value,
      Descripcion: this.videogameForm.get('Descrpcion')?.value,
      year: this.videogameForm.get('year')?.value,
      productora: this.videogameForm.get('productora')?.value
    }
    
    if(this.id !== null){
    //Editamos Juego
            this._gamesService.editgame(this.id, VIDEOJUEGO).subscribe(data => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se Edito Con Exito!',
                showConfirmButton: false,
                timer: 2500,
                backdrop: false
              },)
              this.Router.navigate(['/lista-video-juegos'])
          }, error => {
            console.log(error);
            this.videogameForm.reset();
      });
    } else {
    //Agregamos Juego
    console.log(VIDEOJUEGO)

    this._gamesService.CreateGames(VIDEOJUEGO).subscribe(data => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se agrego con exito!',
      showConfirmButton: false,
      timer: 2500,
      backdrop: false
    },)
    this.Router.navigate(['/lista-video-juegos'])
    }, error => {
      console.log(error);
      this.videogameForm.reset();
    })
    }
  }

  editargame(){
    if(this.id !== null){
      this.boton = 'EditarVideoJuego!'
      this.titulo = 'Editemos la informacion del VideoJuego!'
      this._gamesService.obtenergame(this.id).subscribe(data => {
      this.videogameForm.setValue({
        Nombre: data.Nombre,
        Url: data.Url,
        Descrpcion: data.Descripcion,
        year: data.year,
        productora: data.productora
        })
      })
    }
  }

}
