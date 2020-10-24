import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { DonneesServiceService } from '../services/donnees-service.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


    public msg:string;

  constructor(private router:Router,private donneeservice:DonneesServiceService) { 
   
  }

 

  ngOnInit() {
    
  }
 
  onLogin(user){
   this.donneeservice.login(user.username,user.password)
   this.msg=this.donneeservice.message
   if(this.donneeservice.isAuthenticated){
     this.donneeservice.saveAuthenticatedUser()
     this.router.navigateByUrl('/admin');
   }
  }

}
