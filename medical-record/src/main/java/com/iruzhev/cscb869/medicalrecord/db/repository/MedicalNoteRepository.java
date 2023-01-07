package com.iruzhev.cscb869.medicalrecord.db.repository;

import com.iruzhev.cscb869.medicalrecord.db.model.Doctor;
import com.iruzhev.cscb869.medicalrecord.db.model.MedicalNote;
import com.iruzhev.cscb869.medicalrecord.db.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MedicalNoteRepository  extends JpaRepository<MedicalNote, Long> {

    @Query("SELECT mn FROM MedicalNote mn WHERE mn.sickness = ?1")
    List<MedicalNote> findMedicalNotesBySickness(String sickness);

}
