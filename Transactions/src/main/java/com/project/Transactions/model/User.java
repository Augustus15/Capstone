package com.project.Transactions.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	@Id
	long customerId;
	long accountNumber;
	String ifsc;
	String mobileNumber;
	@Indexed (unique = true)
	String email;
	Address address;
	String firstName;
	String lastName;
	String password;
	String dob;
	int tpin;
	double accBalance;
	Card travelCard;
	boolean hasTravelCard;
}
