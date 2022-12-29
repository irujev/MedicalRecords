export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  isPersonalDoctor: boolean;
}
export interface CreatePatientRequest {
  name: string;
  specialty: string;
  isPersonalDoctor: boolean;
}
export interface UpdatePatientRequest {
  id: number;
  name: string;
  specialty: string;
  isPersonalDoctor: boolean;
}
