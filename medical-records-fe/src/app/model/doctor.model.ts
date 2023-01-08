export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  isPersonalDoctor: boolean;
  visitationCounter: number;
}
export interface CreateDoctorRequest {
  name: string;
  specialty: string;
  isPersonalDoctor: boolean;
}
export interface UpdateDoctorRequest {
  id: number;
  name: string;
  specialty: string;
  isPersonalDoctor: boolean;
}
