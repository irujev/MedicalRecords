import { Doctor } from './doctor.model';

export interface Patient {
  id: number;
  name: string;
  egn: string;
  hasPaidSocialSecurity: boolean;
  personalDoctor: Doctor;
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
