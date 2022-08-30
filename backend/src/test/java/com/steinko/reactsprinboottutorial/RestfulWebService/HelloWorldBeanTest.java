package com.steinko.reactsprinboottutorial.RestfulWebService;


import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class HelloWorldBeanTest {

   @Test
     public void shouldRecieMessage() {
	   String message = "Hello World Bean Test";
	   HelloWorldBean  helloWorldBean= new HelloWorldBean(message);
	   assertEquals(helloWorldBean.getMessage(),message);
	   
   }
   
   @Test
   public void shouldChangeMessage() {
	   String message = "Hello World Bean Test";
	   HelloWorldBean  helloWorldBean= new HelloWorldBean("cool");
	   helloWorldBean.setMessage(message);
	   assertEquals(helloWorldBean.getMessage(),message);
	   
 }
   
   @Test
   public void shoulReciveToString() {
	   String message = "Hello World Bean Test";
	   HelloWorldBean  helloWorldBean= new HelloWorldBean(message);
	   assertEquals(helloWorldBean.toString(),"HelloWorldBean [message=Hello World Bean Test]");
	   
 }

}
