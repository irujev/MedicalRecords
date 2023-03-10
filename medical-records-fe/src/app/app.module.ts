import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './admin/patient/patient.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { DoctorComponent } from './admin/doctor/doctor.component';
import { MatSelectModule } from '@angular/material/select';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { PatientVisitationComponent } from './patient/patient-visitation/patient-visitation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { VisitationComponent } from './doctor/visitation/visitation.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    LoginComponent,
    AdminDashboardComponent,
    DoctorComponent,
    PatientDashboardComponent,
    PatientVisitationComponent,
    DoctorDashboardComponent,
    VisitationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
