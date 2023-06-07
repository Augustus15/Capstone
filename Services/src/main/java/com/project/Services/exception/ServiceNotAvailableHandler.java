package com.project.Services.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Component
@ControllerAdvice
public class ServiceNotAvailableHandler {
	@ExceptionHandler(ServiceNotAvailableException.class)
	public ResponseEntity<String> serviceNotAvailableException(){
		return new ResponseEntity<String>("Service Not Available.",HttpStatus.SERVICE_UNAVAILABLE);
	}
}
