import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor.model';
import { Patient } from 'src/app/model/patient.model';
import { LocalService } from 'src/app/service/local.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss'],
})
export class PatientDashboardComponent implements OnInit {
  patient: Patient = {} as Patient;
  medicalNotesColumns: string[] = [
    'sickness',
    'doctorName',
    'treatment',
    'hospitationStartDate',
    'hospitationEndDate',
  ];

  ngOnInit(): void {
    const savedLocalPatientId = this.localService.getData('patientId');

    const patientId: number =
      savedLocalPatientId == null ? 0 : +savedLocalPatientId;
    this.patientService.findPatientById(patientId).subscribe((patient) => {
      this.patient = patient;
    });
  }

  constructor(
    private patientService: PatientService,
    private localService: LocalService,
    private router: Router
  ) {}
}
