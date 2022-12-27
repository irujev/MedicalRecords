package com.iruzhev.cscb869.medicalrecord.db.repository;

import com.iruzhev.cscb869.medicalrecord.db.model.DoctorVisitation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorVisitationRepository extends JpaRepository<DoctorVisitation, Long> {
}
