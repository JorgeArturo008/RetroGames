import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoJuego } from 'src/app/Models/VideoJuego';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  
  id : string;
  videogameForm2: FormGroup;
  ListGames2: VideoJuego[] = [];
  array : VideoJuego[] = []
  
  
  

  
  constructor(
    private fb: FormBuilder,
     private Router: Router,
     private _gamesService: GamesService,
     private aRouter: ActivatedRoute,
     
    ) {

      
      this.videogameForm2 = this.fb.group({
        Nombre:['',Validators.required],
        Url:['', Validators.required]
        
      
      })
      this.id = this.aRouter.snapshot.paramMap.get('id')!;
     }

  ngOnInit(): void {
    
    this.obtenerdetalle();
  }


  obtenerdetalle(){
    

    this._gamesService.obtenergame(this.id).subscribe(data => {
      console.log(data);
    this.ListGames2= data;

    this.array.push(data);

    console.log(this.array)

    
    }, error => {
     console.log(error); 
    })
  }
}





