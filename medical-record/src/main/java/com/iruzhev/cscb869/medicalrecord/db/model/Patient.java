package com.iruzhev.cscb869.medicalrecord.db.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String name;

    private String egn;

    private boolean hasPaidSocialSecurity;

    @OneToOne
    private Doctor personalDoctor;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "patient")
    private List<MedicalNote> medicalNotesHistory = new ArrayList<>();

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

    public Doctor getPersonalDoctor() {
        return personalDoctor;
    }

    public void setPersonalDoctor(Doctor personalDoctor) {
        this.personalDoctor = personalDoctor;
    }

    public List<MedicalNote> getMedicalNotesHistory() {
        return medicalNotesHistory;
    }

    public void setMedicalNotesHistory(List<MedicalNote> medicalNotesHistory) {
        this.medicalNotesHistory = medicalNotesHistory;
    }
}
