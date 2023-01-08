import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MedicalNoteResponse } from 'src/app/model/patient.model';
import { OpenVisitation, Visitation } from 'src/app/model/visitation.model';
import { LocalService } from 'src/app/service/local.service';
import { VisitationService } from 'src/app/service/visitation.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss'],
})
export class DoctorDashboardComponent implements OnInit {
  openDoctorVisitation: OpenVisitation[] = [];
  filteredMedicalNotes: MedicalNoteResponse[] = [];
  allMedicalNotes: MedicalNoteResponse[] = [];
  doctorVisitationsColumn: string[] = [
    'patientName',
    'complaints',
    'visitationDate',
    'actions',
  ];
  allMedicalNotesColumns: string[] = [
    'patientName',
    'sickness',
    'treatment',
    'hospitalisationInterval',
  ];
  patientsCount: number = 0;

  constructor(
    private visitationService: VisitationService,
    private localService: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.visitationService
      .getOpenVisitations()
      .subscribe(
        (openVisitations) => (this.openDoctorVisitation = openVisitations)
      );
    this.visitationService
      .getAllDoctorsVisitations()
      .subscribe((visitations) => {
        this.filteredMedicalNotes = visitations;
        this.allMedicalNotes = visitations;
        this.patientsCount = visitations.length;
      });
  }

  startVisitation(visitationId: number, patientId: number) {
    console.log('Visitation id ' + visitationId);
    console.log('Patient id ' + patientId);
    this.router.navigate([
      '/doctor-visitation',
      { patientId: patientId, visitationId: visitationId },
    ]);
  }
  public doFilter = (event: any) => {
    const value = (event.target as HTMLInputElement).value;
    this.filteredMedicalNotes = this.allMedicalNotes.filter((note) => {
      return note.sickness
        .toLocaleLowerCase()
        .includes(value.trim().toLocaleLowerCase());
    });
    this.patientsCount = [
      ...new Set(this.filteredMedicalNotes.map((note) => note.patientName)),
    ].length;
  };
  logout() {
    this.localService.removeData('doctorId');
    this.router.navigate(['/login']);
  }
}
