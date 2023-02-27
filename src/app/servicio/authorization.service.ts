import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private strUrlApi:string;
  localStorage: any;
  router: any;

  constructor(private http:HttpClient) {
    this.strUrlApi = '../../assets/data/user.json';
  }

  public loginSimple(email:string, pwd: string): void {     
    //Llamada a la API
    this.http.get(this.strUrlApi).subscribe(
      (response: any) => {
        if(response.token != null) {
          //Guardamos el token
          //localStorage.setItem('token', response.token);
          this.localStorage.setItem('token', response.token);
          //Redireccionar
          this.router.navigate(['/home']);
        }
      }
    ); 
  }
  
  public logout(): void {
    //Al cerrar sesion eliminamos el token
    localStorage.removeItem('token');
    //Redireccionar
    this.router.navigate(['/']);
  }
  
  public isUserLogIn(): boolean {
    return (localStorage.getItem('token') != null);
  }

}
