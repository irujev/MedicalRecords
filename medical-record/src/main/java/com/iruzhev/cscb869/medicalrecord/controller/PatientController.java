package com.iruzhev.cscb869.medicalrecord.controller;

import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import com.iruzhev.cscb869.medicalrecord.db.model.MedicalNote;
import com.iruzhev.cscb869.medicalrecord.db.model.Patient;
import com.iruzhev.cscb869.medicalrecord.db.repository.DoctorRepository;
import com.iruzhev.cscb869.medicalrecord.db.repository.PatientRepository;
import com.iruzhev.cscb869.medicalrecord.request.RegisterPatientRequest;
import com.iruzhev.cscb869.medicalrecord.request.UpdatePatientRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @GetMapping(value="/api/patients", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Patient>> getAllPatients(){
        return ResponseEntity.ok(patientRepository.findAll());
    }


    @GetMapping(value="/api/patient/get-by-egn/{patientEgn}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Patient> getPatientByEgn(@PathVariable String patientEgn){
        return ResponseEntity.ok(patientRepository.findPatientByEgn(patientEgn));
    }

    @GetMapping(value="/api/patient/get-by-id/{patientId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Patient> getPatientById(@PathVariable long patientId){
        return ResponseEntity.ok(patientRepository.findById(patientId).get());
    }

    @PostMapping(value="/api/patient/register-patient", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> registerPatient(@RequestBody RegisterPatientRequest registerPatientDataRequest) {
        Patient patient = new Patient();
        patient.setEgn(registerPatientDataRequest.getEgn());
        patient.setName(registerPatientDataRequest.getName());
        patient.setHasPaidSocialSecurity(registerPatientDataRequest.isHasPaidSocialSecurity());
        Optional<Doctor> doctor = doctorRepository.findById(registerPatientDataRequest.getDoctorId());
        if(doctor.isPresent()){
            patient.setPersonalDoctor(doctor.get());
        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        patientRepository.save(patient);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping(value="/api/patient/update-patient", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> updatePatient(@RequestBody UpdatePatientRequest updatePatientRequest) {
        Patient patient = patientRepository.findById(updatePatientRequest.getId()).get();
        patient.setEgn(updatePatientRequest.getEgn());
        patient.setName(updatePatientRequest.getName());
        patient.setHasPaidSocialSecurity(updatePatientRequest.isHasPaidSocialSecurity());
        Optional<Doctor> doctor = doctorRepository.findById(updatePatientRequest.getDoctorId());
        if(doctor.isPresent()){
            patient.setPersonalDoctor(doctor.get());
        }
        patientRepository.save(patient);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping(value="/api/patient/delete-patient/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deletePatient(@PathVariable long id) {
        patientRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value="/api/patient-medical-notes/{patientId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<MedicalNote>> getPatientMedicalNotes(@PathVariable long patientId){
        Patient patient = patientRepository.getReferenceById(patientId);
        return ResponseEntity.ok(patient.getMedicalNotesHistory());
    }
}
