package com.iruzhev.cscb869.medicalrecord.controller;

import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import com.iruzhev.cscb869.medicalrecord.db.model.DoctorVisitation;
import com.iruzhev.cscb869.medicalrecord.db.model.MedicalNote;
import com.iruzhev.cscb869.medicalrecord.db.model.Patient;
import com.iruzhev.cscb869.medicalrecord.db.repository.DoctorRepository;
import com.iruzhev.cscb869.medicalrecord.db.repository.MedicalNoteRepository;
import com.iruzhev.cscb869.medicalrecord.db.repository.PatientRepository;
import com.iruzhev.cscb869.medicalrecord.db.repository.DoctorVisitationRepository;
import com.iruzhev.cscb869.medicalrecord.request.CreateMedicalNoteRequest;
import com.iruzhev.cscb869.medicalrecord.request.DoctorVisitationRequest;
import com.iruzhev.cscb869.medicalrecord.response.OpenDoctorVisitationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class PatientVisitationController {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorVisitationRepository doctorVisitationRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private MedicalNoteRepository medicalNoteRepository;

    @PostMapping(value="/api/patient/register-visitation", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> visitDoctor(@RequestBody DoctorVisitationRequest doctorVisitationRequest) {
        DoctorVisitation visitation = new DoctorVisitation();
        Patient patient = patientRepository.getReferenceById(doctorVisitationRequest.getPatientId());
        visitation.setPatient(patient);
        visitation.setVisitationDate(doctorVisitationRequest.getVisitationDate());
        visitation.setComplains(doctorVisitationRequest.getComplains());
        doctorVisitationRepository.save(visitation);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value="/api/visitations/by-patient-id/{patientId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<DoctorVisitation>> getVisitationsByPatient(@PathVariable long patientId){
        Patient patient = patientRepository.getReferenceById(patientId);
        return ResponseEntity.ok(doctorVisitationRepository.getVisitationsByPatient(patient));
    }///visitation/get-open-visitations

    @GetMapping(value="/api/visitation/get-open-visitations", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<OpenDoctorVisitationResponse>> getOpenVisitations(){
        return ResponseEntity.ok(doctorVisitationRepository.getOpenVisitations().stream().map(dbVisitation ->{
            OpenDoctorVisitationResponse openVisitation = new OpenDoctorVisitationResponse();
            openVisitation.setPatientName(dbVisitation.getPatient().getName());
            openVisitation.setId(dbVisitation.getId());
            openVisitation.setPatientId(dbVisitation.getPatient().getId());
            openVisitation.setVisitationDate(dbVisitation.getVisitationDate());
            openVisitation.setComplains(dbVisitation.getComplains());
            return openVisitation;
        }).collect(Collectors.toList()));
    }///visitation/get-open-visitations

    @PostMapping(value="/api/patient/create-medical-note", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> createMedicalNote(@RequestBody CreateMedicalNoteRequest createMedicalNoteRequest) {
        doctorVisitationRepository.delete(doctorVisitationRepository.getReferenceById(createMedicalNoteRequest.getVisitationId()));
        MedicalNote note = new MedicalNote();
        note.setSickness(createMedicalNoteRequest.getSickness());
        note.setTreatment(createMedicalNoteRequest.getTreatment());
        note.setHospitationStartDate(createMedicalNoteRequest.getHospitationStartDate());
        note.setHospitationEndDate(createMedicalNoteRequest.getHospitationEndDate());
        Doctor doctor = doctorRepository.findById(createMedicalNoteRequest.getDoctorId()).get();
        note.setDoctor(doctor);
        Patient patient = patientRepository.getReferenceById(createMedicalNoteRequest.getPatientId());
        note.setPatient(patient);
        medicalNoteRepository.save(note);

        patient.getMedicalNotesHistory().add(note);
        patientRepository.save(patient);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping(value="/api/patient/display-doctor-medical-notes/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> displayDoctorMedicalNotes(@PathVariable long id) {
        Doctor doctor = doctorRepository.getReferenceById(id);
        List<Patient> doctorsPatients = (List<Patient>) patientRepository.findDoctorsPatients(doctor);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
