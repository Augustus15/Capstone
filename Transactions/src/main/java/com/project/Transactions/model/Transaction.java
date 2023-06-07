package com.project.Transactions.model;

import java.util.Random;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document (collection = "transaction")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {

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
	
	 @Id
	 String transactionId =generateRandomString(10);
	 long cardNumber;
	 String receiver;
	 String category;
	 String transactionDate;
	 double amount;
	 String transactionType;
	 double cardBalance;
}
