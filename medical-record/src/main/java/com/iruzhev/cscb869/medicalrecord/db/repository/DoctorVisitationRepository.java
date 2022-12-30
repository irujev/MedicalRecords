package com.iruzhev.cscb869.medicalrecord.db.repository;

import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import com.iruzhev.cscb869.medicalrecord.db.model.DoctorVisitation;
import com.iruzhev.cscb869.medicalrecord.db.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface DoctorVisitationRepository extends JpaRepository<DoctorVisitation, Long> {
    @Query("SELECT v FROM DoctorVisitation v WHERE v.patient = ?1 AND v.done= false")
    Collection<DoctorVisitation> getVisitationsByPatient(Patient patient);
}
