package com.project.Transactions.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.Transactions.model.Transaction;
import com.project.Transactions.model.User;

@Service
public interface TransactionService {
	public List<Transaction> getAllTransaction();
	public List<Transaction> getTransactionByType(String transactionType);
	public List<Transaction> getTransactionByDate(String transactionDate);
	public List<Transaction> getTransactionByReceiver(String receiver);
	public Transaction updateCardBalance(Transaction transaction, long cardNumber);
	public Transaction postTransaction(Transaction transaction, long cardNumber);		
}
 