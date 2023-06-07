package com.project.Services.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document (collection = "services")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Services {

	@Id
	int serviceId;
	String name;
	String country;
	String region;
	String category;
	double price;
	int rating;
	String description;
	String imageUrl;
	String facilities[];
	String googleMapLink;
	int headCount;
	String checkIn;
	String checkOut;	
}