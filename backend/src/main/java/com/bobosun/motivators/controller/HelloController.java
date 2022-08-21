package com.bobosun.motivators.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bobosun.motivators.model.Greeting;

@RestController
public class HelloController {
    @Value("${greeting}")
    private String greetingFromProperties;

    private Greeting greeting = new Greeting("");

    @RequestMapping("/")
    public ResponseEntity<Greeting> hello() {
        this.greeting.setGreeting(this.greetingFromProperties);
        return ResponseEntity.ok(greeting);
    }
}
