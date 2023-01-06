import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  doctorVisitationsColumn: string[] = [
    'patientName',
    'complaints',
    'visitationDate',
    'actions',
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
  }

  startVisitation(visitationId: number, patientId: number) {
    console.log('Visitation id ' + visitationId);
    console.log('Patient id ' + patientId);
    this.router.navigate([
      '/doctor-visitation',
      { patientId: patientId, visitationId: visitationId },
    ]);
  }
}
