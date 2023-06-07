package com.project.Transactions.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Transactions.Service.TransactionService;
import com.project.Transactions.model.Transaction;

@CrossOrigin (origins = "*")
@RestController
@RequestMapping ("/Transaction")
public class TransactionController {
	@Autowired
	TransactionService transactionService;
	
	@GetMapping ("/")
	public ResponseEntity<List<Transaction>> getAllTransaction(){
		List<Transaction> get =transactionService.getAllTransaction();
		return new ResponseEntity<List<Transaction>>(get,HttpStatus.OK);
	}
	
	@GetMapping ("/Type/{transactionType}")
	public ResponseEntity<List<Transaction>> getTransactionByType(@PathVariable String transactionType){
		List<Transaction> get =transactionService.getTransactionByType(transactionType);
		return new ResponseEntity<List<Transaction>>(get,HttpStatus.OK);
	}
	
	@GetMapping ("/Date/{transactionDate}")
	public ResponseEntity<List<Transaction>> getTransactionByDate(@PathVariable String transactionDate){
		List<Transaction> get =transactionService.getTransactionByDate(transactionDate);
		return new ResponseEntity<List<Transaction>>(get,HttpStatus.OK);
	}
	
	@GetMapping ("/Receiver/{receiver}")
	public ResponseEntity<List<Transaction>> getTransactionByReceiver(@PathVariable String receiver){
		List<Transaction> get =transactionService.getTransactionByReceiver(receiver);
		return new ResponseEntity<List<Transaction>>(get,HttpStatus.OK);
	}
	
	@PostMapping ("NewTransaction/{cardNumber}")
	public ResponseEntity<Transaction> postTransaction(@RequestBody Transaction transaction,@PathVariable long cardNumber){
		Transaction post =transactionService.postTransaction(transaction, cardNumber);
		return new ResponseEntity<Transaction>(post,HttpStatus.CREATED);
	}
	
	@PutMapping ("AddMoney/{cardNumber}")
	public ResponseEntity<Transaction> updateCardBalance(@RequestBody Transaction transaction,@PathVariable long cardNumber){
		Transaction put =transactionService.updateCardBalance(transaction, cardNumber);
		return new ResponseEntity<Transaction>(put,HttpStatus.OK);
	}
}