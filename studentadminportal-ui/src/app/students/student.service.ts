import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseApiUrl='https://localhost:7268';
  constructor(private httpClient:HttpClient) { }

  getStudent():Observable<any>
  {
    return this.httpClient.get<any>(this.baseApiUrl+'/students')
  }
}
