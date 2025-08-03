package com.example.test.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.test.Repository.ProfessionalDTLSrepository;
import com.example.test.model.Employe;
import com.example.test.model.empprofessionaldetails;
@Service
public class ProfessionalDTLSservice {
	@Autowired
	ProfessionalDTLSrepository professionalDTLSrepository;

	public List<empprofessionaldetails> getprofessionaldetailsbycity(String city) {
		
		return professionalDTLSrepository.getprofdetailsbycity(city);
	}
	
	public empprofessionaldetails getprofessionaldetailsbyid(int employment_code) {

		return professionalDTLSrepository.findById(employment_code).get();
	}

	public List<empprofessionaldetails> getaLLprofdetails() {
	
		return professionalDTLSrepository.findAll();
	}

	public empprofessionaldetails addproffesionaldetails(empprofessionaldetails ep) {
		
		
		return professionalDTLSrepository.save(ep);
	}

	public void DeleteProffdetails(String employment_code) {
		
		professionalDTLSrepository.deletebyemployment_code(employment_code);
		
	}

	public empprofessionaldetails updateprofdetails(int employment_code, empprofessionaldetails newempprofessionaldetails) {
		
		 Optional<empprofessionaldetails> optionalProject = professionalDTLSrepository.findById(employment_code);
		    
		    
		    if (optionalProject.isPresent()) {
		    	empprofessionaldetails currDBvalues = optionalProject.get();
		        
		        currDBvalues.setCompany_mail(newempprofessionaldetails.getCompany_mail());
		        currDBvalues.setOffice_phone(newempprofessionaldetails.getOffice_phone());
		        currDBvalues.setCity(newempprofessionaldetails.getCity());
		        currDBvalues.setOffice_address(newempprofessionaldetails.getOffice_address());
		        currDBvalues.setReporting_manager_mail(newempprofessionaldetails.getReporting_manager_mail());
		        currDBvalues.setHr_name(newempprofessionaldetails.getHr_name());
		        currDBvalues.setEmployment_history(newempprofessionaldetails.getEmployment_history());
		        currDBvalues.setDate_of_joining(newempprofessionaldetails.getDate_of_joining());
		        
		        return professionalDTLSrepository.save(currDBvalues);
		    }
			return newempprofessionaldetails;
		
		
	}

}
