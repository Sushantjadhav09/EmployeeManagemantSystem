package com.example.test.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.test.model.empprofessionaldetails;
@Repository
public interface ProfessionalDTLSrepository extends JpaRepository<empprofessionaldetails, Integer> {

	@Query (value ="select * from empprofessionaldetails where city = ?1",nativeQuery = true)
	List<empprofessionaldetails> getprofdetailsbycity(String  city);
	
	@Transactional
	@Modifying
	@Query(value = "delete from empprofessionaldetails where employment_code  = ?1",nativeQuery = true)
	void deletebyemployment_code(String employment_code);
	
	
	@Transactional
	@Modifying
	@Query(value = "update empprofessionaldetails set employment_code = ?1, company_mail = ?2, office_phone = ?3,  city = ?4,office_address = ?5,reporting_manager_mail = ?6,hr_name = ?7, employment_history = ?8 , date_of_joining = ?9 where employment_code = ?10 ",nativeQuery = true)
	void findByemployment_code(String employment_code ,String company_mail, String office_phone, String city, String office_address, String reporting_manager_mail, String hr_name, String employment_history, String date_of_joining);


}
