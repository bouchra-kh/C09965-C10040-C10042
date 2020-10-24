import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { DonneesServiceService } from 'src/app/services/donnees-service.service';

@Component({
  selector: 'app-add-employes',
  templateUrl: './add-employes.component.html',
  styleUrls: ['./add-employes.component.css']
})
export class AddEmployesComponent implements OnInit {
 
  employe =new Employee();

  constructor(private router:Router,private donneesService:DonneesServiceService) { }

  ngOnInit() {
  }
  
  addEmploye(){
     this.donneesService.addEmployes(this.employe)
     .subscribe(data => {
      console.log(data)
      this.router.navigateByUrl('/admin/employes/list')
    })   
  }


}
