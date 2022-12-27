package com.iruzhev.cscb869.medicalrecord.db.model;

import jakarta.persistence.*;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String name;

    private String specialty;

    private boolean isPersonalDoctor;

    private int visitationCounter;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public boolean isPersonalDoctor() {
        return isPersonalDoctor;
    }

    public void setPersonalDoctor(boolean personalDoctor) {
        isPersonalDoctor = personalDoctor;
    }

    public int getVisitationCounter() {
        return visitationCounter;
    }

    public void setVisitationCounter(int visitationCounter) {
        this.visitationCounter = visitationCounter;
    }
}
