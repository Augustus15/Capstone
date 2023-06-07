package com.project.Transactions.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Component
@ControllerAdvice
public class NoTransactionFoundHandler {
	@ExceptionHandler(NoTransactionFoundException.class)
	public ResponseEntity<String> noTransactionFoundException(){
		return new ResponseEntity<String>("No Transaction Found.",HttpStatus.NOT_FOUND);
	}
}
