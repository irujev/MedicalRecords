package com.iruzhev.cscb869.medicalrecord.controller;

import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import com.iruzhev.cscb869.medicalrecord.db.model.MedicalNote;
import com.iruzhev.cscb869.medicalrecord.db.model.Patient;
import com.iruzhev.cscb869.medicalrecord.db.repository.DoctorRepository;
import com.iruzhev.cscb869.medicalrecord.db.repository.MedicalNoteRepository;
import com.iruzhev.cscb869.medicalrecord.db.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class MedicalRecordController {

    @Autowired
    private MedicalNoteRepository medicalNoteRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping(value="/api/medical-record/by-sickness/{sickness}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> displayDoctorMedicalNotes(@PathVariable String sickness) {
        List<MedicalNote> notes = medicalNoteRepository.findMedicalNotesBySickness(sickness);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value="/api/find-patience-by-doctor/{doctorId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> displayDoctorMedicalNotes(@PathVariable Long doctorId) {
        Doctor doctor = doctorRepository.getReferenceById(doctorId);
        List<Patient> doctorsPatients = (List<Patient>) patientRepository.findDoctorsPatients(doctor);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
