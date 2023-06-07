package com.project.TravelCard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.TravelCard.Exception.UserAlreadyExistsException;
import com.project.TravelCard.Exception.UserNotFoundException;
import com.project.TravelCard.model.Card;
import com.project.TravelCard.model.User;
import com.project.TravelCard.reposity.CardRepository;
import com.project.TravelCard.reposity.UserRepository;

@Service
public class TravelCardServiceImpl implements TravelCardService{

	@Autowired
	UserRepository userRepository;
	@Autowired
	CardRepository cardRepository;
	
	public long getCount() {
        return userRepository.count();
    }
	
	//ADMIN
	//Function to get info of all users
	@Override
	public List<User> getAllUserInfo() {
		List<User> get =userRepository.findAll();
		if(get !=null)
			return get;
		else
			throw new UserNotFoundException("User Not Found.");
	}

	//ADMIN & USER
	//Function to get info of an User based on Customer Id
	@Override
	public User getUserInfo(int customerId) {
		Optional<User> user =userRepository.findById(customerId);
		if(user.isPresent())
			return user.get();
		else
			throw new UserNotFoundException("User not found.");
	}

	//ADMIN & USER
	//Fucntion to get details of User's card based on account number
	@Override
	public Card getCardInfo(long AccountNumber) {
		User user =userRepository.findByAccountNumber(AccountNumber);
		if(user !=null)
			return user.getTravelCard();
		else
			throw new UserNotFoundException("User Not Found.");
	}

	//ADMIN & USER
	//Fucntion to update User's info based on email
	@Override
	public User updateUserInfo(User user,int customerId) {
		Optional<User> tempInfo =userRepository.findById(customerId);
		User oldInfo =tempInfo.get();
		if(oldInfo !=null) {
			if (user.getEmail() == null)
				oldInfo.setEmail(oldInfo.getEmail());
			else
				oldInfo.setEmail(user.getEmail());

			if (user.getMobileNumber() == null)
				oldInfo.setMobileNumber(oldInfo.getMobileNumber());
			else
				oldInfo.setMobileNumber(user.getMobileNumber());

			if (user.getAddress() == null)
				oldInfo.setAddress(oldInfo.getAddress());
			else
				oldInfo.setAddress(user.getAddress());
			
			userRepository.save(oldInfo);
			return oldInfo;
		}
		else
			throw new UserNotFoundException("User Not Found.");
	}

	//ADMIN
	//Function to insert info of New User
	@Override
	public User postNewUser(User user) {
		User post =userRepository.findByAccountNumber(user.getAccountNumber());		
		if(post ==null)
			return userRepository.save(user);
		else
			throw new UserAlreadyExistsException("User Already Exists.");
	}

	//ADMIN & USER
	//Function to delete an User's info based on Customer ID
	@Override
	public String deleteUserInfo(int customerId) {
		Optional<User> optUser =userRepository.findById(customerId);
		User user =optUser.get();
		if(user !=null) {
			userRepository.delete(user);
			return "User Info Deleted";
		}
		else
			throw new UserNotFoundException("User Not Found.");
	}
}
