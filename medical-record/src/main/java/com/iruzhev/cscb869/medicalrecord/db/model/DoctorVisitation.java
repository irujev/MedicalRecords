package com.iruzhev.cscb869.medicalrecord.db.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class DoctorVisitation {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @OneToOne
    private Patient patient;

    private Date visitationDate;

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Date getVisitationDate() {
        return visitationDate;
    }

    public void setVisitationDate(Date visitationDate) {
        this.visitationDate = visitationDate;
    }
}
