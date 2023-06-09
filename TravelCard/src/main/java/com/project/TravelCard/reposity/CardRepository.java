package com.project.TravelCard.reposity;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.TravelCard.model.Card;

@Repository
public interface CardRepository extends MongoRepository<Card, Integer>{
	public Card findByCardNumber(long cardNumber);
}
