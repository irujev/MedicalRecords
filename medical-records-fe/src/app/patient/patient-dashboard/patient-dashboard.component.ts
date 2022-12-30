import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor.model';
import { Patient } from 'src/app/model/patient.model';
import { Visitation } from 'src/app/model/visitation.model';
import { LocalService } from 'src/app/service/local.service';
import { PatientService } from 'src/app/service/patient.service';
import { VisitationService } from 'src/app/service/visitation.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss'],
})
export class PatientDashboardComponent implements OnInit {
  patient: Patient = {} as Patient;
  requestedVisitations: Visitation[] = [];
  medicalNotesColumns: string[] = [
    'sickness',
    'doctorName',
    'treatment',
    'hospitationStartDate',
    'hospitationEndDate',
  ];

  visitationColumns: string[] = ['visitationData', 'complains'];

  ngOnInit(): void {
    const savedLocalPatientId = this.localService.getData('patientId');

    const patientId: number =
      savedLocalPatientId == null ? 0 : +savedLocalPatientId;
    this.patientService.findPatientById(patientId).subscribe((patient) => {
      this.patient = patient;
    });

    this.visitationService
      .findAllRequestedVisitations(patientId)
      .subscribe((visitations) => {
        this.requestedVisitations = visitations;
      });
  }

  constructor(
    private patientService: PatientService,
    private visitationService: VisitationService,
    private localService: LocalService,
    private router: Router
  ) {}

  registerVisitation() {
    this.router.navigate(['/patient-visitation']);
  }
}
