import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthServicesService } from 'src/app/Services/auth-services.service';
import { FireStoreService } from 'src/app/Services/fire-store.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthServicesService,
               private router: Router,
               private firestore: FireStoreService

    ) {
      
    this.auth.stateUser().subscribe(res => {
      if(res){
        
      }else{
        
        this.router.navigate(['/login']);
      }
    })
   }

   

  ngOnInit(): void {
  }


}
