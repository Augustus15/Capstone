package com.project.TravelCard.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
	
	String transactionId;
	long cardNumber;
	String receiver;
	String category;
	String transactionDate;
	double amount;
	String transactionType;
	double cardBalance;
}
