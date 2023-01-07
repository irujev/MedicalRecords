import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalNoteRequest } from 'src/app/model/visitation.model';
import { LocalService } from 'src/app/service/local.service';
import { VisitationService } from 'src/app/service/visitation.service';

@Component({
  selector: 'app-visitation',
  templateUrl: './visitation.component.html',
  styleUrls: ['./visitation.component.scss'],
})
export class VisitationComponent implements OnInit {
  medicalNote: MedicalNoteRequest = {} as MedicalNoteRequest;

  constructor(
    private visitationService: VisitationService,
    private localService: LocalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.medicalNote.visitationId = params['visitationId'];
      this.medicalNote.patientId = params['patientId'];
      // this.localService.getData('doctorId'); //patient-dashboard
      const savedLocalDoctorId = this.localService.getData('doctorId');

      this.medicalNote.doctorId =
        savedLocalDoctorId == null ? 0 : +savedLocalDoctorId;
      console.log('Patient id is ' + this.medicalNote.patientId);
      console.log('Visitation id is ' + this.medicalNote.visitationId);
    });
  }

  backToDashboard() {
    this.router.navigate(['/doctor-dashboard']);
  }

  createMedicalNote() {
    console.log(this.medicalNote);
    this.visitationService
      .createMedicalNote(this.medicalNote)
      .subscribe((node) => {
        this.router.navigate(['/doctor-dashboard']);
      });
  }
  logout() {
    this.localService.removeData('doctorId');
    this.router.navigate(['/login']);
  }
}
