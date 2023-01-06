export interface Visitation {
  patientId: number;
  complains: string;
  visitationDate: string;
}
export interface OpenVisitation {
  patientName: string;
  patientId: number;
  complains: string;
  visitationDate: string;
}

export interface MedicalNoteRequest {
  patientId: number;
  doctorId: number;
  visitationId: number;
  sickness: string;
  treatment: string;
  hospitationStartDate: string;
  hospitationEndDate: string;
}
