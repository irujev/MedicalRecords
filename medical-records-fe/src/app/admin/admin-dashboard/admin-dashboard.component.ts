import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor.model';
import { Patient } from 'src/app/model/patient.model';
import { DoctorService } from 'src/app/service/doctor.service';
import { LocalService } from 'src/app/service/local.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  patientsColumns: string[] = [
    'name',
    'egn',
    'hasPaidSocialSecurity',
    'personalDoctorName',
    'actions',
  ];
  doctorsColumns: string[] = [
    'id',
    'name',
    'specialty',
    'isPersonalDoctor',
    'actions',
  ];

  doctors: Doctor[] = [];
  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private localService: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientService.findAllPatients().subscribe((patients) => {
      this.patients = patients;
    });
    this.doctorService.findAllDoctors().subscribe((doctors) => {
      console.log(doctors);
      this.doctors = doctors;
    });
  }

  createNewPatient() {
    this.router.navigate(['/admin-patient']);
  }

  editPatient(patientId: number) {
    this.router.navigate(['/admin-patient', { patientId: patientId }]);
  }

  deletePatient(patientId: number) {}

  createNewDoctor() {
    this.router.navigate(['/admin-doctor']);
  }

  editDoctor(doctorId: number) {
    this.router.navigate(['/admin-doctor', { doctorId: doctorId }]);
  }
  deleteDoctor(doctorId: number) {
    this.doctorService
      .deleteDoctor(doctorId)
      .subscribe((doctor) => console.log('Doctor was deleted'));
  }
}
