package com.steinko.reactsprinboottutorial;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFactory {
	public static Date generetDate(String aDate) {
	      SimpleDateFormat df
	        = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
	      
	      Date date;
	    	try  {		
	          date = df.parse(aDate);
		    } catch (ParseException ex)
		   {
		  	 date = null;
		   } 
	  	return date;
	}
}
