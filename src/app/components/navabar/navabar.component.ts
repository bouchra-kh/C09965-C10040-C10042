import { Component, OnInit } from '@angular/core';
import { DonneesServiceService } from 'src/app/services/donnees-service.service';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {

  constructor(private donneeservice:DonneesServiceService) { }

  ngOnInit() {
  }

  onlogout(){
    this.donneeservice.logout();
  }

}
