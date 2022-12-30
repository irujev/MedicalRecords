package com.iruzhev.cscb869.medicalrecord.db.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Date;

@Entity
public class DoctorVisitation implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    private Patient patient;

    private Date visitationDate;

    private String complains;

    private boolean done;

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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean getDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public String getComplains() {
        return complains;
    }

    public void setComplains(String complains) {
        this.complains = complains;
    }
}
