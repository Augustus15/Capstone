package com.project.Transactions.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.Transactions.model.Card;
import com.project.Transactions.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, Long>{
	public User findByTravelCardCardNumber(long cardNumber);
}
