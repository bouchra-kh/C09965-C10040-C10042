import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { DonneesServiceService } from 'src/app/services/donnees-service.service';

@Component({
  selector: 'app-update-employes',
  templateUrl: './update-employes.component.html',
  styleUrls: ['./update-employes.component.css']
})
export class UpdateEmployesComponent implements OnInit {
  private url:String
  currentEmploye: any = {};
  

  sub: Subscription;
  constructor(private donneeService:DonneesServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.donneeService.get(id).subscribe((e: any) => {
          if (e) {
            console.log(e)
            this.currentEmploye =e;
            this.currentEmploye.href=e._links.self.href
          }
        })
      }
    })
 
  }

  OnupdateEmploye(value:any) {
    this.donneeService.updateEmploye(this.currentEmploye.href,value).subscribe(result => {
       console.log(result)
       alert(" les données de votre employé ont été mise à jour avec succès!")
       this.router.navigateByUrl('/admin/employes/list')
    });
  }

}
