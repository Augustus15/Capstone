package com.project.Transactions.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Component
@ControllerAdvice
public class InsufficientBalanceHandler {
	@ExceptionHandler(InsufficientBalanceException.class)
	public ResponseEntity<String> insufficientBalanceException(){
		return new ResponseEntity<String>("Insufficient Balance",HttpStatus.NOT_ACCEPTABLE);
	}
}