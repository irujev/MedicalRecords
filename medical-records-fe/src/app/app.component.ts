import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from './service/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private localService: LocalService, private router: Router) {}
  ngOnInit(): void {
    const savedLocalDoctorId = this.localService.getData('doctorId');
    if (!!this.localService.getData('doctorId')) {
      this.router.navigate(['/doctor-dashboard']);
    } else if (!!this.localService.getData('patientId')) {
      this.router.navigate(['/patient-dashboard']);
    } else if (!!this.localService.getData('isAdmin')) {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  title = 'medical-records-fe';
}
