package com.project.TravelCard.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.TravelCard.model.Card;
import com.project.TravelCard.model.User;

@Service
public interface TravelCardService {
	
	public long getCount();
	
	//ADMIN
	//Function to get info of all users
	public List<User> getAllUserInfo();
	
	//ADMIN & USER
	//Function to get info of an User based on Customer Id
	public User getUserInfo(int customerId);
	
	//ADMIN & USER
	//Fucntion to get details of User's card based on account number
	public Card getCardInfo(long cardNumber);

	//ADMIN & USER
	//Fucntion to update User's info based on email
	public User updateUserInfo(User user,int customerId);
	
	//ADMIN
	//Function to insert info of New User
	public User postNewUser(User user);
	
	//ADMIN & USER
	//Function to delete an User's info based on Customer ID
	public String deleteUserInfo(int customerId);
}
