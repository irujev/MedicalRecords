import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/model/doctor.model';
import { DoctorService } from 'src/app/service/doctor.service';
import { LocalService } from 'src/app/service/local.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  doctor: Doctor = {} as Doctor;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private localService: LocalService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.doctor.id = params['doctorId'];
      if (this.doctor.id) {
        this.doctorService
          .findDoctorById(this.doctor.id)
          .subscribe((doctor) => (this.doctor = doctor));
      } else {
        this.doctor.id = 0;
      }
    });
  }
  registerDoctor() {
    this.doctorService
      .registerDoctor({
        name: this.doctor.name,
        specialty: this.doctor.specialty,
        isPersonalDoctor: this.doctor.isPersonalDoctor,
      })
      .subscribe((result) => {
        this.router.navigate(['/admin-dashboard']);
      });
  }

  updateDoctorData() {
    this.doctorService
      .updateDoctor({
        id: this.doctor.id,
        name: this.doctor.name,
        specialty: this.doctor.specialty,
        isPersonalDoctor: this.doctor.isPersonalDoctor,
      })
      .subscribe((result) => {
        this.router.navigate(['/admin-dashboard']);
      });
  }

  backToDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }
  logout() {
    this.localService.removeData('isAdmin');
    this.router.navigate(['/login']);
  }
}
