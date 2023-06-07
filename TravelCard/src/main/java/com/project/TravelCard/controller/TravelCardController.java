package com.project.TravelCard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.TravelCard.model.Card;
import com.project.TravelCard.model.User;
import com.project.TravelCard.service.TravelCardService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping ("TravelCard")
public class TravelCardController {
	@Autowired
	TravelCardService travelCardService;
	
	@Cacheable (cacheNames = "allUserInfo")
	@GetMapping ("/")
	public ResponseEntity<List<User>> getAllUserInfo(){
		List<User> get =travelCardService.getAllUserInfo();
		return new ResponseEntity<List<User>>(get,HttpStatus.OK);
	}
	
	@Cacheable (cacheNames = "userInfo")
	@GetMapping ("/UserInfo")
	public ResponseEntity<User> getUserInfo(@RequestParam (required =false) int customerId){
		User get =travelCardService.getUserInfo(customerId);
		return new ResponseEntity<User>(get,HttpStatus.OK);
	}
	
	@Cacheable (cacheNames = "cardInfo")
	@GetMapping ("/CardInfo")
	public ResponseEntity<Card> getCardInfo(@RequestParam (required = false) long accountNumber){
		Card get =travelCardService.getCardInfo(accountNumber);
		return new ResponseEntity<Card>(get,HttpStatus.OK);
	}
	
	@CacheEvict (value = "allUserInfo", allEntries = true)
	@PutMapping ("/Update/UserInfo")
	public ResponseEntity<User> updateUserInfo(@RequestParam (required = false) int customerId, @RequestBody User user){
		User put =travelCardService.updateUserInfo(user,customerId);
		return new ResponseEntity<User>(put,HttpStatus.OK);
	}
	
	@DeleteMapping ("/RemoveUser")
	public ResponseEntity<String> deleteUserInfo(@RequestParam (required = false) int customerId){
		String message =travelCardService.deleteUserInfo(customerId);
		return new ResponseEntity<String>(message,HttpStatus.OK);
	}
	
	@CacheEvict (value = "allUserInfo", allEntries = true)
	@PostMapping ("/NewUser")
	public ResponseEntity<User> postNewUser(@RequestBody User user){
		User post =travelCardService.postNewUser(user);
		post.setCustomerId(travelCardService.getCount()+1);
		return new ResponseEntity<User>(post,HttpStatus.CREATED);
	}
	

}
