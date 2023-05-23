import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/Services/games.service';
import { VideoJuego } from '../../Models/VideoJuego';
import Swal from 'sweetalert2';
import { StateUserService } from 'src/app/Services/state-user.service';

@Component({
  selector: 'app-lista-video-juegos',
  templateUrl: './lista-video-juegos.component.html',
  styleUrls: ['./lista-video-juegos.component.css']
})
export class ListaVideoJuegosComponent implements OnInit {

  ListGames: VideoJuego[] = [];
  statePerfil = '';
  loading : boolean = false;

  constructor(private _gamesService: GamesService,
    private State: StateUserService) { }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    await this.obtenerStatePerfil()
    this.obtenerjuegos();
  }

  async obtenerStatePerfil() {
    this.statePerfil = await this.State.getdoc();
    this.loading = false;
  }

  obtenerjuegos(){
    this._gamesService.getGames().subscribe(data => {
this.ListGames = data;
    }, error => {
     console.log(error); 
    })
  }

  DeleteGame(id: any){
    this._gamesService.DeleteGames(id).subscribe(data => {
      Swal.fire({
        title: 'Se Elimino el juego con exito!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://i.gifer.com/NBBa.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        backdrop: false
      })
      this.obtenerjuegos();
this.ListGames = data;
    }, error => {
     console.log(error); 
    })
  }
}
