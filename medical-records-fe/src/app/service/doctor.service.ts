import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreateDoctorRequest,
  Doctor,
  UpdateDoctorRequest,
} from '../model/doctor.model';
@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private adminUrl: string;

  constructor(private http: HttpClient) {
    this.adminUrl = '/api';
  }

  public findAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.adminUrl + '/doctors');
  }

  public findPersonalDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.adminUrl + '/personal-doctors');
  }

  public findDoctorById(doctorId: number): Observable<Doctor> {
    return this.http.get<Doctor>(
      this.adminUrl + '/doctor/get-by-id/' + doctorId
    );
  }

  public registerDoctor(doctorData: CreateDoctorRequest): Observable<any> {
    console.log(doctorData);
    return this.http.post<any>(
      this.adminUrl + '/doctor/register-doctor',
      doctorData
    );
  }

  public updateDoctor(doctorData: UpdateDoctorRequest): Observable<any> {
    return this.http.post<any>(
      this.adminUrl + '/doctor/update-doctor',
      doctorData
    );
  }

  public deleteDoctor(doctorId: number): Observable<any> {
    return this.http.delete<any>(
      this.adminUrl + '/patient/delete-doctor/' + doctorId
    );
  }
}
