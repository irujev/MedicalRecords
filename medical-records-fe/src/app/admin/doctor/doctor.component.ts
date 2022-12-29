import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/model/doctor.model';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  doctor: Doctor = {
    id: 0,
    name: '',
    specialty: '',
    isPersonalDoctor: false,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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

  backToDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }
}
