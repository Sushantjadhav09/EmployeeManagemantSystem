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

import com.example.test.Service.FinanceService;
import com.example.test.model.Employe;
import com.example.test.model.Finance_details;

@RestController
@CrossOrigin("*")
public class FinanceController {
	@Autowired
	FinanceService financeService;
	
	@GetMapping("/getfinancedetalisbypan/{pan_card}")
	public  List<Finance_details> getEmployeebyName(@PathVariable("pan_card")String pan_card) {
		
		return financeService.getfinancedetails(pan_card);
	}
	@GetMapping("/getallfinancedetails")
	public List <Finance_details>getaLLfinancedetails() {
		
		return financeService.getaLLFinance();
	}
	
	@GetMapping("/getfinancedetailsbyid/{id}")
	public Finance_details getfinancedetailsbyid(@PathVariable("id")int id) {
		
		return financeService.getfinancedetailsbyid(id);
	}
	
	@DeleteMapping("/Deletefinancedetails/{pan_card}")
	public String DeleteEmployee(@PathVariable("pan_card") String pan_card) {
		
		financeService.Deletefinance(pan_card);
		return "record deleted";
	}
	
//	@PostMapping("/addFinance_details")
//	public String addFinance(@RequestParam("a") int id,
//			@RequestParam("b") String pan_card,
//			@RequestParam("c") String aadhar_card,
//			@RequestParam("d") String bank_name,
//			@RequestParam("e") String branch_name,
//			@RequestParam("f") String ifsc_code,
//			@RequestParam("g") String ctc_breakup) {
//		Finance_details f = new Finance_details();
//		f.setId(id);
//		f.setPan_card(pan_card);
//		f.setAadhar_card(aadhar_card);
//		f.setBank_name(bank_name);
//		f.setBranch_name(branch_name);
//		f.setIfsc_code(ifsc_code);
//		f.setCtc_breakup(id);
//		financeService.addfinancee(f);
//		
//		return "record inserted successfully";
//	}
	
	@PostMapping("/addFinance_details")
	public String addEmploye(@RequestBody Finance_details f) {
		financeService.addfinancee(f);
	    return "record inserted successfully";
	}
	
	@PutMapping("updatefinance/{id}")
	public String updatefinancedetails(@RequestBody Finance_details newFinance_details,@PathVariable("id") int  id ) {
		
		financeService.updatefinance( id , newFinance_details);
		
		return "record updated successfully";
	}
	
	@DeleteMapping("/deleteFinance/{id}")
    public String deleteFinance(@PathVariable("id") int id) {
        return financeService.deleteFinanceById(id);
    }

}
