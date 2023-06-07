package com.project.Transactions.Service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.NoTransactionException;

import com.project.Transactions.exception.InsufficientBalanceException;
import com.project.Transactions.model.Transaction;
import com.project.Transactions.model.User;
import com.project.Transactions.repository.TransactionRepository;
import com.project.Transactions.repository.UserRepository;

@Service
public class TransactionServiceImpl implements TransactionService{
	
	@Autowired
	TransactionRepository transactionRepository;
	@Autowired
	UserRepository userRepository;

	@Override
	public List<Transaction> getAllTransaction() {
		List<Transaction> get =transactionRepository.findAll();
		if(get !=null)
			return get;
		else
			throw new NoTransactionException("No Transaction Found.");
	}

	@Override
	public List<Transaction> getTransactionByType(String transactionType) {
		List<Transaction> get =transactionRepository.findByTransactionType(transactionType);
		if(get !=null)
			return get;
		else
			throw new NoTransactionException("No Transaction Found.");
	}

	@Override
	public List<Transaction> getTransactionByDate(String transactionDate) {
		List<Transaction> get =transactionRepository.findByTransactionDate(transactionDate);
		if(get !=null)
			return get;
		else 
			throw new NoTransactionException("No Transaction Found.");
	}

	@Override
	public List<Transaction> getTransactionByReceiver(String receiver) {
		List<Transaction> get =transactionRepository.findByReceiver(receiver);
		if(get !=null)
			return get;
		else 
			throw new NoTransactionException("No Transaction Found.");
	}

	@Override
	public Transaction postTransaction(Transaction transaction,long cardNumber) {
		User user =userRepository.findByTravelCardCardNumber(cardNumber);
		double userBalance =user.getTravelCard().getCardBalance();
		double amount =transaction.getAmount();
		
		if(amount < userBalance) {
			transaction.setCardBalance(userBalance -amount);
			Transaction post =transactionRepository.save(transaction);
			if(post !=null) {
				user.getTravelCard().setCardBalance(userBalance -amount);
				userRepository.save(user);
				return post;
			}
			else 
				throw new NoTransactionException("No Transaction Found.");
		}
		else
			throw new InsufficientBalanceException("Insufficient Balance.");	
	}
	
	private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	public static String generateRandomString(int length) {
		Random random = new Random();
		StringBuilder sb = new StringBuilder(length);
		for (int i = 0; i < length; i++) {
			int randomIndex = random.nextInt(CHARACTERS.length());
			char randomChar = CHARACTERS.charAt(randomIndex);
			sb.append(randomChar);
		}
		return sb.toString();
	}
	
	@Override
	public Transaction updateCardBalance(Transaction transaction, long cardNumber) {
		User user =userRepository.findByTravelCardCardNumber(cardNumber);
		double userBalance =user.getTravelCard().getCardBalance();
		double amount =transaction.getAmount();
	
		if(transaction.getAmount() >0 && transaction.getAmount() < user.getAccBalance()) {
	        user.getTravelCard().setCardBalance(userBalance + amount);
	        user.setAccBalance(user.getAccBalance() - amount);
	        
	        userRepository.save(user);
	        transaction.setTransactionId(generateRandomString(10));
	        transaction.setCardBalance(userBalance+amount);
	        return transactionRepository.save(transaction);
		}
		else
			throw new InsufficientBalanceException("Insufficient Balance.");
	}
}
