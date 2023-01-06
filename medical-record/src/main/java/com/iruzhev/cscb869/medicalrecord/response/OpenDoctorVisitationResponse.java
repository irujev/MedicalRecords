package com.iruzhev.cscb869.medicalrecord.response;

import com.iruzhev.cscb869.medicalrecord.db.model.Patient;
import jakarta.persistence.*;

import java.util.Date;

public class OpenDoctorVisitationResponse {

    private long id;

    private String patientName;

    private long patientId;

    private Date visitationDate;

    private String complains;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public long getPatientId() {
        return patientId;
    }

    public void setPatientId(long patientId) {
        this.patientId = patientId;
    }

    public Date getVisitationDate() {
        return visitationDate;
    }

    public void setVisitationDate(Date visitationDate) {
        this.visitationDate = visitationDate;
    }

    public String getComplains() {
        return complains;
    }

    public void setComplains(String complains) {
        this.complains = complains;
    }
}
