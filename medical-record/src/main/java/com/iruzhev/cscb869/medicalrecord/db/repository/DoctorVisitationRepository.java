package com.iruzhev.cscb869.medicalrecord.db.repository;

import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import com.iruzhev.cscb869.medicalrecord.db.model.DoctorVisitation;
import com.iruzhev.cscb869.medicalrecord.db.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface DoctorVisitationRepository extends JpaRepository<DoctorVisitation, Long> {
    @Query("SELECT dv FROM DoctorVisitation dv WHERE dv.patient = ?1")
    Collection<DoctorVisitation> getVisitationsByPatient(Patient patient);
}
