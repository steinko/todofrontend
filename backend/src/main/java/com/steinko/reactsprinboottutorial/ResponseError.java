package com.steinko.reactsprinboottutorial;

import java.util.List;

public class ResponseError {
	private List<String> errorMessage;
	private int statusCode;

	public List<String> getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(List<String> errorMessage) {
		this.errorMessage = errorMessage;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

}