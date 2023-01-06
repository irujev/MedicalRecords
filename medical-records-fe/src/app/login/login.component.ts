import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../service/doctor.service';
import { LocalService } from '../service/local.service';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private localService: LocalService,
    private router: Router
  ) {}

  selectedVal: string = 'patient';
  patientEgn: string = '';
  doctorIdentification: number = 0;
  adminName: string = '';

  // (click)="onSave()"
  loginAsPatient() {
    this.patientService
      .findPatientByEgn(this.patientEgn)
      .subscribe((patient) => {
        this.localService.saveData('patientId', patient.id + ''); //patient-dashboard
        this.router.navigate(['/patient-dashboard']);
      });
  }
  loginAsDoctor() {
    this.doctorService
      .findDoctorById(this.doctorIdentification)
      .subscribe((doctor) => {
        this.localService.saveData('doctorId', doctor.id + ''); //patient-dashboard
        this.router.navigate(['/doctor-dashboard']);
      });
    console.log('Logging as doctor');
  }
  loginAsAdmin() {
    if (this.adminName === 'admin') {
      this.localService.saveData('isAdmin', 'true');
      this.router.navigate(['/admin-dashboard']);
    }
    console.log('Logging as admin');
  }
}
