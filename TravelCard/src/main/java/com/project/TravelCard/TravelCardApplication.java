package com.project.TravelCard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@EnableCaching
@SpringBootApplication
public class TravelCardApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravelCardApplication.class, args);
	}
	
	

}
