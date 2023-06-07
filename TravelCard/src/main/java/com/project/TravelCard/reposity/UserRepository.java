package com.project.TravelCard.reposity;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.TravelCard.model.User;

@Repository
public interface UserRepository extends MongoRepository<User,Integer>{

	//public long count(String conn, String collection);
	public User findByCustomerId(int customerId);
	public User findByEmail(String email);
	public User findByAccountNumber(long accountNumber);
}
