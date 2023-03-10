package com.iruzhev.cscb869.medicalrecord.request;

import java.util.Date;

public class DoctorVisitationRequest {

    private long patientId;

    private Date visitationDate;

    private String complains;

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
