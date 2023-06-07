package com.project.TravelCard.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
	String line1;
	String city;
	String state;
	String pincode;
}
