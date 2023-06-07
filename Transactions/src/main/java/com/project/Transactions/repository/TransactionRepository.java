package com.project.Transactions.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.Transactions.model.Transaction;
import com.project.Transactions.model.User;

@Repository	
public interface TransactionRepository extends MongoRepository<Transaction, String>{
	public List<Transaction> findByCardNumber(long cardNumber);
	public List<Transaction> findByCategory(String category);
	public List<Transaction> findByTransactionType(String transactionType);
	public List<Transaction> findByTransactionDate(String transactionDate);
	public List<Transaction> findByReceiver(String receiver);
}
