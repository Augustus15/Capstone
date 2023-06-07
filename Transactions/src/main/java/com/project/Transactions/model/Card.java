package com.project.Transactions.model;

import org.springframework.data.mongodb.core.index.Indexed;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Card {
	
	@Indexed (unique = true)
	long cardNumber;
	int cvv;
	double cardBalance;
	String validFrom;
	String validThru;
	long accountNumber;
	Transaction transactions;
	int transactionCount;
}
