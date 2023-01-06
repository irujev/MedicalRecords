import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DoctorComponent } from './admin/doctor/doctor.component';
import { PatientComponent } from './admin/patient/patient.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { VisitationComponent } from './doctor/visitation/visitation.component';
import { LoginComponent } from './login/login.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { PatientVisitationComponent } from './patient/patient-visitation/patient-visitation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin-patient', component: PatientComponent },
  { path: 'admin-doctor', component: DoctorComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'patient-dashboard', component: PatientDashboardComponent },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'doctor-visitation', component: VisitationComponent },
  { path: 'patient-visitation', component: PatientVisitationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
