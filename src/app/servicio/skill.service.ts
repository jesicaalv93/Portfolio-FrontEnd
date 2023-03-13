import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL: 'http://localhost:8080/skill/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>('http://localhost:8080/skill/lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>('http://localhost:8080/skill/' + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/skill/' + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>('http://localhost:8080/skill/' + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8080/skill/' + `delete/${id}`);
  }
}
