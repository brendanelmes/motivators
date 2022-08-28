package com.bobosun.motivators;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bobosun.motivators.repository.TeamRepository;


@SpringBootApplication
public class MotivatorsApplication {

	@Autowired TeamRepository teamRepository;

	public static void main(String[] args) {
		SpringApplication.run(MotivatorsApplication.class, args);
	}

}
