import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL: 'https://backend-argprograma-1wpj.onrender.com/skill/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>('https://backend-argprograma-1wpj.onrender.com/skill/lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>('https://backend-argprograma-1wpj.onrender.com/skill/' + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>('https://backend-argprograma-1wpj.onrender.com/skill/' + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>('https://backend-argprograma-1wpj.onrender.com/skill/' + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete('https://backend-argprograma-1wpj.onrender.com/skill/' + `delete/${id}`);
  }
}
