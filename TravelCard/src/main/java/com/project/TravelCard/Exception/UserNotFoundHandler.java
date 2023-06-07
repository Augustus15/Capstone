package com.project.TravelCard.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Component
@ControllerAdvice
public class UserNotFoundHandler {
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<String> userNotFoundException(){
		return new ResponseEntity<String>("User not found.",HttpStatus.NOT_FOUND);
	}
}
