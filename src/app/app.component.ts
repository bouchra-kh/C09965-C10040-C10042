import { Component, OnInit } from '@angular/core';
import { DonneesServiceService } from './services/donnees-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private donneeservice:DonneesServiceService) { 
   
  }

 
  ngOnInit(): void {
    this.donneeservice.loadUserfromStorage;
  }
  title = 'angular-project-RH';
}
