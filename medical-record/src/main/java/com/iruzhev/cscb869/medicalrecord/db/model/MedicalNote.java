package com.iruzhev.cscb869.medicalrecord.db.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class MedicalNote {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String sickness;

    @OneToOne
    private Doctor doctor;

    @Column(nullable = false)
    private String treatment;

    private Date hospitationStartDate;

    private Date hospitationEndDate;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    private Patient patient;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
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

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}
