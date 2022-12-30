package com.iruzhev.cscb869.medicalrecord.db.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Patient implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String name;

    private String egn;

    private boolean hasPaidSocialSecurity;

    @OneToOne
    private Doctor personalDoctor;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "patient")
    private Set<MedicalNote> medicalNotesHistory = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "patient")
    private Set<DoctorVisitation> doctorVisitations = new HashSet<>();

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

    public boolean getHasPaidSocialSecurity() {
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

    public Set<MedicalNote> getMedicalNotesHistory() {
        return medicalNotesHistory;
    }

    public void setMedicalNotesHistory(Set<MedicalNote> medicalNotesHistory) {
        this.medicalNotesHistory = medicalNotesHistory;
    }

    public Set<DoctorVisitation> getDoctorVisitations() {
        return doctorVisitations;
    }

    public void setDoctorVisitations(Set<DoctorVisitation> doctorVisitations) {
        this.doctorVisitations = doctorVisitations;
    }
}
