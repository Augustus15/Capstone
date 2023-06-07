package com.project.Services.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.Services.model.Services;

public interface ServicesRepository extends MongoRepository<Services, Integer>{
	public List<Services> findByRegionAndCategory(String region, String category);
}
