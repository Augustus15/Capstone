package com.project.Services.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.Services.model.Services;

@Service
public interface ServicesService {
	public List<Services> getByRegionAndCategory(String region, String category);
}
