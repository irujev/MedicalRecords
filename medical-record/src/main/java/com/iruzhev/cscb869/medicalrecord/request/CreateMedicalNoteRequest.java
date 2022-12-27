package com.iruzhev.cscb869.medicalrecord.request;

import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import jakarta.persistence.Column;
import jakarta.persistence.OneToOne;

import java.util.Date;

public class CreateMedicalNoteRequest {

    private long patientId;

    private long doctorId;

    private String sickness;

    private String treatment;

    private Date hospitationStartDate;

    private Date hospitationEndDate;

    public long getPatientId() {
        return patientId;
    }

    public void setPatientId(long patientId) {
        this.patientId = patientId;
    }

    public long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(long doctorId) {
        this.doctorId = doctorId;
    }

    public String getSickness() {
        return sickness;
    }

    public void setSickness(String sickness) {
        this.sickness = sickness;
    }

    public String getTreatment() {
        return treatment;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }

    public Date getHospitationStartDate() {
        return hospitationStartDate;
    }

    public void setHospitationStartDate(Date hospitationStartDate) {
        this.hospitationStartDate = hospitationStartDate;
    }

    public Date getHospitationEndDate() {
        return hospitationEndDate;
    }

    public void setHospitationEndDate(Date hospitationEndDate) {
        this.hospitationEndDate = hospitationEndDate;
    }
}
