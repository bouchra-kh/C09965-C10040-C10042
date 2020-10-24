import { Component, OnInit } from '@angular/core';
import { DonneesServiceService } from 'src/app/services/donnees-service.service';

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.css']
})
export class ListUtilisateursComponent implements OnInit {
public utilisateurs
  constructor(private donneeservice:DonneesServiceService) { }

  ngOnInit() {
    this.donneeservice.getJSON().subscribe(data=>{
      this.utilisateurs=data;
    },err=>{
      console.log(err);
    })
  }


 

}
