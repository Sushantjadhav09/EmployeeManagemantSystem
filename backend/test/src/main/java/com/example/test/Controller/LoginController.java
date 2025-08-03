package com.example.test.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.Service.EncryptionService;
import com.example.test.Service.LoginService;
import com.example.test.model.Login;

@RestController
@CrossOrigin("*")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	@Autowired
    EncryptionService encryptionService;
	
	@PostMapping(value="/register")
	public String register(@RequestBody Login login) {
		String encryptedPassword = encryptionService.encryptPassword(login.getPassword());
        login.setPassword(encryptedPassword); 
        loginService.addLogin(login);
		return "Registered successfully"; 
	}
	
	@PostMapping(value="/login")
	public Map<String, Object> login(@RequestBody Login login) {
        return loginService.checkLogin(login);
	}
}