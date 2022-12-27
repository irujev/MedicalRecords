package com.iruzhev.cscb869.medicalrecord.db.repository;

import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}
