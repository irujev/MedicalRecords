import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitation } from '../model/visitation.model';

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
      this.adminUrl + '/patient/visit-doctor',
      visitationData
    );
  }
}
