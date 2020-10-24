import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import {Utilisateur} from '../models/utilisateur'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DonneesServiceService {
 
  message:string
  public isAuthenticated:boolean;
  public userAuthenticated;
  public token ;
  response: any=[];
  private currentUserSubject: BehaviorSubject<Utilisateur>;
  public currentUser: Observable<Utilisateur>;

  private _jsondata = 'assets/data.json';

  baseURL: string = "http://localhost:8085/";

   
  constructor(private http: HttpClient,private router:Router) {
    this.currentUserSubject = new BehaviorSubject<Utilisateur>(JSON.parse(sessionStorage.getItem('authUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): Utilisateur {
    return this.currentUserSubject.value;
   }

   public getJSON(): Observable<Utilisateur> {
        return this.http.get<Utilisateur>(this._jsondata);
  } 
 
   login(username:string,password:string){
     let user
    this.getJSON().subscribe(users => this.response = users);
    this.response.forEach(u=> {
        if(u.login==username && u.password==password){
            user=u
           this.token={username:u.login,roles:u.roles}
        } 
        if(u.login!=username || u.password!=password){
          this.message="votre nom ou mot de passe n'est pas correcte"
        }
    }) 
    if(user){
      this. isAuthenticated=true;
      this.userAuthenticated=user;
     
    }
    else{
      this. isAuthenticated=false;
      this.userAuthenticated=undefined
    }
  }

  public saveAuthenticatedUser(){
    if(this.userAuthenticated){
      sessionStorage.setItem("authUser",JSON.stringify(this.token));
      this.currentUserSubject.next(this.userAuthenticated);
    }
  }


   public loadUserfromStorage(){
     let token=sessionStorage.getItem("authUser")
     if(token){
      let user=JSON.parse(token)
      this.userAuthenticated={username:user.username,roles:user.roles}
      this.isAuthenticated=true
     }
   }
   
   logout(){
    this.isAuthenticated=false;
    this.token=undefined;
    this.userAuthenticated=undefined;
    sessionStorage.removeItem("authUser");
    this.router.navigateByUrl('/auth');
  }

  addEmployes(employe:Employee): Observable<Employee> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(employe);
    console.log(body)
    return this.http.post<Employee>(this.baseURL +'listEmployes',body,{'headers':headers});
  }
 

  public getJSONEmployes(): Observable<Employee> {
    
    return this.http.get<Employee>(this.baseURL +'employees');
    
} 

getEmployeByKeyword(mc: string) {
  return this.http.get(this.baseURL+"employees/search/ByNom?mc="+mc)
}

get(id: string) {
  return this.http.get(this.baseURL +'employees' + '/' + id);
}

 
updateEmploye(url,data){
  return this.http.put(url,data);
}
 
delete(href:string) {
  return this.http.delete(href);
}


}