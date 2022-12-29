import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.model';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  patient: Patient = {
    id: 0,
    name: '',
    egn: '',
    hasPaidSocialSecurity: false,
  };

  constructor(
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.patient.id = params['patientId'];
      console.log('Patient id is ' + this.patient.id);
      if (this.patient.id) {
        this.patientService
          .findPatientById(this.patient.id)
          .subscribe((patient) => (this.patient = patient));
      } else {
        this.patient.id = 0;
      }
    });
  }

  registerPatient(): void {
    this.patientService
      .registerPatient({
        name: this.patient.name,
        egn: this.patient.egn,
        hasPaidSocialSecurity: this.patient.hasPaidSocialSecurity,
        doctorId: 0,
      })
      .subscribe((result) => {
        this.router.navigate(['/admin-dashboard']);
      });
  }

  updatePatientData(): void {
    this.patientService
      .updatePatient({
        name: this.patient.name,
        egn: this.patient.egn,
        hasPaidSocialSecurity: this.patient.hasPaidSocialSecurity,
        doctorId: 0,
        id: this.patient.id,
      })
      .subscribe((result) => {
        this.router.navigate(['/admin-dashboard']);
      });
  }

  backToDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }
}
