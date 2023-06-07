package com.project.Services.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Services.exception.ServiceNotAvailableException;
import com.project.Services.model.Services;
import com.project.Services.repository.ServicesRepository;

@Service 
public class ServicesServiceImpl implements ServicesService{
	
	@Autowired
	ServicesRepository servicesRepository;

	@Override
	public List<Services> getByRegionAndCategory(String region, String category) {
		List<Services> services =servicesRepository.findByRegionAndCategory(region, category);
		if(services !=null)
			return services;
		else
			throw new ServiceNotAvailableException("Service Not Available.");
	}
}