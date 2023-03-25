import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  educURL: 'https://backend-argprograma-1wpj.onrender.com/educacion/'

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>('https://backend-argprograma-1wpj.onrender.com/educacion/lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>('https://backend-argprograma-1wpj.onrender.com/educacion/' + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>('https://backend-argprograma-1wpj.onrender.com/educacion/' + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>('https://backend-argprograma-1wpj.onrender.com/educacion/' + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>('https://backend-argprograma-1wpj.onrender.com/educacion/' + `delete/${id}`);
  }
}
