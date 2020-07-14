package com.steinko.springbootreact;
public class BackEnd { 
	
	private String url;
	private String env;
	
	public BackEnd(String url, String env){ 
		this.url = url;	
		this.env = env;
	}
	
	public String getUrl() {
		return this.url;
	}
	
	public void setUrl(String url) {
		this.url = url;	
	}
	
	public String getEnv() {
		return this.env;
	}
	
	public void setEnv(String env) {
		this.env = env;	
	}
	
}