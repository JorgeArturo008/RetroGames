import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { VideoJuego } from '../Models/VideoJuego';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  url = 'http://localhost:4000/api/Games/'

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {

    return this.http.get(this.url);
  }

  DeleteGames(id: string): Observable<any> {

    return this.http.delete(this.url + id);
  }

  CreateGames(game: VideoJuego): Observable<any> {

    return this.http.post(this.url, game);
  }

  obtenergame(id: string): Observable<any> {

    return this.http.get(this.url + id);
  }

  editgame(id: string, game: VideoJuego): Observable<any> {

    return this.http.put(this.url + id, game);
  }
}
