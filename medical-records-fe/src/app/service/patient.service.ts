import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CreatePatientRequest,
  Patient,
  UpdatePatientRequest,
} from '../model/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private adminUrl: string;

  constructor(private http: HttpClient) {
    this.adminUrl = '/api';
  }

  public findAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.adminUrl + '/patients');
  }

  public findPatientById(patientId: number): Observable<Patient> {
    return this.http.get<Patient>(
      this.adminUrl + '/patient/get-by-id/' + patientId
    );
  }

  public registerPatient(patientData: CreatePatientRequest): Observable<any> {
    console.log(patientData);
    return this.http.post<any>(
      this.adminUrl + '/patient/register-patient',
      patientData
    );
  }

  public updatePatient(patientData: UpdatePatientRequest): Observable<any> {
    return this.http.post<any>(
      this.adminUrl + '/patient/update-patient',
      patientData
    );
  }
}
