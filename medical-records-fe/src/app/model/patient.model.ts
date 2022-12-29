import { Doctor } from "./doctor.model";

export interface Patient {
    id:number;
    name:string;
    egn:String;
    hasPaidSocialSecurity:boolean;
    personalDoctor:Doctor;
}