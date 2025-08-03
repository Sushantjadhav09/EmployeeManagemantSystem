package com.example.test.Service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EncryptionService {
	private BCryptPasswordEncoder bCryptPasswordEncoder;

    public EncryptionService() {
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    public String encryptPassword(String password) {
        return bCryptPasswordEncoder.encode(password);
    }
    
    public boolean matches(String rawPassword, String encodedPassword) {
        return bCryptPasswordEncoder.matches(rawPassword, encodedPassword);
    }
}