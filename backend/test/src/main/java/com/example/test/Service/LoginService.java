package com.example.test.Service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.test.Repository.LoginRepository;
import com.example.test.model.Employe;
import com.example.test.model.Login;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginRepository;
	
	@Autowired
	private EncryptionService encryptionService;
	
	public Login addLogin(Login login) {
		return loginRepository.save(login);
	}
	
	public Login getLoginByUsername(String username) {
		return loginRepository.getLoginByUsername(username);
	}
	
	public Map<String, Object> checkLogin(Login login) {
		Login foundLogin = getLoginByUsername(login.getUsername());
		
		if (foundLogin != null) {
            boolean passwordMatches = encryptionService.matches(login.getPassword(), foundLogin.getPassword());
            
            if (passwordMatches) {
            	Map<String, Object> response = new HashMap<>();
                response.put("userId", foundLogin.getId());  
                response.put("userType", foundLogin.getType()); 
                
                return response; 
            }
        }
		return null;
	}
}