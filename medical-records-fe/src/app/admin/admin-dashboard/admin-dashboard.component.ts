import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.model';
import { LocalService } from 'src/app/service/local.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'egn',
    'hasPaidSocialSecurity',
    'personalDoctorName',
    'actions',
  ];

  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private localService: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientService.findAllPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }

  createNewPatient() {
    this.router.navigate(['/admin-patient']);
  }

  editPatient(patientId: number) {
    console.log('Id-to na pacienta e');
  }

  deletePatient(patientId: number) {}
}
