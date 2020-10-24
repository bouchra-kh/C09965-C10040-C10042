import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DonneesServiceService } from './services/donnees-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router, private donneeservice:DonneesServiceService ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const currentUser= this.donneeservice.currentUserValue
      if(currentUser){
      return true;
      }
 
      this.router.navigateByUrl('/auth')
      return false
  
  }
  
}