import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor.model';
import { Patient } from 'src/app/model/patient.model';
import { DoctorService } from 'src/app/service/doctor.service';
import { LocalService } from 'src/app/service/local.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  patient: Patient = {
    id: 0,
  } as Patient;

  doctorId: number = 0;

  personalDoctors: Doctor[] = [];

  constructor(
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute,
    private localService: LocalService,
    private doctorService: DoctorService
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
    this.doctorService.findPersonalDoctors().subscribe((doctors) => {
      this.personalDoctors = doctors;
      if (
        this.patient.id == 0 ||
        // this.patient.personalDoctor == null ||
        this.patient.personalDoctor?.id == 0
      ) {
        this.doctorId = doctors[0].id;
      }
    });
  }

  registerPatient(): void {
    this.patientService
      .registerPatient({
        name: this.patient.name,
        egn: this.patient.egn,
        hasPaidSocialSecurity: this.patient.hasPaidSocialSecurity,
        doctorId: this.doctorId,
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
        doctorId: this.doctorId,
        id: this.patient.id,
      })
      .subscribe((result) => {
        this.router.navigate(['/admin-dashboard']);
      });
  }

  backToDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }
  isFormValid(): boolean {
    return false;
  }
  logout() {
    this.localService.removeData('isAdmin');
    this.router.navigate(['/login']);
  }
}
