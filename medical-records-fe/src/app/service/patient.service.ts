import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private adminUrl: string;

  constructor(private http: HttpClient) {
    this.adminUrl = '/api';
  }

  public findAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.adminUrl+"/patients");
  }
}
