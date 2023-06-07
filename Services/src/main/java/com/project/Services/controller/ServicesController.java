package com.project.Services.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Services.model.Services;
import com.project.Services.service.ServicesService;

@CrossOrigin (origins ="*")
@RestController
@RequestMapping ("/Services")
public class ServicesController {
	
	@Autowired
	ServicesService servicesService;
	
	@Cacheable (cacheNames ="ServiceData")
	@GetMapping ("/{region}/{category}")
	public ResponseEntity<List<Services>> getByRegionAndCategory(@PathVariable String region,@PathVariable String category){
		List<Services> get =servicesService.getByRegionAndCategory(region, category);
		return new ResponseEntity<List<Services>>(get,HttpStatus.OK);
	}
}
