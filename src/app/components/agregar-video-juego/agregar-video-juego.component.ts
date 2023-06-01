import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideoJuego } from '../../Models/VideoJuego';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GamesService } from 'src/app/Services/games.service';
import { error } from 'console';
import { StateUserService } from 'src/app/Services/state-user.service';


@Component({
  selector: 'app-agregar-video-juego',
  templateUrl: './agregar-video-juego.component.html',
  styleUrls: ['./agregar-video-juego.component.css']
})
export class AgregarVideoJuegoComponent implements OnInit {
  boton = 'Agregar VideoJuego'
  titulo = 'Agreguemos un Nuevo Video Juego!';
  id : string;
  statePerfil = '';

  videogameForm: FormGroup;

  constructor(private fb: FormBuilder,
     private Router: Router,
     private _gamesService: GamesService,
     private aRouter: ActivatedRoute,
     private State: StateUserService
    ) {
      this.videogameForm = this.fb.group({
        Nombre:['',Validators.required],
        Url:['',Validators.required],
        Descrpcion:['',Validators.required],
        year:['',Validators.required],
        productora:['',Validators.required],
        UrlDescarga:['',Validators.required]

      })

      this.id = this.aRouter.snapshot.paramMap.get('id')!;
   }



  ngOnInit(): void {
    this.editargame();
    this.obtenerStatePerfil()
    console.log(this.State)
  }

  
  async obtenerStatePerfil() {
    this.statePerfil = await this.State.getdoc();
  }

  agregarvideogame(){


    const VIDEOJUEGO: VideoJuego = {
      Nombre: this.videogameForm.get('Nombre')?.value,
      Url: this.videogameForm.get('Url')?.value,
      Descripcion: this.videogameForm.get('Descrpcion')?.value,
      year: this.videogameForm.get('year')?.value,
      productora: this.videogameForm.get('productora')?.value,
      UrlDescarga: this.videogameForm.get('UrlDescarga')?.value
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
        productora: data.productora,
        UrlDescarga: data.UrlDescarga
        })
      })
    }
  }

}
