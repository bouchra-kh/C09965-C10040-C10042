import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { DonneesServiceService } from 'src/app/services/donnees-service.service';

@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.css']
})
export class ListEmployesComponent implements OnInit {
  public employees:any = {};
  currentkeyword:string ;

  constructor(private router:Router,private donneeservice:DonneesServiceService) { }

  ngOnInit() {
    this.donneeservice.getJSONEmployes().subscribe(data=>{
      this.employees=data;
      console.log(this.employees)
    },err=>{
      console.log(err);
    })
  }

  onChercher(form:any){
    this.currentkeyword=form.keyword
     this.chercherEmployee()
  }
    chercherEmployee() {
      this.donneeservice.getEmployeByKeyword(this.currentkeyword).subscribe(data=>{
        this.employees=data
      },err=>{
        console.log(err)
      })
    } 
    
  onDeleteEmploye(href){
    let conf=confirm("Etes vous sur de vouloir supprimer?")
    if(conf){
        this.donneeservice.delete(href).subscribe(result => {
          this.chercherEmployee();
        })
    }
 }
  
 

}
