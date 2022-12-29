import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private localService: LocalService,
    private router: Router
  ) {}

  selectedVal: string = 'patient';
  patientEgn: string = '';
  doctorIdentification: string = '';
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
