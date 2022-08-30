package com.steinko.reactsprinboottutorial;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.core.JsonParser;
import java.text.ParseException;



public class CustomDateDeserialize extends StdDeserializer<Date> {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
    
    public CustomDateDeserialize() {
       this(null);
    }
    
    public CustomDateDeserialize(Class<?> vc) {
       super(vc);
    }
    
    @Override
    public Date deserialize(JsonParser jsonparser, DeserializationContext context) throws IOException {
         String date = jsonparser.getText();
         try {
             return formatter.parse(date);
         } catch (ParseException e) {
             throw new RuntimeException(e);
         }
  }
}