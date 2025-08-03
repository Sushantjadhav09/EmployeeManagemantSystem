package com.example.test.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.Service.TestService;
import com.example.test.model.Employe;

@RestController
@CrossOrigin("*")
public class TestController {
	@Autowired
	TestService testservice;
	
	
	@GetMapping("/getEmployeeByempno/{empno}")
	public Employe getStudentByrno(@PathVariable("empno")int empno) {
		
		return testservice.getEmployee(empno);
	}
	
	@GetMapping("/getEmployeebyName/{name}")
	public  List<Employe> getEmployeebyName(@PathVariable("name")String empname) {
		
		return testservice.getEmployeebyName(empname);
	}
	@GetMapping("/getallaemployee")
	public List <Employe>getaLLEmployee() {
		
		return testservice.getaLLEmployee();
	}
	
	@DeleteMapping("/DeleteEmployee/{empno}")
	public String DeleteEmployee(@PathVariable("empno") int empno) {
		
		testservice.DeleteEmploye(empno);
		return "record deleted";
	}
	
//	@PostMapping("/addEmployee")
//	public String addEmloye(@RequestParam("a") int empno,
//			@RequestParam("b") String full_name,
//			@RequestParam("c") String dob,
//			@RequestParam("d") String gender,
//			@RequestParam("e") int age,
//			@RequestParam("f") String current_address,
//			@RequestParam("g") String permanent_address,
//			@RequestParam("h") long mob_no,
//			@RequestParam("i") String personal_mail,
//			@RequestParam("j") String Emergency_contact_name,
//			@RequestParam("k") String Emergency_mobile_no) {
//		Employe s = new Employe();
//		s.setEmpno(empno);
//		s.setFull_name(full_name);
//		s.setDob(dob);
//		s.setGender(gender);
//		s.setAge(age);
//		s.setCurrent_address(current_address);
//		s.setPermanent_address(permanent_address);
//		s.setMob_no(mob_no);
//		s.setPersonal_mail(permanent_address);
//		s.setEmergency_contact_name(permanent_address);
//		s.getEmergency_mobile_no();
//		testservice.addStud(s);
//		
//		return "record inserted successfully";
//	}
	
	@PostMapping("/addEmployee")
	public String addEmploye(@RequestBody Employe employee) {
	    testservice.addStud(employee);
	    return "Employee record inserted successfully";
	}
	
	@PutMapping("updateEmployee/{empno}")
	public String updateStudent(@RequestBody Employe newEmployeevalues,@PathVariable("empno") int empno) {
		
		testservice.updateEmploye(empno, newEmployeevalues);
		
		return "record updated successfully";
	}
}
