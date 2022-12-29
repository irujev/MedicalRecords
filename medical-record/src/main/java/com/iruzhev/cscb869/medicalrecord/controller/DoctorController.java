package com.iruzhev.cscb869.medicalrecord.controller;

import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import com.iruzhev.cscb869.medicalrecord.db.repository.DoctorRepository;
import com.iruzhev.cscb869.medicalrecord.request.RegisterDoctorRequest;
import com.iruzhev.cscb869.medicalrecord.request.UpdateDoctorRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;

    @GetMapping(value="/api/doctors", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Doctor>> getAllDoctors(){
        return ResponseEntity.ok(doctorRepository.findAll());
    }

    @GetMapping(value="/api/personal-doctors", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Doctor>> getPersonalDoctors(){
        return ResponseEntity.ok(doctorRepository.findPersonalDoctors());
    }

    @GetMapping(value="/api/doctor/get-by-id/{doctorId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Doctor> getDoctorById(@PathVariable long doctorId){
        return ResponseEntity.ok(doctorRepository.findById(doctorId).get());
    }

    @PostMapping(value="/api/doctor/register-doctor", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> registerDoctor(@RequestBody RegisterDoctorRequest registerDoctorRequest) {
        Doctor doctor = new Doctor();
        doctor.setIsPersonalDoctor(registerDoctorRequest.getIsPersonalDoctor());
        doctor.setName(registerDoctorRequest.getName());
        doctor.setSpecialty(registerDoctorRequest.getSpecialty());
        doctorRepository.save(doctor);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping(value="/api/doctor/update-doctor", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> updateDoctor(@RequestBody UpdateDoctorRequest updateDoctorRequest) {
        Doctor doctor = doctorRepository.findById(updateDoctorRequest.getId()).get();
        doctor.setIsPersonalDoctor(updateDoctorRequest.getIsPersonalDoctor());
        doctor.setName(updateDoctorRequest.getName());
        doctor.setSpecialty(updateDoctorRequest.getSpecialty());
        doctorRepository.save(doctor);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping(value="/api/patient/delete-doctor/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteDoctor(@PathVariable long id) {
        doctorRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
