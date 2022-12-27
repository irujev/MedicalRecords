package com.iruzhev.cscb869.medicalrecord.request;

public class RegisterPatientRequest {
    private String name;

    private String egn;

    private boolean hasPaidSocialSecurity;

    private long doctorId;

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
