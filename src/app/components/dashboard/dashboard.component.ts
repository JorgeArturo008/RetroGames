import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthServicesService } from '../../Services/auth-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private auth: AuthServicesService,
    private router: Router) {

    this.auth.stateUser().subscribe(res => {
      if(res){
       
      }else{
        
        this.router.navigate(['/login']);
      }
    })
   }

  ngOnInit(): void {
  }

  

  logout(){
    this.auth.logout();
    
    Swal.fire({
      icon: 'success',
      title: 'Adios! Vuelve Prontoo',
      backdrop: false
    });
  }

}
