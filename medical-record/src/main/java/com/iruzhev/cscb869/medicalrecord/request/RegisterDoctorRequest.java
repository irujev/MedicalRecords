package com.iruzhev.cscb869.medicalrecord.request;

public class RegisterDoctorRequest {

    private String name;

    private String specialty;

    private boolean isPersonalDoctor;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public boolean getIsPersonalDoctor() {
        return isPersonalDoctor;
    }

    public void setPersonalDoctor(boolean personalDoctor) {
        isPersonalDoctor = personalDoctor;
    }
}
