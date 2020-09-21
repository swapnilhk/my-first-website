package com.swapnilhk.api.myfirstwebsite.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationController {
	
	@RequestMapping(method = RequestMethod.GET, value = "/api/helloworld")
	public String helloWorld(){
		return "Hello World";
	}
}
