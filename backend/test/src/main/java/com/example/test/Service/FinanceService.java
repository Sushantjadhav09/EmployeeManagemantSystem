package com.example.test.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.test.Repository.FinanceRepository;
import com.example.test.model.Employe;
import com.example.test.model.Finance_details;


@Service
public class FinanceService {
	@Autowired
	FinanceRepository financeRepository;

	public List<Finance_details> getfinancedetails(String pan_card) {
		
		return financeRepository.findbypancard(pan_card);
	}
	
	public Finance_details getfinancedetailsbyid(int id) {

		return financeRepository.findById(id).get();
	}

	public List<Finance_details> getaLLFinance() {
		return financeRepository.findAll();
	}

	public void Deletefinance(String pan_card) {
		
		financeRepository.deleteByPan(pan_card);
	}

	public Finance_details addfinancee(Finance_details f) {
		
		return financeRepository.save(f);
		
	}

	public Finance_details updatefinance(int  id , Finance_details newFinance_details) {
			
		 Optional<Finance_details> optionalProject = financeRepository.findById(id);
		    
		    
		    if (optionalProject.isPresent()) {
		    	Finance_details currDBvalues = optionalProject.get();
		        
		        currDBvalues.setPan_card(newFinance_details.getPan_card());
		        currDBvalues.setAadhar_card(newFinance_details.getAadhar_card());
		        currDBvalues.setBank_name(newFinance_details.getBank_name());
		        currDBvalues.setBranch_name(newFinance_details.getBranch_name());
		        currDBvalues.setIfsc_code(newFinance_details.getIfsc_code());
		        currDBvalues.setCtc_breakup(newFinance_details.getCtc_breakup());
		        
		        return financeRepository.save(currDBvalues);
		    }
			return newFinance_details;
	}
	
    public String deleteFinanceById(int id) {
        if (financeRepository.findById(id).isPresent()) {
            financeRepository.deleteById(id);
            return "Finance details deleted successfully";
        }
        return "No such finance details in the database";
    }
}
