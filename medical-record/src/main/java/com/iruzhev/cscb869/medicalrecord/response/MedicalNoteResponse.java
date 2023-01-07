package com.iruzhev.cscb869.medicalrecord.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import com.iruzhev.cscb869.medicalrecord.db.model.Patient;
import jakarta.persistence.*;

import java.util.Date;

public class MedicalNoteResponse {

    private String sickness;

    private String treatment;

    private String hospitalisationInterval;

    private String patientName;

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

    public String getHospitalisationInterval() {
        return hospitalisationInterval;
    }

    public void setHospitalisationInterval(String hospitalisationInterval) {
        this.hospitalisationInterval = hospitalisationInterval;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }
}
