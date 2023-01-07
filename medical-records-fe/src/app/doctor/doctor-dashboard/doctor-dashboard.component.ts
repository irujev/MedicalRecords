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
  allMedicalNotes = new MatTableDataSource<MedicalNoteResponse>();
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
        this.allMedicalNotes.data = visitations;
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
    this.allMedicalNotes.filter = value.trim().toLocaleLowerCase();
  };
  logout() {
    this.localService.removeData('doctorId');
    this.router.navigate(['/login']);
  }
}
