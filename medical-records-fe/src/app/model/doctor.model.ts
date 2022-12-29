export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  isPersonalDoctor: boolean;
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
