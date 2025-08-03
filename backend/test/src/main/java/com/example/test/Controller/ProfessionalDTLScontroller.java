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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.Service.ProfessionalDTLSservice;
import com.example.test.model.Employe;
import com.example.test.model.empprofessionaldetails;

@RestController
@CrossOrigin("*")
public class ProfessionalDTLScontroller {
	@Autowired
	ProfessionalDTLSservice professionalDTLSservice;
	
	@GetMapping("/getprofessiondetailsbycity/{city}")
	public  List< empprofessionaldetails> getprofessionaldtlsbbyCity(@PathVariable("city")String city) {
		
		return professionalDTLSservice.getprofessionaldetailsbycity(city);
	}
	
	@GetMapping("/getprofessiondetailsbyid/{employment_code}")
	public empprofessionaldetails getprofessionaldtlsbbyId(@PathVariable("employment_code")int employment_code) {
		
		return professionalDTLSservice.getprofessionaldetailsbyid(employment_code);
	}
	
	@GetMapping("/getallprofdetailsemployee")
	public List < empprofessionaldetails>getaLLEmployee() {
		
		return professionalDTLSservice.getaLLprofdetails();
	}
	
	@DeleteMapping("/DeleteProfdetails/{employment_code}")
	public String DeleteEmployee(@PathVariable("employment_code") String employment_code) {
		
		professionalDTLSservice.DeleteProffdetails(employment_code);
		return "record deleted";
	}
	
//	@PostMapping("/addprofdetails")
//	public String addprofdetails(@RequestParam("a") int employment_code ,
//			@RequestParam("b") String  company_mail ,
//			@RequestParam("c") String office_phone ,
//			@RequestParam("d") String  city ,
//			@RequestParam("e") String office_address,
//			@RequestParam("f") String reporting_manager_mail,
//			@RequestParam("g") String hr_name,
//			@RequestParam("h") String employment_history,
//			@RequestParam("i") String date_of_joining) {
//		empprofessionaldetails ep = new empprofessionaldetails();
//		ep.setEmployment_code(employment_code);
//		ep.setCompany_mail(company_mail);
//		ep.setOffice_phone(office_phone);
//		ep.setCity(city);
//		ep.setOffice_address(office_address);
//		ep.setReporting_manager_mail(reporting_manager_mail);
//		ep.setHr_name(hr_name);
//		ep.setEmployment_history(employment_history);
//		ep.setDate_of_joining(date_of_joining);
//		professionalDTLSservice.addproffesionaldetails(ep);
//		
//		return "record inserted successfully";
//	}
	
	@PostMapping("/addprofdetails")
	public String addEmploye(@RequestBody empprofessionaldetails ep) {
		professionalDTLSservice.addproffesionaldetails(ep);
	    return "record inserted successfully";
	}
	
	@PutMapping("/updateprofdetails/{employment_code}")
	public String updateprofdetails(@RequestBody empprofessionaldetails newempprofessionaldetails,@PathVariable("employment_code") int employment_code) {
		
		professionalDTLSservice.updateprofdetails(employment_code,newempprofessionaldetails);
		
		return "record updated successfully";
	}
}
