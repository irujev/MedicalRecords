package com.iruzhev.cscb869.medicalrecord.request;

public class UpdatePatientRequest {

    private long id;

    private String name;

    private String egn;

    private long doctorId;

    private boolean hasPaidSocialSecurity;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEgn() {
        return egn;
    }

    public void setEgn(String egn) {
        this.egn = egn;
    }

    public boolean isHasPaidSocialSecurity() {
        return hasPaidSocialSecurity;
    }

    public void setHasPaidSocialSecurity(boolean hasPaidSocialSecurity) {
        this.hasPaidSocialSecurity = hasPaidSocialSecurity;
    }

    public long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(long doctorId) {
        this.doctorId = doctorId;
    }
}
