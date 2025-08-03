package com.example.test.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.test.Repository.TestRepository;
import com.example.test.model.Employe;

@Service
public class TestService {
	@Autowired
	TestRepository testrepository;

	public Employe getEmployee(int empno) {

		return testrepository.findById(empno).get();
	}

	public List<Employe> getEmployeebyName(String empname) {
		
		return testrepository.FindEmployeeByName(empname);
	}

	public List<Employe>getaLLEmployee() {
		// TODO Auto-generated method stub
		return testrepository.findAll();
	}

	public void DeleteEmploye(int empno) {
		testrepository.deleteById(empno);
		
	}
	
	
	public Employe addStud(Employe s) {
		
		return testrepository.save(s);
	}

	public Employe updateEmploye(int empno, Employe newEmployeevalues) {
		
	  Employe currentDbvalues =	testrepository.findById(empno).get();
	  currentDbvalues.setEmpno(newEmployeevalues.getEmpno());
	  currentDbvalues.setFull_name(newEmployeevalues.getFull_name());
	  currentDbvalues.setDob(newEmployeevalues.getDob());
	  currentDbvalues.setGender(newEmployeevalues.getGender());
	  currentDbvalues.setAge(newEmployeevalues.getAge());
	  currentDbvalues.setAge(newEmployeevalues.getAge());
	  currentDbvalues.setCurrent_address(newEmployeevalues.getCurrent_address());
	  currentDbvalues.setPermanent_address(newEmployeevalues.getPermanent_address());
	  currentDbvalues.setMob_no(newEmployeevalues.getMob_no());
	  currentDbvalues.setPersonal_mail(newEmployeevalues.getPersonal_mail());
	  currentDbvalues.setEmergency_contact_name(newEmployeevalues.getEmergency_contact_name());
	  currentDbvalues.setEmergency_mobile_no(newEmployeevalues.getEmergency_mobile_no());
	  




	  return testrepository.save( currentDbvalues);
	  
	}

	

}
