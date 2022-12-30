import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitation } from 'src/app/model/visitation.model';
import { LocalService } from 'src/app/service/local.service';
import { PatientService } from 'src/app/service/patient.service';
import { VisitationService } from 'src/app/service/visitation.service';

@Component({
  selector: 'app-patient-visitation',
  templateUrl: './patient-visitation.component.html',
  styleUrls: ['./patient-visitation.component.scss'],
})
export class PatientVisitationComponent implements OnInit {
  visitationRegistration: Visitation = {} as Visitation;
  // minDate = moment();

  constructor(
    private patientService: PatientService,
    private visitationService: VisitationService,
    private localService: LocalService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const savedLocalPatientId = this.localService.getData('patientId');
    const patientId: number =
      savedLocalPatientId == null ? 0 : +savedLocalPatientId;
    this.visitationRegistration.patientId = patientId;
  }

  backToDashboard() {
    this.router.navigate(['/patient-dashboard']);
  }
  registerVisitation() {
    console.log(this.visitationRegistration);
    this.visitationService
      .registerVisitation(this.visitationRegistration)
      .subscribe((result) => {
        this.router.navigate(['/patient-dashboard']);
      });
  }
  isFormValid() {}
}
