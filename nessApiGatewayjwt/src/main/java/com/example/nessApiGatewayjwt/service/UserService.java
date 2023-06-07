package com.example.nessApiGatewayjwt.service;

import org.springframework.stereotype.Service;

import com.example.nessApiGatewayjwt.model.User;

@Service
public interface UserService {

	
	public User resetPassword(User user);
	
	
}
