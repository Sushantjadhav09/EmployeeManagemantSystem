package com.example.test.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.test.model.Employe;

@Repository
public interface TestRepository extends JpaRepository<Employe, Integer>{
	@Query (value = "select * from Employe where full_name like ?1",nativeQuery = true)
	 List <Employe> FindEmployeeByName(String empname);
	
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM Employe WHERE empno = ?1", nativeQuery = true)
	void deleteById(int empno);

	@Transactional
	@Modifying
	@Query(value = "UPDATE Employe SET full_name = ?1, dob = ?2, gender = ?3, age = ?4, current_address = ?5, permanent_address = ?6, mob_no = ?7,personal_mail =?8,Emergency_contact_name = ?9,Emergency_mobile_no =?10 WHERE empno = ?11", nativeQuery = true)
	void findById(String full_name, String dob, String gender, int age, String current_address, String permanent_address, long mob_no, int empno, String personal_mail, String Emergency_contact_name, String Emergency_mobile_no);

}
