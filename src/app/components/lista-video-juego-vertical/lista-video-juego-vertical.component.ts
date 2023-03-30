import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/Services/games.service';
import { VideoJuego } from '../../Models/VideoJuego';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-video-juego-vertical',
  templateUrl: './lista-video-juego-vertical.component.html',
  styleUrls: ['./lista-video-juego-vertical.component.css']
})
export class ListaVideoJuegoVerticalComponent implements OnInit {

  ListGames: VideoJuego[] = [];

  constructor(private _gamesService: GamesService) { }

  ngOnInit(): void {
    this.obtenerjuegos()
  }

  obtenerjuegos(){
    this._gamesService.getGames().subscribe(data => {
console.log(data);
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

