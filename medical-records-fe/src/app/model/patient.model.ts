import { Doctor } from './doctor.model';

export interface Patient {
  id: number;
  name: string;
  egn: string;
  hasPaidSocialSecurity: boolean;
  personalDoctor: Doctor;
  medicalNotesHistory: MedicalNote[];
}

export interface CreatePatientRequest {
  name: string;
  egn: string;
  hasPaidSocialSecurity: boolean;
  doctorId: number;
}

export interface UpdatePatientRequest {
  id: number;
  name: string;
  egn: string;
  hasPaidSocialSecurity: boolean;
  doctorId: number;
}
export interface MedicalNote {
  id: number;
  sickness: string;
  doctor: Doctor;
  treatment: string;
  hospitationStartDate: string;
  hospitationEndDate: string;
}

export interface MedicalNoteResponse {
  sickness: string;
  treatment: string;
  hospitalisationInterval: string;
  patientName: string;
}
