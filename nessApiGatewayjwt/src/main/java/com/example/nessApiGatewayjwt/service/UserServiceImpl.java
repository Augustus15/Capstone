package com.example.nessApiGatewayjwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nessApiGatewayjwt.model.User;
import com.example.nessApiGatewayjwt.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository userRepository;
	
	
	

	@Override
	public User resetPassword(User user) {
		
		User oldUser=userRepository.findByEmail(user.getEmail());
		oldUser.setPassword(user.getPassword());	
		
		userRepository.save(oldUser);
		
		return oldUser;
	}
	
	
}
