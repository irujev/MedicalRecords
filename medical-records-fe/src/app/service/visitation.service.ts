import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalNote, MedicalNoteResponse } from '../model/patient.model';
import {
  MedicalNoteRequest,
  OpenVisitation,
  Visitation,
} from '../model/visitation.model';

@Injectable({
  providedIn: 'root',
})
export class VisitationService {
  private adminUrl: string;

  constructor(private http: HttpClient) {
    this.adminUrl = '/api';
  }

  public findAllRequestedVisitations(
    patientId: number
  ): Observable<Visitation[]> {
    return this.http.get<Visitation[]>(
      this.adminUrl + '/visitations/by-patient-id/' + patientId
    );
  }

  public registerVisitation(
    visitationData: Visitation
  ): Observable<Visitation[]> {
    return this.http.post<any>(
      this.adminUrl + '/patient/register-visitation',
      visitationData
    );
  }

  public getOpenVisitations(): Observable<OpenVisitation[]> {
    return this.http.get<any>(
      this.adminUrl + '/visitation/get-open-visitations'
    );
  }

  public createMedicalNote(
    medicalNoteData: MedicalNoteRequest
  ): Observable<OpenVisitation[]> {
    return this.http.post<any>(
      this.adminUrl + '/patient/create-medical-note',
      medicalNoteData
    );
  }

  public getAllDoctorsVisitations(): Observable<MedicalNoteResponse[]> {
    return this.http.get<MedicalNoteResponse[]>(
      this.adminUrl + '/visitation/get-all-notes'
    );
  }
}
